import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function SonnerToaster(props: ToasterProps) {
	const { theme = "light" } = useTheme();
	return (
		<Sonner
			theme={theme as ToasterProps["theme"]}
			// eslint-disable-next-line tailwindcss/no-custom-classname
			className="toaster group"
			richColors={true}
			position="bottom-right"
			duration={3000}
			closeButton={true}
			pauseWhenPageIsHidden={true}
			toastOptions={{
				classNames: {
					toast: "group toast p-[20px] max-lg:mx-auto max-lg:group-[.toaster]:max-w-max group-[.toaster]:shadow-lg",
				},
			}}
			{...props}
		/>
	);
}

export default SonnerToaster;
