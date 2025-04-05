import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { type LoginData, callBackendApi } from "@/lib/api/callBackendApi";
import { cnMerge } from "@/lib/utils/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";

const SignInSchema = z.object({
	email: z.string().email("Please enter a valid email!"),
	password: z.string().min(1, "Password is required"),
});

type SignupFormValues = z.infer<typeof SignInSchema>;

function SigninPage() {
	const methods = useForm<SignupFormValues>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(SignInSchema),
	});

	const navigate = useNavigate();

	const onSubmit = async (data: SignupFormValues) => {
		await callBackendApi<LoginData>("/login", {
			body: data,

			meta: {
				toast: {
					success: true,
				},
			},

			method: "POST",

			onSuccess: (ctx) => {
				if (!ctx.data.data) return;

				localStorage.setItem("accessToken", ctx.data.data.access);
				localStorage.setItem("refreshToken", ctx.data.data.refresh);

				void navigate("/dashboard");
			},
		});
	};

	return (
		<main className="flex flex-col gap-8 px-6 py-16 md:px-[92px] md:py-[52px]">
			<header className="text-center">
				<h1 className="text-[30px] font-bold">Welcome</h1>
				<p className="text-[18px] font-bold">We are pleased to have you back</p>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px] text-[14px] md:text-base"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="email" className="gap-4">
						<Form.Label className="font-medium">School email address*</Form.Label>

						<Form.Input
							type="email"
							placeholder="Enter school email"
							className="border-school-gray h-[60px] rounded-[10px] border-2 px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.Field<typeof methods.control> name="password" className="gap-4">
						<Form.Label className="font-medium">School Password*</Form.Label>

						<Form.Input
							placeholder="Enter school password"
							className="border-school-gray h-[60px] rounded-[10px] border-2 px-8 text-[14px]
								md:h-[75px] md:rounded-[20px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<div className="flex justify-between gap-3">
						<div className="flex items-center gap-1 md:gap-3">
							<input type="checkbox" className="size-4 md:size-[20px]" />
							<label className="text-[13px] font-medium md:text-base">Keep me signed in</label>
						</div>

						<Link to="#" className="text-school-blue text-[13px] md:text-base">
							{" "}
							Forgotten Password
						</Link>
					</div>

					<Form.Submit
						disabled={methods.formState.isSubmitting || !methods.formState.isValid}
						className={cnMerge(
							`bg-school-blue mt-3 flex h-12 w-full max-w-[200px] items-center justify-center gap-4
							self-center rounded-[60px] text-[18px] font-bold text-white md:h-[65px]
							md:max-w-[300px] md:text-[22px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400"
						)}
					>
						{methods.formState.isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6 md:size-8" />
						) : (
							<>
								Login
								<span className="inline-block size-6">
									<IconBox icon="material-symbols:arrow-outward-rounded" className="size-full" />
								</span>
							</>
						)}
					</Form.Submit>
				</Form.Root>
			</section>
		</main>
	);
}

export default SigninPage;
