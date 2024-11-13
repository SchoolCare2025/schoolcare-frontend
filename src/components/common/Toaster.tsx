import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function SonnerToaster(props: ToasterProps) {
	const { theme = "dark" } = useTheme();

	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className="toaster group"
			richColors={true}
			position="bottom-right"
			duration={2000}
			closeButton={true}
			pauseWhenPageIsHidden={true}
			toastOptions={{
				classNames: {
					description: "group-[.toaster]:text-[14px]",

					title: "group-[.toaster]:text-base group-[.toaster]:font-bold",

					toast: "group toast p-[20px] max-md:mx-auto max-md:group-[.toaster]:max-w-max group-[.toaster]:shadow-lg",
				},
			}}
			{...props}
		/>
	);
}

export default SonnerToaster;
