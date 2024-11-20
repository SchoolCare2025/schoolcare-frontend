import { IconBox } from "@/components/common";
import { Form } from "@/components/ui";
import { callBackendApi } from "@/lib/api/callBackendApi";
import Main from "@/pages/_components/Main";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const VerifySchoolSchema = z.object({
	school: z.string().min(1, "School name is required"),
});

type VerifySchoolFormData = z.infer<typeof VerifySchoolSchema>;

function VerifySchoolName() {
	const navigate = useNavigate();

	const methods = useForm<VerifySchoolFormData>({
		defaultValues: {
			school: "",
		},
		resolver: zodResolver(VerifySchoolSchema),
	});

	const onSubmit = async (data: VerifySchoolFormData) => {
		await callBackendApi("/school/admin/school-check", {
			body: data,
			method: "POST",

			onResponseError: (ctx) => {
				methods.setError("school", {
					message: ctx.error.errorData.errors?.school,
				});
			},

			onSuccess: () => {
				navigate("/admin/register");
			},
		});
	};

	return (
		<Main className="flex flex-col gap-8">
			<header>
				<h1 className="text-[30px] font-bold">Verify School name</h1>
			</header>

			<section>
				<Form.Root
					methods={methods}
					className="gap-[56px]"
					onSubmit={(event) => void methods.handleSubmit(onSubmit)(event)}
				>
					<Form.Item<typeof methods.control> name="school" className="w-full gap-4">
						<Form.Label className="font-medium">School Name</Form.Label>

						<Form.Input
							placeholder="Enter school name"
							className="h-[75px] rounded-[20px] border-2 border-school-gray bg-white px-8
								text-[14px] md:text-base"
						/>

						<Form.ErrorMessage className="text-red-600" />
					</Form.Item>

					<Form.ErrorMessage type="root" errorField="serverError" className="text-red-600" />

					<div className="flex gap-6 self-end">
						<button
							type="reset"
							className="max-w-fit rounded-[10px] border border-school-blue bg-white px-8 py-4
								text-[18px] font-bold text-school-blue"
						>
							Cancel
						</button>

						<button
							disabled={methods.formState.isSubmitting}
							type="submit"
							className="grid w-[150px] place-content-center rounded-[10px] bg-school-blue px-8 py-4
								text-[18px] font-bold text-white"
						>
							{methods.formState.isSubmitting ? (
								<IconBox icon="svg-spinners:6-dots-rotate" className="size-6" />
							) : (
								"Continue"
							)}
						</button>
					</div>
				</Form.Root>
			</section>
		</Main>
	);
}

export default VerifySchoolName;
