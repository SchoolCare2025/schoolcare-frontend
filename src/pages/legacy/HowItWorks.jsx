const HowItWorks = () => {
	return (
		<div
			className="mb-36 mt-12 grid gap-10 px-14 md:grid-cols-2 md:items-center md:justify-center
				sxl:px-28"
		>
			<div className="self-stretch rounded-lg bg-footerBg px-10 py-10">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					1
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-login-circle-line text-[40px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Sign Up</h1>
						<p className="text-[18px]">
							To begin using our system, please <a href="" className="hover: text-cosBlue font-semibold">Click Here</a> and sign up with your school name and email and have
							access to your school admin portal.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-10 md:relative md:top-[40px]">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					2
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-function-add-line text-[40px] text-cosBlue"></i>
					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Add Admin/Editor(s)</h1>
						<p className="text-[18px]">
							Log in to your school admin dashboard and add the ICT admin or teacher responsible for
							managing the school management system's admin section for your school.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-10">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					3
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-user-add-line text-[35px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Register Student(s)</h1>
						<p className="text-[18px]">
							The school ICT admin should log in to the school admin dashboard and register
							students. Please copy each student's registration number and distribute it to them. A
							registration number is a unique identifier assigned to a student, serving as their
							identity.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-10">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					4
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-keyboard-box-line text-[35px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Add all the school subjects.</h1>
						<p className="text-[18px]">
						The school ICT admin selects and registers all the subjects the school offers.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-4">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					5
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-checkbox-circle-line text-[35px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Input student CA and Exam scores.</h1>
						<p className="text-[18px]">
						Select subjects and input the CA and Exam scores of each of the students for each
						subjects and class.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-10">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					6
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-id-card-line text-[35px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Submit Scores</h1>
						<p className="text-[18px]">
						After inputing the scores of the students for each of the subject, 
						the admin can click on submit button for the system to complete the final computation of the final 
						result of each of the students. The school ICT admin updates the status so that  
						the students can view their individual results. Note: Only the admin can change the status.
						</p>
					</div>
				</div>
			</div>

			<div className="rounded-lg bg-footerBg px-10 py-10">
				<div className="grid h-8 w-8 items-center justify-center rounded-full bg-cosBlue text-white">
					6
				</div>

				<div className="flex items-center justify-center gap-3">
					<i className="ri-id-card-line text-[35px] text-cosBlue"></i>

					<div className="grid gap-2">
						<h1 className="text-[21px] font-semibold">Distribute Scratch Cards to Students.</h1>
						<p className="text-[18px]">
						    Distribute result checking scratch cards to
							students. The scratch card pin is essential for the student to be able check result. Get these cards from our resellers or directly from us, delivered promptly.
							Note: Each card is valid for one student per term and can check the result up to 5
							times. For more details, visit our FAQ page.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
