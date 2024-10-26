import { IconBox } from "@/components/common";
import { EditIcon } from "@/components/icons";
import { Form } from "@/components/ui";
import Main from "@/pages/_components/Main";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function PersonalInfoPage() {
	const methods = useForm({
		defaultValues: {
			code: "",
			email: "",
			name: "",
		},
	});

	const navigate = useNavigate();

	return (
		<Main className="mt-[56px] flex flex-col gap-8 px-7 md:px-[92px]">
			<header>
				<h1 className="text-[18px] font-bold md:text-[30px]">Register your school</h1>
				<p className="mt-2 text-[10px] md:text-[18px]">Please fill in the details below</p>

				<span
					className="relative mt-4 block size-[110px] rounded-full bg-gray-200 md:mt-8 md:size-[200px]"
				>
					<button type="button">
						<EditIcon className="absolute bottom-2 right-3 size-[18px] md:size-[40px]" />
					</button>
				</span>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="mt-3 gap-8 md:gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<Form.Item<typeof methods.control> name="name" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							Name of School
						</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>
					</Form.Item>

					<Form.Item<typeof methods.control> name="email" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">School Email</Form.Label>

						<Form.Input
							placeholder="Enter school password"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>
					</Form.Item>

					<Form.Item<typeof methods.control> name="email" className="gap-4">
						<Form.Label className="text-[14px] font-semibold md:text-base">
							School Code/ID
						</Form.Label>

						<Form.Input
							placeholder="Enter school password"
							className="h-[60px] rounded-[10px] border-2 border-school-gray px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>
					</Form.Item>

					<button
						type="submit"
						className="flex max-w-fit items-center gap-3 self-end rounded-[4px] bg-school-blue px-3
							py-[6px] text-[14px] font-semibold text-white md:rounded-[8px] md:px-5 md:py-[10px]
							md:text-[18px]"
						onClick={() => navigate("/register/address")}
					>
						Next
						<IconBox icon="material-symbols:arrow-forward-ios-rounded" />
					</button>
				</Form.Root>
			</section>
		</Main>
	);
}

export default PersonalInfoPage;
