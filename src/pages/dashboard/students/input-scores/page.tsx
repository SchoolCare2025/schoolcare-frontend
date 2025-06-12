import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type InputScoresResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import { z } from "@/lib/zod";
import {
	allClassesInSchoolQuery,
	schoolSessionQuery,
	schoolTermQuery,
} from "@/store/react-query/queryFactory";
import { useInputScoreFormStore } from "@/store/zustand/inputScoresFormStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Main } from "../../-components/Main";

const AddScoresSchema = z.object({
	school_class: z.string().min(1, "Class is required"),
	session: z.string().min(1, "Session is required"),
	term: z.string().min(1, "Term is required"),
});

function AddScoresPage() {
	const navigate = useNavigate();

	const methods = useForm({
		defaultValues: {
			school_class: "",
			session: "",
			term: "",
		},
		resolver: zodResolver(AddScoresSchema),
	});

	const schoolSessionQueryResult = useQuery(schoolSessionQuery());
	const schoolTermQueryResult = useQuery(schoolTermQuery());
	const classesQueryResult = useQuery(allClassesInSchoolQuery());

	const [List] = getElementList("base");

	const onSubmit = methods.handleSubmit(async (data) => {
		await callBackendApi<InputScoresResponse>("/school/results/get-class-session-term", {
			body: data,
			method: "POST",

			onSuccess: (ctx) => {
				if (!ctx.data.data) return;

				useInputScoreFormStore.setState({ responseData: ctx.data.data });
				void navigate("/dashboard/students/input-scores/table");
			},
		});
	});

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Input Student Scores</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-10 md:gap-[56px]"
					onSubmit={(event) => void onSubmit(event)}
				>
					<div className="flex gap-6 md:gap-[70px]">
						<Form.Field<typeof methods.control> name="session" className="w-full min-w-0 gap-4">
							<Form.Label className="text-[14px] font-medium md:text-base">Session</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[48px] rounded-[8px] border-2 border-school-gray bg-white px-4
												text-[12px] data-placeholder:text-school-gray md:h-[75px]
												md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
												icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose session" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<List
												each={schoolSessionQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														key={item}
														value={item}
														className="h-12 bg-gray-200 text-[12px] font-medium text-black
															focus:bg-gray-300 focus:text-black
															data-[state=checked]:bg-gray-300 md:text-base"
													>
														{item}
													</Select.Item>
												)}
											/>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Field>

						<Form.Field<typeof methods.control> name="term" className="w-full min-w-0 gap-4">
							<Form.Label className="font-medium">Term</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[48px] rounded-[8px] border-2 border-school-gray bg-white px-4
												text-[12px] data-placeholder:text-school-gray md:h-[75px]
												md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
												icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose term" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<List
												each={schoolTermQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														key={item}
														value={item}
														className="h-12 bg-gray-200 text-[12px] font-medium text-black
															focus:bg-gray-300 focus:text-black
															data-[state=checked]:bg-gray-300 md:text-base"
													>
														{item}
													</Select.Item>
												)}
											/>
										</Select.Content>
									</Select.Root>
								)}
							/>
						</Form.Field>
					</div>

					<Form.Field<typeof methods.control> name="school_class" className="w-full gap-4">
						<Form.Label className="font-medium">Choose class</Form.Label>

						<Form.FieldController
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[48px] rounded-[8px] border-2 border-school-gray bg-white px-4
											text-[12px] data-placeholder:text-school-gray md:h-[75px]
											md:rounded-[20px] md:px-8 md:text-base md:text-[14px]`,
											icon: "text-school-gray group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose student's class" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<List
											each={classesQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													key={`${item.school_class} ${item.grade}`}
													value={`${item.school_class} ${item.grade}`}
													className="h-12 bg-gray-200 text-[12px] font-medium text-black
														focus:bg-gray-300 focus:text-black
														data-[state=checked]:bg-gray-300 md:text-base"
												>
													{`${item.school_class} ${item.grade}`}
												</Select.Item>
											)}
										/>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Field>

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="flex h-9 w-fit items-center justify-center self-end rounded-[10px] border
								border-school-blue bg-white px-5 text-[14px] font-semibold text-school-blue
								md:h-[56px] md:px-8 md:text-[18px]"
						>
							Cancel
						</button>

						<Form.Submit
							disabled={methods.formState.isSubmitting}
							className={cnMerge(
								`flex h-9 w-fit items-center justify-center self-end rounded-[10px] bg-school-blue
								px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8 md:text-[18px]`,
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
								Continue
							</p>
						</Form.Submit>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AddScoresPage;
