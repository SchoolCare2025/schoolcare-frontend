/* eslint-disable tailwindcss/no-custom-classname */
import TestImage1 from "@/assets/images/testimonial.png";
import { getElementList } from "@/components/common";
import { useDragScroll } from "@zayne-labs/ui-react/drag-scroll";

const Testimonials = () => {
	const { getItemProps, getRootProps } = useDragScroll();

	const [For] = getElementList("base");

	return (
		<div className="text-center">
			<h1 className="text-4xl font-bold text-black">Testimonials</h1>

			<p className="mb-8 mt-2 text-testiFont">What Our Users Say About Us</p>

			<div {...getRootProps({ className: "flex gap-7 px-12 bg-bgTestimonials-65" })}>
				<For
					each={7}
					render={(number) => (
						<div
							key={number}
							{...getItemProps({
								className:
									"flex w-full max-w-[400px] shrink-0 flex-col items-center justify-center",
							})}
						>
							<div className="mx-auto size-16 rounded-full bg-cosWhite">
								<img src={TestImage1} alt="" className="size-full rounded-full object-cover" />
							</div>
							<p className="mt-4 text-center text-cosWhite lg:text-[20px]">
								I was pleasantly surprised by how easy it is to navigate this platform. The user
								interface is intuitive, making it simple for students to access their results
								hassle-free.
							</p>
							<div className="mt-2 flex items-center justify-center gap-1">
								<i className="ri-star-fill text-xl text-starColor" />
								<i className="ri-star-fill text-xl text-starColor" />
								<i className="ri-star-fill text-xl text-starColor" />
								<i className="ri-star-fill text-xl text-starColor" />
								<i className="ri-star-fill text-xl text-starColor" />
							</div>
						</div>
					)}
				/>
			</div>
		</div>
	);
};

export default Testimonials;
