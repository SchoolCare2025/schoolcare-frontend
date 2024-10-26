import { Form } from "@/components/ui";
import { useForm } from "react-hook-form";
import Main from "../../_components/Main";

function ViewSingleStudent() {
	const methods = useForm({
		defaultValues: {
			reg_number: "",
		},
	});

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">View Student</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<Form.Item<typeof methods.control> name="reg_number" className="w-full gap-4">
						<Form.Label className="font-medium">Reg. Number*</Form.Label>

						<Form.Input
							placeholder="Enter student's reg number"
							className="h-[75px] rounded-[20px] border-2 border-school-gray px-8 text-[14px]
								md:text-base"
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

export default ViewSingleStudent;
