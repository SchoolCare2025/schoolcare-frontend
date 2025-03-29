import { cnMerge } from "@/lib/utils/cn";
import type { InferProps } from "@zayne-labs/toolkit/react/utils";

function TableRoot(props: InferProps<"table">) {
	const { className, ...restOfProps } = props;

	return (
		<div className="relative w-full overflow-auto">
			<table className={cnMerge("w-full caption-bottom text-sm", className)} {...restOfProps} />
		</div>
	);
}

function TableHeader(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return <thead className={cnMerge("[&_tr]:border-b", className)} {...restOfProps} />;
}

function TableBody(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return <tbody className={cnMerge("[&_tr:last-child]:border-0", className)} {...restOfProps} />;
}

function TableFooter(props: InferProps<HTMLTableSectionElement>) {
	const { className, ...restOfProps } = props;

	return (
		<tfoot
			className={cnMerge("bg-shadcn-muted/50 border-t font-medium last:[&>tr]:border-b-0", className)}
			{...restOfProps}
		/>
	);
}

function TableRow(props: InferProps<HTMLTableRowElement>) {
	const { className, ...restOfProps } = props;

	return (
		<tr
			className={cnMerge(
				"hover:bg-shadcn-muted/50 data-[state=selected]:bg-shadcn-muted border-b transition-colors",
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
			className={cnMerge(
				`text-shadcn-muted-foreground h-10 px-2 text-left align-middle font-medium
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
			className={cnMerge(
				"p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
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
			className={cnMerge("text-shadcn-muted-foreground mt-4 text-sm", className)}
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
