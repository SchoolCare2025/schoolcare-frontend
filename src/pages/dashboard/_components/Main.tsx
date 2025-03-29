import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("grow px-10 pt-4 pb-6", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
