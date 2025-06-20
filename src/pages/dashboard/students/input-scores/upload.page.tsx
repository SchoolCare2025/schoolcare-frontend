import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { DropZoneInput, DropZoneInputImagePreview, getElementList, IconBox } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import { allSubjectsInSchoolQuery } from "@/store/react-query/queryFactory";
import { useInputScoreFormStore } from "@/store/zustand/inputScoresFormStore";
import { Main } from "../../-components/Main";

const UploadSchema = z.object({
	file: z.file({ error: "File is required" }),
	subject: z.string().min(1, "Subject is required"),
});

function UploadPage() {
	const navigate = useNavigate();

	const methods = useForm({
		defaultValues: {
			subject: "",
		},
		resolver: zodResolver(UploadSchema),
	});

	const schoolSubjectsQueryResult = useQuery(allSubjectsInSchoolQuery());

	const [SubjectList] = getElementList("base");

	const {
		actions: { resetFormStore },
		responseData: { class_session_term },
	} = useInputScoreFormStore((state) => state);

	const onSubmit = methods.handleSubmit(async (data) => {
		const formData = new FormData();

		for (const [key, value] of Object.entries(data)) {
			formData.set(key, value as never);
		}

		formData.set("class_session_term", JSON.stringify(class_session_term));

		await callBackendApi("/school/results", {
			body: formData,
			meta: { toast: { success: true } },
			method: "POST",

			onSuccess: () => {
				resetFormStore();
				void navigate("/dashboard");
			},
		});
	});

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Upload Result Sheet</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-10 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<Form.Field<typeof methods.control> name="subject" className="w-full gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Subject</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[48px] rounded-[8px] border border-school-gray-lighter bg-white
											px-4 text-[12px] data-placeholder:text-school-gray md:h-[75px]
											md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
											icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose subject" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<SubjectList
											each={schoolSubjectsQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													key={item.subject}
													value={item.subject}
													className="h-12 text-[12px] font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
												>
													{item.subject}
												</Select.Item>
											)}
										/>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Field>

					<Form.Field<typeof methods.control> name="file" className="w-full gap-3 md:gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">
							Upload CSV Result file
						</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<DropZoneInput
									classNames={{
										base: `w-full items-center gap-2 rounded-[8px] border-[3px] border-dashed
										border-gray-600 px-4 py-[60px]`,
									}}
									allowedFileTypes={["text/csv"]}
									maxFileSize={6}
									onChange={field.onChange}
								>
									<span className="block size-8 shrink-0 md:size-10">
										<IconBox icon="solar:file-send-outline" className="size-full" />
									</span>

									<p className="text-[14px] md:text-base">
										Drag and drop or <span className="text-school-blue">Browse</span> your file
									</p>

									<DropZoneInputImagePreview classNames={{ listItem: "px-3 md:px-6" }} />
								</DropZoneInput>
							)}
						/>
					</Form.Field>

					<Form.Submit
						disabled={methods.formState.isSubmitting || !methods.formState.isValid}
						className={cnMerge(
							`flex w-[120.5px] items-center justify-center self-end rounded-[10px] bg-school-blue
							px-8 py-4 text-[18px] font-bold text-white`,
							methods.formState.isSubmitting && "grid",
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{methods.formState.isSubmitting && (
							<span className="flex justify-center [grid-area:1/1]">
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							</span>
						)}
						<p className={cnJoin(methods.formState.isSubmitting && "invisible [grid-area:1/1]")}>
							Submit
						</p>
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default UploadPage;
