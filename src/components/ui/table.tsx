import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit-react/utils";

function TableRoot(props: InferProps<"table">) {
	const { className, ...restOfProps } = props;

	return (
		<div data-slot="table-container" className="relative w-full overflow-auto">
			<table
				data-slot="table-root"
				className={cnMerge("w-full caption-bottom text-sm", className)}
				{...restOfProps}
			/>
		</div>
	);
}

function TableHeader(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return (
		<thead data-slot="table-header" className={cnMerge("[&_tr]:border-b", className)} {...restOfProps} />
	);
}

function TableBody(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return (
		<tbody
			data-slot="table-body"
			className={cnMerge("[&_tr:last-child]:border-0", className)}
			{...restOfProps}
		/>
	);
}

function TableFooter(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return (
		<tfoot
			data-slot="table-footer"
			className={cnMerge("border-t bg-shadcn-muted/50 font-medium [&>tr]:last:border-b-0", className)}
			{...restOfProps}
		/>
	);
}

function TableRow(props: InferProps<HTMLTableRowElement>) {
	const { className, ...restOfProps } = props;

	return (
		<tr
			data-slot="table-row"
			className={cnMerge(
				"border-b transition-colors hover:bg-shadcn-muted/50 data-[state=selected]:bg-shadcn-muted",
				className
			)}
			{...restOfProps}
		/>
	);
}

function TableHead(props: InferProps<HTMLTableCellElement>) {
	const { className, ...restOfProps } = props;

	return (
		<th
			data-slot="table-head"
			className={cnMerge(
				`h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-shadcn-foreground
				[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TableCell(props: InferProps<HTMLTableCellElement>) {
	const { className, ...restOfProps } = props;

	return (
		<td
			data-slot="table-cell"
			className={cnMerge(
				`p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0
				[&>[role=checkbox]]:translate-y-[2px]`,
				className
			)}
			{...restOfProps}
		/>
	);
}

function TableCaption(props: InferProps<HTMLTableCaptionElement>) {
	const { className, ...restOfProps } = props;

	return (
		<caption
			data-slot="table-caption"
			className={cnMerge("mt-4 text-sm text-shadcn-muted-foreground", className)}
			{...restOfProps}
		/>
	);
}

export const Root = TableRoot;

export const Header = TableHeader;

export const Body = TableBody;

export const Footer = TableFooter;

export const Row = TableRow;

export const Head = TableHead;

export const Cell = TableCell;

export const Caption = TableCaption;
