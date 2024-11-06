import { IconBox, getElementList } from "@/components/common";
import { Form, Select } from "@/components/ui";
import { validateInputValue } from "@/lib/utils/validateInputValue";
import type { KeyboardEvent, MouseEvent } from "react";
import { useForm } from "react-hook-form";
import Main from "../_components/Main";

function RegisterClassPage() {
	const methods = useForm({
		defaultValues: {
			class_grades: [] as string[],
			class_name: "",
		},
	});

	const [TagList] = getElementList();

	const handleAddTags = (event: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLButtonElement>) => {
		const isEnterKey = (event as KeyboardEvent).key === "Enter";

		if (event.type === "keydown" && !isEnterKey) return;

		if (event.type === "keydown") {
			event.preventDefault();
		}

		const inputField = event.currentTarget;

		const validClassGrade = validateInputValue(
			methods.getValues().class_grades,
			inputField.value.trim()
		);

		if (!validClassGrade) return;

		methods.setValue("class_grades", [...methods.getValues().class_grades, validClassGrade]);

		inputField.value = "";
	};

	const handleRemoveTags = (tag: string) => () => {
		const newTagState = methods.getValues().class_grades.filter((tagItem) => tagItem !== tag);

		methods.setValue("class_grades", newTagState);
	};

	const watchedTags = methods.watch("class_grades");

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Register Class</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-8"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<Form.Item<typeof methods.control> name="class_name" className="gap-4">
						<Form.Label className="font-medium">Class Name</Form.Label>

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
										<Select.Value placeholder="Choose class" />
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

					<Form.Item<typeof methods.control> name="class_grades" className="gap-4">
						<Form.Label className="font-medium">Class Grade</Form.Label>

						<Form.InputPrimitive
							placeholder="Jss1 A"
							className="h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
								text-[14px] md:text-base"
							onKeyDown={handleAddTags}
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
				<TagList
					className="flex flex-wrap gap-2 text-xs font-medium text-school-blue lg:text-base"
					each={watchedTags}
					render={(tag, index) => (
						<li
							key={`${tag}-${index}`}
							className="flex min-w-20 items-center justify-between gap-2.5 rounded-[60px] border
								border-school-blue bg-white px-8 py-2.5"
						>
							<p>{tag}</p>

							<button
								className="transition-transform duration-100 active:scale-[1.12]"
								type="button"
								onClick={handleRemoveTags(tag)}
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

export default RegisterClassPage;
