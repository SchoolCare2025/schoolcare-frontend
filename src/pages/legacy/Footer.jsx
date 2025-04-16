const Footer = () => {
	return (
		<div
			className="max-w-auto flex w-full flex-col justify-between gap-8 bg-footerBg px-5 py-24
				text-[14px] md:flex-row md:px-12 lg:text-[18px]"
		>
			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[20px]">SchoolCare</h1>

				<div className="my-4">
					<p>
						Your universal school management system for stress-free operations and enhanced
						educational management.
					</p>
				</div>
				<p>Phone: 0903 8746 894 0814 7736 125</p>
				<p>Email:schoolcare.office@gmail.com</p>
			</div>

			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[20px]">Useful links</h1>
				<div className="">
					<ul className="my-4 grid gap-1.5">
						<a href="/" className="hover:text-cosBlue">
							<li>Home</li>
						</a>
						<a href="/about-us" className="hover:text-cosBlue">
							<li>About Us</li>
						</a>
						<a href="/how-it-works" className="hover:text-cosBlue">
							<li>How it Works</li>
						</a>
						<a href="/faq" className="hover:text-cosBlue">
							<li>FAQs</li>
						</a>
						<a href="/contact-us" className="hover:text-cosBlue">
							<li>Contact Us</li>
						</a>
					</ul>
				</div>
			</div>

			<div>
				<span className="font-semibold text-black lg:text-[20px]">Leave Us a Message</span>
				<textarea
					className="mx-auto my-3 w-full max-w-lg resize-none overflow-auto rounded-lg border
						border-gray-300 bg-white p-2 focus:ring-2 focus:ring-cosBlue focus:outline-hidden"
					name=""
					id=""
					rows="4"
				/>
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
