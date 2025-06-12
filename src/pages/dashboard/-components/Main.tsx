import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function Main(props: InferProps<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("flex grow flex-col px-5 pt-10 pb-6 md:px-9", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export { Main };
