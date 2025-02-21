import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function SonnerToaster(props: ToasterProps) {
	const { theme = "dark" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className="toaster group max-md:inset-x-0 max-md:flex max-md:w-full max-md:justify-center"
			richColors={true}
			position="bottom-right"
			duration={2000}
			closeButton={true}
			toastOptions={{
				classNames: {
					description: "group-[.toaster]:text-[14px]",

					title: "group-[.toaster]:text-base group-[.toaster]:font-bold",

					toast: "group toast p-5 max-md:p-4 mx-auto max-md:h-auto max-md:max-w-[284px] group-[.toaster]:shadow-lg",
				},
			}}
			{...props}
		/>
	);
}

export default SonnerToaster;
