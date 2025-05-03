import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import { cnJoin, cnMerge } from "@/lib/utils/cn";
import Main from "@/pages/_components/Main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { z } from "zod";

const AdminRegisterSchema = z.object({
	email: z.string().email("Please enter a valid email!"),
	password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters"),
	school: z.string().min(1, "School name is required"),
});

type AdminRegisterFormData = z.infer<typeof AdminRegisterSchema>;

function AdminRegisterPage() {
	const navigate = useNavigate();

	const methods = useForm<AdminRegisterFormData>({
		defaultValues: {
			email: "",
			password: "",
			school: "",
		},
		resolver: zodResolver(AdminRegisterSchema),
	});

	const onSubmit = async (data: AdminRegisterFormData) => {
		await callBackendApi("/school/admin/register", {
			body: data,
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("root.serverError", {
					message: ctx.error.errorData.errors?.school,
				});
			},

			onSuccess: () => {
				void navigate("/signin");
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[24px] font-bold md:text-[30px]">Admin Register</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-10 md:gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="school" className="w-full gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">School Name</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>
					<Form.Field<typeof methods.control> name="email" className="w-full gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Email</Form.Label>

						<Form.Input
							placeholder="Enter school email"
							className="h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white px-4
								text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px] md:px-8
								md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>
					<Form.Field<typeof methods.control> name="password" className="w-full gap-4">
						<Form.Label className="text-[14px] font-medium md:text-base">Password</Form.Label>

						<Form.Input
							type="password"
							placeholder="Enter password"
							classNames={{
								inputGroup: `h-[48px] gap-3.5 rounded-[8px] border-2 border-school-gray bg-white
								px-4 text-[12px] data-placeholder:text-school-gray md:h-[75px] md:rounded-[20px]
								md:px-8 md:text-base`,
							}}
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<Form.Submit
						disabled={methods.formState.isSubmitting}
						className={cnMerge(
							`mt-12 flex h-9 w-fit items-center justify-center self-end rounded-[10px]
							bg-school-blue px-5 text-[14px] font-semibold text-white md:h-[56px] md:px-8
							md:text-[18px]`,
							!methods.formState.isValid && "cursor-not-allowed bg-gray-400",
							methods.formState.isSubmitting && "grid"
						)}
					>
						{methods.formState.isSubmitting && (
							<span className="flex justify-center [grid-area:1/1]">
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							</span>
						)}
						<p className={cnJoin(methods.formState.isSubmitting && "invisible [grid-area:1/1]")}>
							Register
						</p>
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AdminRegisterPage;
