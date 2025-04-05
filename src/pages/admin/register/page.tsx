import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
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
				<h1 className="text-[30px] font-bold">Admin Register</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Field<typeof methods.control> name="school" className="w-full gap-4">
						<Form.Label className="font-medium">School Name</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="border-school-gray h-[75px] rounded-[20px] border-2 bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>
					<Form.Field<typeof methods.control> name="email" className="w-full gap-4">
						<Form.Label className="font-medium">Email</Form.Label>

						<Form.Input
							placeholder="Enter school email"
							className="border-school-gray h-[75px] rounded-[20px] border-2 bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>
					<Form.Field<typeof methods.control> name="password" className="w-full gap-4">
						<Form.Label className="font-medium">Password</Form.Label>

						<Form.Input
							type="password"
							placeholder="Enter password"
							classNames={{
								inputGroup: `border-school-gray h-[75px] rounded-[20px] border-2 bg-white px-8
								text-[14px] md:text-base`,
							}}
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Field>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<Form.Submit
						disabled={methods.formState.isSubmitting}
						className="bg-school-blue grid w-[150px] place-content-center self-end rounded-[10px]
							px-8 py-4 text-[18px] font-bold text-white"
					>
						{methods.formState.isSubmitting ? (
							<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
						) : (
							"Register"
						)}
					</Form.Submit>
				</Form.Root>
			</section>
		</Main>
	);
}

export default AdminRegisterPage;
