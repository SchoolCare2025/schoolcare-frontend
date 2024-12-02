const Footer = () => {
	return (
		<div
			className="max-w-auto flex w-full justify-between gap-8 bg-footerBg px-5 py-24 text-[14px]
				sm:px-12 lg:text-[18px]"
		>
			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[20px]">SchoolCare</h1>

				<div className="my-4">
					<p>
						Your universal school management system for stress-free operations and enhanced
						educational management.
					</p>
				</div>
				<p>Phone: 09038746894</p>
				<p>Email:schoolcare.office@gmail.com</p>
			</div>

			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[20px]">Useful links</h1>
				<div className="">
					<ul className="my-4 grid gap-1.5">
						<a href="/" className="hover:text-cosBlue">
							<li>Home</li>
						</a>
						<a href="/AboutUs" className="hover:text-cosBlue">
							<li>About Us</li>
						</a>
						<a href="/HowItWorks" className="hover:text-cosBlue">
							<li>How it Works</li>
						</a>
						<a href="/FaQ" className="hover:text-cosBlue">
							<li>FAQs</li>
						</a>
						<a href="/ContactUs" className="hover:text-cosBlue">
							<li>Contact Us</li>
						</a>
					</ul>
				</div>
			</div>

			<div className="w-[20rem] rounded lg:w-80">
				<span className="font-semibold text-black lg:text-[20px]">Leave Us a Message</span>
				<textarea
					className="mx-auto my-3 w-full max-w-lg resize-none overflow-auto rounded-lg border
						border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cosBlue"
					name=""
					id=""
					rows="4"
				></textarea>
				<button
					className="transform rounded-md bg-cosBlue px-4 py-0.5 font-bold text-cosWhite transition
						duration-300 ease-in-out hover:bg-greenColor"
				>
					Send
				</button>
			</div>
		</div>
	);
};
export default Footer;
