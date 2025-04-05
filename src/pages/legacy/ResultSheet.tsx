// import { Table } from "@/components/ui";
// import type { CheckResultResponse } from "@/lib/api/callBackendApi";
// import { cnMerge } from "@/lib/utils/cn";
// import { useStorageState } from "@zayne-labs/toolkit/react";
// import { defineEnum } from "@zayne-labs/toolkit/type-helpers";
// import Main from "../_components/Main";

// const columns = defineEnum(["Name", "Reg. No", "First CA", "Second CA", "Exam", "Total", "Grade"]);

// type StudentData = Record<(typeof columns)[number], string>;

// function ResultSheet() {
// 	const [result] = useStorageState<CheckResultResponse | null>("scratch-card-result");

// 	return (
// 		<Main className="flex flex-col bg-white pt-12">
// 			<section>
// 				<Table.Root className="border-separate rounded-[20px] border-2 border-[hsl(313,0%,42%)]">
// 					<Table.Header>
// 						<Table.Row>
// 							{columns.map((column) => (
// 								<Table.Head
// 									key={column}
// 									className={cnMerge(
// 										`border-b border-b-[hsl(0,0%,3%)] px-7 py-4 not-last:border-r
// 										not-last:border-r-[hsl(0,0%,3%)]`,
// 										tableData.length === 0 && "border-b-0"
// 									)}
// 								>
// 									{column}
// 								</Table.Head>
// 							))}
// 						</Table.Row>
// 					</Table.Header>
// 					<Table.Body>
// 						{tableData.map((student) => (
// 							<Table.Row
// 								key={student.Name}
// 								className="[&_td:not(:last-child)]:border-r
// 									[&_td:not(:last-child)]:border-r-[hsl(0,0%,3%)] [&:not(:last-child)_td]:border-b
// 									[&:not(:last-child)_td]:border-b-[hsl(0,0%,3%)]"
// 							>
// 								{columns.map((column) => (
// 									<Table.Cell key={column} className="h-[56px] px-7">
// 										{student[column]}
// 									</Table.Cell>
// 								))}
// 							</Table.Row>
// 						))}
// 					</Table.Body>
// 				</Table.Root>
// 			</section>
// 		</Main>
// 	);
// }

// export default ResultSheet;
// eslint-disable-next-line unicorn/no-empty-file
