import { DropZoneImagePreview, DropZoneInput, IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { allSubjectsInSchoolQuery, sessionQuery } from "@/store/react-query/queryFactory";
import { useInputScoreFormStore } from "@/store/zustand/inputScoresFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";
import Main from "../../_components/Main";

const UploadSchema = z.object({
	file: z.custom<File | null>((value) => value instanceof File, "File is required"),
	subject: z.string().min(1, "Subject is required"),
});

type UploadFormData = z.infer<typeof UploadSchema>;

function UploadPage() {
	const navigate = useNavigate();

	const methods = useForm<UploadFormData>({
		defaultValues: {
			file: null,
			subject: "",
		},
		resolver: zodResolver(UploadSchema),
	});

	const sessionQueryResult = useQuery(sessionQuery());

	const schoolSubjectsQueryResult = useQuery(
		allSubjectsInSchoolQuery(sessionQueryResult.data?.data?.school)
	);

	const [SubjectList] = getElementList("base");

	const {
		actions: { resetFormStore },
		responseData: { class_session_term },
	} = useInputScoreFormStore((state) => state);

	const onSubmit = async (data: UploadFormData) => {
		const formData = new FormData();

		for (const [key, value] of Object.entries(data)) {
			formData.set(key, value as NonNullable<typeof value>);
		}

		formData.set("class_session_term", JSON.stringify(class_session_term));

		await callBackendApi("/school/results", {
			body: formData,
			meta: {
				toast: {
					success: true,
				},
			},
			method: "POST",

			onSuccess: () => {
				resetFormStore();
				void navigate("/dashboard");
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Upload Result Sheet</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="subject" className="w-full gap-4">
						<Form.Label className="font-medium">Subject</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `border-school-gray data-placeholder:text-school-gray h-[75px]
											rounded-[20px] border-2 bg-white px-8 text-[14px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose subject" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<SubjectList
											each={schoolSubjectsQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													value={item.subject}
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
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

					<Form.Field<typeof methods.control> name="file" className="w-full gap-4">
						<Form.Label className="font-medium">Upload CSV Result file</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<>
									<DropZoneInput value={field.value} onChange={field.onChange} />

									<DropZoneImagePreview
										classNames={{ listItem: "px-6" }}
										value={field.value}
										onChange={field.onChange}
									/>
								</>
							)}
						/>
					</Form.Field>

					<Form.Submit
						disabled={methods.formState.isSubmitting || !methods.formState.isValid}
						className={cnMerge(
							`bg-school-blue flex w-[120.5px] items-center justify-center self-end rounded-[10px]
							px-8 py-4 text-[18px] font-bold text-white`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{methods.formState.isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
						) : (
							"Submit"
						)}
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default UploadPage;
