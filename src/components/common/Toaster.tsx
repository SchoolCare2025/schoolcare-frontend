import { useThemeStore } from "@/store/zustand/themeStore";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

function SonnerToaster(props: ToasterProps) {
	const { theme = "dark" } = useThemeStore((state) => state);

	return (
		<Sonner
			theme={theme}
			className="toaster group"
			richColors={true}
			position="bottom-right"
			duration={3000}
			closeButton={true}
			toastOptions={{
				classNames: {
					description: "group-[.toaster]:text-[14px]",

					title: "group-[.toaster]:text-base group-[.toaster]:font-bold",

					toast: "group toast p-5 mx-auto max-md:max-w-fit max-w-[284px]",
				},
			}}
			{...props}
		/>
	);
}

export default SonnerToaster;
