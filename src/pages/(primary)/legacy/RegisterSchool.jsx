import React from "react";

const RegisterSchool = () => {
	return (
		<div className="bg-cosWhite px-10 md:px-24 lg:px-16 sxl:px-28 xl:px-64">
			<div className="w-[100%]">
				<div className="flex justify-between font-semibold md:w-[100%]">
					<h1 className="mb-4 hover:underline">Personal Information</h1>
					<h1>Address</h1>
				</div>
				<h1 className="mb-1 text-xl font-bold">Register your school</h1>
				<p className="text-cosInputText">Please fill in the details below</p>

				<div className="grid h-32 w-32 items-center justify-center rounded-full bg-cosInputText sm:mt-4">
					<i className="ri-user-fill text-[96px] font-bold text-cosWhite sm:mt-2"></i>
				</div>

				<div className="mt-4">
					<div className="grid gap-4">
						<h1 className="text-lg font-bold">Name of School</h1>
						<input
							type="text"
							className="w-full bg-inputColors px-2 py-3 outline-none"
							placeholder="Example@St. Mary’s memorial school"
						/>
					</div>
				</div>

				<div className="mt-4">
					<div className="grid gap-4">
						<h1 className="text-lg font-bold">School Email</h1>
						<input
							type="text"
							className="w-full bg-inputColors px-2 py-3 outline-none"
							placeholder="Enter school email"
						/>
					</div>
				</div>

				<div className="mt-4">
					<div className="grid gap-4">
						<h1 className="text-lg font-bold">School Phone Number</h1>
						<input
							type="text"
							className="w-full bg-inputColors px-2 py-3 outline-none"
							placeholder="Enter school phone number"
						/>
					</div>
				</div>
				<button
					className="rounded-lg bg-cosBlue px-4 py-2 text-[19px] font-bold text-cosWhite sm:my-5
						sm:mt-9"
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default RegisterSchool;
