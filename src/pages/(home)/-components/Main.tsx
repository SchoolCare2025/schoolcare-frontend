import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function Main(props: InferProps<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col pb-[140px] lg:pb-[80px]", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export { Main };
