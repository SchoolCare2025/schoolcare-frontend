import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { type InputScoresResponse, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
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
import { z } from "zod";
import Main from "../../_components/Main";

const AddScoresSchema = z.object({
	school_class: z.string().min(1, "Class is required"),
	session: z.string().min(1, "Session is required"),
	term: z.string().min(1, "Term is required"),
});

type AddScoresFormData = z.infer<typeof AddScoresSchema>;

function AddScoresPage() {
	const navigate = useNavigate();

	const methods = useForm<AddScoresFormData>({
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

	const onSubmit = async (data: AddScoresFormData) => {
		await callBackendApi<InputScoresResponse>("/school/results/get-class-session-term", {
			body: data,
			method: "POST",

			onSuccess: (ctx) => {
				if (!ctx.data.data) return;

				useInputScoreFormStore.setState({ responseData: ctx.data.data });
				void navigate("/dashboard/students/input-scores/table");
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Input Student Scores</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<div className="flex gap-[70px]">
						<Form.Field<typeof methods.control> name="session" className="w-full gap-4">
							<Form.Label className="font-medium">Session</Form.Label>

							<Form.FieldController
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `border-school-gray data-placeholder:text-school-gray h-[75px]
												rounded-[20px] border-2 bg-white px-8 text-[14px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose session" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 p-0 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<List
												each={schoolSessionQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														value={item}
														className="h-12 bg-gray-200 font-medium text-black
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

						<Form.Field<typeof methods.control> name="term" className="w-full gap-4">
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
												base: `border-school-gray data-placeholder:text-school-gray h-[75px]
												rounded-[20px] border-2 bg-white px-8 text-[14px] md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose term" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: "bg-white/90 p-0 backdrop-blur-lg",
												viewport: "gap-1",
											}}
										>
											<List
												each={schoolTermQueryResult.data?.data ?? []}
												render={(item) => (
													<Select.Item
														value={item}
														className="h-12 bg-gray-200 font-medium text-black
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
											base: `border-school-gray data-placeholder:text-school-gray h-[75px]
											rounded-[20px] border-2 bg-white px-8 text-[14px] md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose student's class" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: "bg-white/90 p-0 backdrop-blur-lg",
											viewport: "gap-1",
										}}
									>
										<List
											each={classesQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													value={`${item.school_class} ${item.grade}`}
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
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
							className="border-school-blue text-school-blue max-w-fit rounded-[10px] border
								bg-white px-8 py-4 text-[18px] font-bold"
						>
							Cancel
						</button>

						<Form.Submit
							disabled={methods.formState.isSubmitting || !methods.formState.isValid}
							className={cnMerge(
								`bg-school-blue flex w-[150.5px] items-center justify-center rounded-[10px] px-8
								py-4 text-[18px] font-bold text-white`,
								!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
							)}
						>
							{methods.formState.isSubmitting ? (
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							) : (
								"Continue"
							)}
						</Form.Submit>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AddScoresPage;
