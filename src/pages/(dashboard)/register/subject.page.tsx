import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { validateInputValue } from "@/lib/utils/validateInputValue";
import { useForm } from "react-hook-form";
import Main from "../_components/Main";

function RegisterSubjectPage() {
	const methods = useForm({
		defaultValues: {
			subjects: [] as string[],
		},
	});

	const [SubjectList] = getElementList();

	const handleAddSubject = (value: string) => {
		const validSubject = validateInputValue(methods.getValues().subjects, value);

		if (!validSubject) return;

		methods.setValue("subjects", [...methods.getValues().subjects, validSubject]);
	};

	const handleRemoveTags = (tag: string) => () => {
		const newTagState = methods.getValues().subjects.filter((tagItem) => tagItem !== tag);

		methods.setValue("subjects", newTagState);
	};

	const watchedSubjects = methods.watch("subjects");

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Register Subjects</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-8"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<Form.Item<typeof methods.control> name="subjects" className="gap-4">
						<Form.Label className="font-medium">Class Name</Form.Label>

						<Form.Controller
							render={({ field }) => (
								<Select.Root name={field.name} onValueChange={handleAddSubject}>
									<Select.Trigger
										classNames={{
											base: `h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
											text-[14px] data-[placeholder]:text-school-gray md:text-base`,
											icon: "text-gray-700 group-data-[state=open]:rotate-180 md:size-6",
										}}
									>
										<Select.Value placeholder="Choose Subject" />
									</Select.Trigger>

									<Select.Content
										classNames={{
											base: `border-medinfo-primary-main border-[1.4px] bg-white/90 p-0
											backdrop-blur-lg`,
											viewport: "gap-1",
										}}
									>
										<Select.Item
											value="steeze"
											className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
												focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
										>
											Steeze
										</Select.Item>
										<Select.Item
											value="cooking"
											className="h-12 bg-gray-200 font-medium text-black focus:bg-gray-300
												focus:text-black data-[state=checked]:bg-gray-300 md:text-base"
										>
											Cooking
										</Select.Item>
									</Select.Content>
								</Select.Root>
							)}
						/>
					</Form.Item>

					<button
						type="submit"
						className="max-w-fit self-end rounded-[10px] bg-school-blue px-8 py-2.5 text-[18px]
							font-bold text-white"
					>
						Register
					</button>
				</Form.Root>
			</section>

			<section>
				<SubjectList
					className="flex flex-wrap gap-2 text-xs font-medium text-school-blue lg:text-base"
					each={watchedSubjects}
					render={(subject, index) => (
						<li
							key={`${subject}-${index}`}
							className="flex min-w-20 items-center justify-between gap-2.5 rounded-[60px]
								bg-school-blue px-8 py-2.5 text-white"
						>
							<p>{subject}</p>

							<button
								className="transition-transform duration-100 active:scale-[1.12]"
								type="button"
								onClick={handleRemoveTags(subject)}
							>
								<IconBox icon="gridicons:cross" className="size-[17px]" />
							</button>
						</li>
					)}
				/>
			</section>
		</Main>
	);
}

export default RegisterSubjectPage;
