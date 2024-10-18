import AiImage from "../../assets/images/AiImage.png";

const ContactUs = () => {
	return (
		<div className="md:w-[48% bg-cosWhite px-8 py-12 md:flex md:gap-7 lg:gap-36">
			<div className="md:w-[45%]">
				<img src={AiImage} alt="" />

				<div className="sm:hidden md:block">
					<div className="my-8 flex items-center justify-between rounded-lg border-2 bg-white p-3">
						<div>
							<p>You can email us here</p>
							<p className="font-semibold">schoolregister@gmail.com</p>
						</div>
						<i className="ri-arrow-right-line"></i>
					</div>

					<div
						className="flex items-center justify-between rounded-lg border-2 bg-white p-3 md:w-[100%]"
					>
						<div>
							<p>Give us a call on</p>

							<p className="font-semibold"> +234 9038 7468 94 +234 7025 097 100</p>
						</div>
						<i className="ri-arrow-right-line"></i>
					</div>

					<div className="my-8 flex items-center justify-between rounded-lg border-2 bg-white p-3">
						<div>
							<p>You can send us a direct whatsapp message</p>
							<p className="font-semibold"> +234 9038 7468 94</p>
						</div>
						<i className="ri-arrow-right-line"></i>
					</div>

					<p className="sm:hidden md:block">Follow Us on Social Media</p>
					<div className="mt-2 flex sm:hidden md:block">
						<i className="ri-facebook-circle-fill text-[24px]"></i>
						<i className="ri-twitter-x-fill mx-4 text-[24px]"></i>
						<i className="ri-linkedin-box-fill text-[24px]"></i>
						<i className="ri-instagram-fill ml-4 text-[24px]"></i>
					</div>
				</div>
			</div>

			<div className="md:w[52%]">
				<p className="font-semibold sm:my-6">
					Fill out the form below, one of our team members will get back to you shortly
				</p>
				<div
					className="mt-4 rounded-lg border-2 bg-white px-4 py-7 md:order-2 md:pb-16 lg:h-[80vh]
						lg:w-[100%] lg:px-8 lg:py-8"
				>
					<h1 className="font-semibold">Name*</h1>
					<input
						type="text"
						placeholder="Enter your name"
						className="w-[100%] rounded-lg border-2 p-3 outline-none"
					/>
					<div className="my-3 gap-4 sm:flex">
						<div>
							<h1 className="font-semibold">Email*</h1>
							<input
								type="text"
								placeholder="Enter your Email"
								className="rounded-lg border-2 p-2 outline-none sm:w-[100%]"
							/>
						</div>

						<div>
							<h1 className="font-semibold">Phone*</h1>
							<input
								type="text"
								placeholder="Enter your Phone"
								className="rounded-lg border-2 p-2 outline-none sm:w-[100%]"
							/>
						</div>
					</div>
					<h1 className="font-semibold">Subject*</h1>
					<input
						type="text"
						placeholder="Enter your subject"
						className="w-[100%] rounded-lg border-2 p-3 outline-none"
					/>

					<h1 className="mt-4 font-semibold">Message*</h1>
					<input
						type="text"
						placeholder="Enter your message"
						className="w-[100%] rounded-lg border-2 pb-20 pl-3 outline-none"
					/>
					<button className="my-3 mt-10 rounded-lg bg-cosBlue p-2 text-cosWhite">Send Message</button>
				</div>
			</div>

			<div className="md:hidden">
				<div className="my-8 flex items-center justify-between rounded-lg border-2 p-3 px-4">
					<div>
						<p>You can email us here</p>
						<p className="font-semibold">schoolregister@gmail.com</p>
					</div>
					<i className="ri-arrow-right-line"></i>
				</div>

				<div className="flex items-center justify-between rounded-lg border-2 p-3 px-4 md:w-[100%]">
					<div>
						<p>Give us a call on</p>

						<p className="font-semibold"> +234 9038 7468 94 +234 7025 097 100</p>
					</div>
					<i className="ri-arrow-right-line"></i>
				</div>

				<div className="my-8 flex items-center justify-between rounded-lg border-2 p-3 px-4">
					<div>
						<p>You can send us a direct whatsapp message</p>
						<p className="font-semibold"> +234 9038 7468 94</p>
					</div>
					<i className="ri-arrow-right-line"></i>
				</div>

				<p className="">Follow Us on Social Media</p>
				<div className="mt-2 flex gap-3">
					<i className="ri-facebook-circle-fill text-[24px]"></i>
					<i className="ri-twitter-x-fill text-[24px]"></i>
					<i className="ri-linkedin-box-fill text-[24px]"></i>
					<i className="ri-instagram-fill text-[24px]"></i>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
