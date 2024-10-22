const RegisterSchoolAddress = () => {
	return (
		<div className="my-32 px-10 md:px-24 lg:px-16 sxl:px-28 xl:px-64">
			<h1 className="text-[26px] font-bold">Tell us more about your school</h1>
			<p className="text-cosInputText">Please fill in the details below</p>

			<div>
				<div className="pb-7">
					<h1 className="pb-4 text-[19px] font-bold">School Nationality</h1>
					<select name="" id="" className="formInputs">
						<option value="">Choose School Nationality</option>
						<option value="">JSS1 A</option>
						<option value="">JSS1 B</option>
						<option value="">JSS2 A</option>
						<option value="">SS3 A</option>
					</select>
				</div>

				<div className="pb-7">
					<h1 className="pb-4 text-[19px] font-bold">School Adress</h1>
					<input type="text" placeholder="Enter school address" className="formInputs" />
				</div>

				<div className="grid grid-cols-2 gap-5">
					<div className="pb-7">
						<h1 className="pb-4 text-[19px] font-bold">State</h1>
						<select name="" id="" className="formInputs">
							<option value="">Choose School State</option>
							<option value="">Abia</option>
							<option value="">Adamawa</option>
							<option value="">Akwa Ibom</option>
							<option value="">Anambra</option>
						</select>
					</div>
					<div className="pb-7">
						<h1 className="pb-4 text-[19px] font-bold">City</h1>
						<select name="" id="" className="formInputs">
							<option value="">Select School City</option>
							<option value="">ewewgyu</option>
							<option value="">ygeyuweue</option>
							<option value="">jyhddui</option>
							<option value="">t3yyueyuh</option>
						</select>
					</div>

					<div className="pb-7">
						<h1 className="pb-4 text-[19px] font-bold">LGA</h1>
						<select name="" id="" className="formInputs">
							<option value="">Choose School LGA</option>
							<option value="">eeyy</option>
							<option value="">ewhwuiwe</option>
							<option value="">gegae</option>
							<option value="">waeae</option>
						</select>
					</div>

					<div className="pb-7">
						<h1 className="pb-4 text-[19px] font-bold">Postal Code</h1>
						<input type="text" placeholder="Enter Postal Code" className="formInputs" />
					</div>
				</div>
			</div>
			<div className="flex justify-between">
				<button className="rounded-lg bg-inputColors px-4 py-2 text-[19px] font-bold sm:my-5 sm:mt-9">
					Back
				</button>
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
export default RegisterSchoolAddress;
