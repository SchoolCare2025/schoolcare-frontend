import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { Fragment as ReactFragment, useLayoutEffect } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

function DrawerRoot(props: InferProps<typeof DrawerPrimitive.Root> & { trapFocus?: boolean }) {
	const { children, shouldScaleBackground = true, trapFocus = true, ...restOfProps } = props;

	/* NOTE - This is a hack to prevent radix within vaul from trapping focus like a massive idiot🙂 */

	useLayoutEffect(() => {
		if (trapFocus) return;

		const controller = new AbortController();

		document.addEventListener("focusin", (e) => e.stopImmediatePropagation(), {
			signal: controller.signal,
		});
		document.addEventListener("focusout", (e) => e.stopImmediatePropagation(), {
			signal: controller.signal,
		});

		return () => {
			controller.abort();
		};
	}, [trapFocus]);

	return (
		<DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...restOfProps}>
			{children}
		</DrawerPrimitive.Root>
	);
}

function DrawerOverlay(props: InferProps<typeof DrawerPrimitive.Overlay>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Overlay
			className={cnMerge("fixed inset-0 z-50 bg-black/80", className)}
			{...restOfProps}
		/>
	);
}

function DrawerContent(
	props: InferProps<typeof DrawerPrimitive.Content> & { withHandle?: boolean; withPortal?: boolean }
) {
	const { children, className, withHandle = true, withPortal = true, ...restOfProps } = props;

	const PortalElement = withPortal ? DrawerPrimitive.Portal : ReactFragment;

	return (
		<PortalElement>
			<DrawerOverlay />

			<DrawerPrimitive.Content
				className={cnMerge("z-50 flex flex-col bg-shadcn-background", className)}
				{...restOfProps}
			>
				{withHandle && (
					<span className="mx-auto mt-4 block h-2 w-[100px] rounded-full bg-shadcn-muted" />
				)}

				{children}
			</DrawerPrimitive.Content>
		</PortalElement>
	);
}

function DrawerHeader(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return (
		<div className={cnMerge("grid gap-1.5 p-4 text-center sm:text-left", className)} {...restOfProps} />
	);
}

function DrawerFooter(props: InferProps<"div">) {
	const { className, ...restOfProps } = props;

	return <div className={cnMerge("mt-auto flex flex-col gap-2 p-4", className)} {...restOfProps} />;
}

function DrawerTitle(props: InferProps<typeof DrawerPrimitive.Title>) {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Title
			className={cnMerge("text-lg leading-none font-semibold tracking-tight", className)}
			{...restOfProps}
		/>
	);
}

const DrawerDescription = (props: InferProps<typeof DrawerPrimitive.Description>) => {
	const { className, ...restOfProps } = props;

	return (
		<DrawerPrimitive.Description
			className={cnMerge("text-sm text-shadcn-muted-foreground", className)}
			{...restOfProps}
		/>
	);
};

export const Root = DrawerRoot;

export const Overlay = DrawerOverlay;

export const Content = DrawerContent;

export const Header = DrawerHeader;

export const Footer = DrawerFooter;

export const Title = DrawerTitle;

export const Description = DrawerDescription;

export const Trigger = DrawerPrimitive.Trigger;

export const Portal = DrawerPrimitive.Portal;

export const Close = DrawerPrimitive.Close;
