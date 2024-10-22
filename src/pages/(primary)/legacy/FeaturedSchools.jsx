import School1 from "../../../assets/images/School1.png";
import School2 from "../../../assets/images/School2.png";
import School3 from "../../../assets/images/school3.png";
import School4 from "../../../assets/images/school4.png";
import School5 from "../../../assets/images/school5.png";

const FeaturedSchools = () => {
	return (
		<div className="my-32 text-center">
			<h1 className="text-4xl font-bold">Featured Schools</h1>

			<div className="mt-10 flex items-center justify-center sm:px-4">
				<div className="max-w-lg">
					<img className="w-40" src={School1} alt="" />
				</div>

				<div className="max-w-lg">
					<img className="w-40" src={School3} alt="" />
				</div>

				<div className="max-w-lg">
					<img className="w-40" src={School5} alt="" />
				</div>

				<div className="max-w-lg">
					<img className="w-40" src={School4} alt="" />
				</div>

				<div className="max-w-lg">
					<img className="w-40" src={School1} alt="" />
				</div>

				<div className="max-w-md">
					<img className="w-40" src={School2} alt="" />
				</div>
			</div>
		</div>
	);
};

export default FeaturedSchools;
