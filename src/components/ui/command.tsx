import * as DialogPrimitive from "@/components/ui/dialog";
import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";
import { Command as CommandPrimitive } from "cmdk";
import type { DialogProps } from "vaul";
import { IconBox } from "../common";

function CommandRoot(props: InferProps<typeof CommandPrimitive>) {
	const { className, ref, ...restOfProps } = props;

	return (
		<CommandPrimitive
			ref={ref}
			className={cnMerge(
				`flex size-full flex-col overflow-hidden rounded-md bg-shadcn-popover
				text-shadcn-popover-foreground`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandDialog(props: DialogProps) {
	const { children, ...restOfProps } = props;

	return (
		<DialogPrimitive.Root {...restOfProps}>
			<DialogPrimitive.Content className="overflow-hidden p-0">
				<CommandRoot
					className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium
						[&_[cmdk-group-heading]]:text-shadcn-muted-foreground [&_[cmdk-group]]:px-2
						[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5
						[&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2
						[&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5"
				>
					{children}
				</CommandRoot>
			</DialogPrimitive.Content>
		</DialogPrimitive.Root>
	);
}

function CommandInput(props: InferProps<typeof CommandPrimitive.Input>) {
	const { className, ...restOfProps } = props;

	return (
		<div className="flex items-center border-b px-3" cmdk-input-wrapper="">
			<IconBox icon="lucide:search" className="mr-2 h-4 w-4 shrink-0 opacity-50" />

			<CommandPrimitive.Input
				className={cnMerge(
					`flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none
					placeholder:text-shadcn-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
					className
				)}
				{...restOfProps}
			/>
		</div>
	);
}

function CommandList(props: InferProps<typeof CommandPrimitive.List>) {
	const { className, ref, ...restOfProps } = props;

	return (
		<CommandPrimitive.List
			ref={ref}
			className={cnMerge("max-h-[300px] overflow-x-hidden overflow-y-auto", className)}
			{...restOfProps}
		/>
	);
}

function CommandEmpty(props: InferProps<typeof CommandPrimitive.Empty>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Empty
			className={cnMerge("py-6 text-center text-sm", className)}
			{...restOfProps}
		/>
	);
}

function CommandGroup(props: InferProps<typeof CommandPrimitive.Group>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Group
			className={cnMerge(
				`overflow-hidden p-1 text-shadcn-foreground [&_[cmdk-group-heading]]:px-2
				[&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs
				[&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-shadcn-muted-foreground
				[&_[cmdk-group-items]]:flex [&_[cmdk-group-items]]:flex-col [&_[cmdk-group-items]]:gap-1`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandSeparator(props: InferProps<typeof CommandPrimitive.Separator>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Separator
			className={cnMerge("bg-border -mx-1 h-px", className)}
			{...restOfProps}
		/>
	);
}

function CommandItem(props: InferProps<typeof CommandPrimitive.Item>) {
	const { className, ...restOfProps } = props;

	return (
		<CommandPrimitive.Item
			className={cnMerge(
				`relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none
				select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50
				data-[selected=true]:bg-shadcn-accent data-[selected=true]:text-shadcn-accent-foreground
				[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function CommandShortcut(props: InferProps<"span">) {
	const { className, ...restOfProps } = props;

	return (
		<span
			className={cnMerge("ml-auto text-xs tracking-widest text-shadcn-muted-foreground", className)}
			{...restOfProps}
		/>
	);
}

export const Root = CommandRoot;

export const Dialog = CommandDialog;

export const Input = CommandInput;

export const List = CommandList;

export const Empty = CommandEmpty;

export const Group = CommandGroup;

export const Item = CommandItem;

export const Shortcut = CommandShortcut;

export const Separator = CommandSeparator;
