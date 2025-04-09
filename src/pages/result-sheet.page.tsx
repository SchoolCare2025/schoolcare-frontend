import { Table } from "@/components/ui";
import type { CheckResultResponse } from "@/lib/api/callBackendApi";
import { useStorageState } from "@zayne-labs/toolkit-react";
import { defineEnum } from "@zayne-labs/toolkit-type-helpers";
import Main from "./dashboard/_components/Main";

const columns = defineEnum(["Subject", "First CA", "Second CA", "Exam", "Total", "Grade"]);

function ResultSheetPage() {
	const [data] = useStorageState<CheckResultResponse | null>("scratch-card-result", null);

	const tableData =
		data?.results.map((result) => ({
			[columns[0]]: result.subject,
			[columns[1]]: result.first_ca,
			[columns[2]]: result.second_ca,
			[columns[3]]: result.exam,
			[columns[4]]: result.total,
			[columns[5]]: result.grade,
		})) ?? [];

	return (
		<Main className="flex flex-col gap-14 bg-white px-12 py-12 md:px-24">
			<header className="mx-auto flex w-full max-w-7xl flex-col gap-3 text-center">
				<h1 className="text-3xl font-bold">Student Result Sheet</h1>

				<p className="text-lg text-gray-600">{data?.student && `Name: ${data.student}`}</p>

				<p className="text-lg text-gray-600">
					{data?.student_reg_number && `Registration Number: ${data.student_reg_number}`}
				</p>
			</header>

			<section>
				<Table.Root className="border-separate rounded-[20px] border-2 border-[hsl(313,0%,42%)]">
					<Table.Header>
						<Table.Row>
							{columns.map((column) => (
								<Table.Head
									key={column}
									className="border-b border-b-[hsl(0,0%,3%)] px-7 py-4 not-last:border-r
										not-last:border-r-[hsl(0,0%,3%)]"
								>
									{column}
								</Table.Head>
							))}
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{tableData.map((result) => (
							<Table.Row
								key={result.Subject}
								className="[&_td:not(:last-child)]:border-r
									[&_td:not(:last-child)]:border-r-[hsl(0,0%,3%)] [&:not(:last-child)_td]:border-b
									[&:not(:last-child)_td]:border-b-[hsl(0,0%,3%)]"
							>
								{columns.map((column) => (
									<Table.Cell key={column} className="h-[56px] px-7">
										{result[column]}
									</Table.Cell>
								))}
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</section>
		</Main>
	);
}

export default ResultSheetPage;
