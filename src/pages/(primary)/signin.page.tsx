import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Main from "../_components/Main";

function SigninPage() {
	const methods = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	return (
		<Main className="mt-[56px] flex flex-col gap-8 px-[92px]">
			<header className="text-center">
				<h1 className="text-[30px] font-bold">Welcome</h1>
				<p className="text-[18px] font-bold">We are pleased to have you back</p>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit((data) => console.info(data))(event)}
				>
					<Form.Item<typeof methods.control> name="email" className="gap-4">
						<Form.Label className="font-medium">School email address*</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="h-[75px] rounded-[20px] border-2 border-school-gray px-8 text-[14px]
								md:text-base"
						/>
					</Form.Item>

					<Form.Item<typeof methods.control> name="password" className="gap-4">
						<Form.Label className="font-medium">School Password*</Form.Label>

						<Form.Input
							placeholder="Enter school password"
							className="h-[75px] rounded-[20px] border-2 border-school-gray px-8 text-[14px]
								md:text-base"
						/>
					</Form.Item>

					<div className="flex justify-between">
						<div className="flex items-center gap-3">
							<input type="checkbox" className="size-[30px]" />
							<label className="font-medium">Keep me signed in</label>
						</div>

						<Link to="#"> Forgotten Password</Link>
					</div>

					<button
						type="submit"
						className="mt-3 flex max-w-fit items-center gap-4 self-center rounded-[60px]
							bg-school-blue px-[100px] py-4 text-[22px] font-bold text-white"
					>
						Login
						<IconBox icon="material-symbols:arrow-outward-rounded" />
					</button>
				</Form.Root>
			</section>
		</Main>
	);
}

export default SigninPage;
