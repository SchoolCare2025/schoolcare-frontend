import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LoadingSpinner() {
	return (
		<div className="fixed inset-0 flex size-full items-center justify-center">
			<DotLottieReact
				className="w-[200px] md:w-[250px]"
				src="/loading-spinner.lottie"
				loop={true}
				autoplay={true}
			/>
		</div>
	);
}

export function AuthLoadingSpinner() {
	return (
		<div className="flex grow flex-col items-center justify-center gap-2">
			<DotLottieReact
				className="w-[200px] md:w-[250px]"
				src="/loading-spinner.lottie"
				loop={true}
				autoplay={true}
			/>

			<p className="animate-pulse text-sm text-gray-600 transition-opacity duration-1000">
				Verifying your credentials...
			</p>
		</div>
	);
}
