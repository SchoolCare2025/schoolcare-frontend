import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { Popover as PopoverPrimitive } from "radix-ui";

function PopoverContent(props: InferProps<typeof PopoverPrimitive.Content>) {
	const { align = "center", className, sideOffset = 4, ...restOfProps } = props;

	return (
		<PopoverPrimitive.Portal>
			<PopoverPrimitive.Content
				align={align}
				sideOffset={sideOffset}
				className={cnMerge(
					`bg-shadcn-popover text-shadcn-popover-foreground data-[side=bottom]:slide-in-from-top-2
					data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2
					data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out
					data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in
					data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 z-50 w-72 rounded-md border p-4
					shadow-md outline-hidden`,
					className
				)}
				{...restOfProps}
			/>
		</PopoverPrimitive.Portal>
	);
}

export const Root = PopoverPrimitive.Root;

export const Content = PopoverContent;

export const Trigger = PopoverPrimitive.Trigger;
