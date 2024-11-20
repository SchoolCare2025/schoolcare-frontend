import { getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { classesQuery, schoolSessionQuery, schoolTermQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Main from "../_components/Main";

function AddScoresPage() {
	const methods = useForm({
		defaultValues: {
			class: "",
			session: "",
			term: "",
		},
	});

	const schoolSessionQueryResult = useQuery(schoolSessionQuery());
	const schoolTermQueryResult = useQuery(schoolTermQuery());
	const classesQueryResult = useQuery(classesQuery());

	const [List] = getElementList("base");

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Input Student Scores</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<div className="flex gap-[70px]">
						<Form.Item<typeof methods.control> name="session" className="w-full gap-4">
							<Form.Label className="font-medium">Session</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white
												px-8 text-[14px] data-[placeholder]:text-school-gray md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose session" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
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
						</Form.Item>

						<Form.Item<typeof methods.control> name="term" className="w-full gap-4">
							<Form.Label className="font-medium">Term</Form.Label>

							<Form.Controller
								render={({ field }) => (
									<Select.Root
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<Select.Trigger
											classNames={{
												base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white
												px-8 text-[14px] data-[placeholder]:text-school-gray md:text-base`,
												icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
											}}
										>
											<Select.Value placeholder="Choose term" />
										</Select.Trigger>

										<Select.Content
											classNames={{
												base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
												backdrop-blur-lg`,
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
						</Form.Item>
					</div>

					<Form.Item<typeof methods.control> name="class" className="w-full gap-4">
						<Form.Label className="font-medium">Choose class</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<Select.Root name={field.name} value={field.value} onValueChange={field.onChange}>
									<Select.Trigger
										classNames={{
											base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
											text-[14px] data-[placeholder]:text-school-gray md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose student's class" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
											backdrop-blur-lg`,
											viewport: "gap-1",
										}}
									>
										<List
											each={classesQueryResult.data?.data ?? []}
											render={(item) => (
												<Select.Item
													value={item.school_class}
													className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
														focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
												>
													{item.school_class}
												</Select.Item>
											)}
										/>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Item>

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="max-w-fit rounded-[10px] border border-school-blue bg-white px-8 py-4
								text-[18px] font-bold text-school-blue"
						>
							Cancel
						</button>

						<button
							type="submit"
							className="max-w-fit rounded-[10px] bg-school-blue px-8 py-4 text-[18px] font-bold
								text-white"
						>
							Continue
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AddScoresPage;
