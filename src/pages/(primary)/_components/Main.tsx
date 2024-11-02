import { cnMerge } from "@/lib/utils/cn";

function Main(props: React.ComponentPropsWithoutRef<"main">) {
	const { children, className, ...restOfProps } = props;

	return (
		<main className={cnMerge("grow", className)} {...restOfProps}>
			{children}
		</main>
	);
}

export default Main;
