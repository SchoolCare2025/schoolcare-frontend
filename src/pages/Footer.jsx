const Footer = () => {
	return (
		<div
			className="max-w-auto flex w-full justify-between gap-8 bg-footerBg px-5 py-24 text-[14px]
				sm:px-12 lg:text-[20px]"
		>
			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[30px]">MY SKUL</h1>

				<div className="my-4">
					<p>
						Get access to all academic results with ease. Whether you're eagerly anticipating your
						final exam results or need to track your performance throughout the semester,
					</p>
				</div>
				<p>Phone: 09038746894</p>
				<p>Email:myskul.email@gmail.com</p>
			</div>

			<div className="w-80">
				<h1 className="font-semibold text-black lg:text-[28px]">Useful links</h1>
				<div className="">
					<ul className="my-4 grid gap-1.5">
						<a href="/">
							<li>Home</li>
						</a>
						<a href="/AboutUs">
							<li>About Us</li>
						</a>
						<a href="/HowItWorks">
							<li>How it Works</li>
						</a>
						<a href="/FaQ">
							<li>FAQs</li>
						</a>
						<a href="/ContactUs">
							<li>Contact Us</li>
						</a>
					</ul>
				</div>
			</div>

			<div className="w-[20rem] rounded lg:w-80">
				<span className="font-semibold text-black lg:text-[30px]">Leave Us a Message</span>
				<textarea
					className="mx-auto my-3 w-full max-w-lg resize-none overflow-auto rounded-lg border
						border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-cosBlue"
					name=""
					id=""
					rows="4"
				></textarea>
				<button
					className="transform rounded-lg bg-cosBlue px-4 py-0.5 font-bold text-cosWhite transition
						duration-300 ease-in-out hover:bg-greenColor"
				>
					Send
				</button>
			</div>
		</div>
	);
};

export default Footer;
