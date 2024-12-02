import { Table } from "@/components/ui";
import { useInputScoreFormStore } from "@/store/formStore";
import { defineEnum } from "@zayne-labs/toolkit/type-helpers";
import { download, generateCsv, mkConfig } from "export-to-csv";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Main from "../../_components/Main";

const columns = defineEnum(["Name", "Reg. No", "First CA", "Second CA", "Exam", "Total", "Grade"]);

const csvConfig = mkConfig({
	columnHeaders: columns,
	filename: "students-results",
	quoteStrings: false,
	title: "Students Result Sheet",
	useBom: false,
});

function TablePage() {
	const navigate = useNavigate();
	const { students } = useInputScoreFormStore((state) => state.responseData);

	if (students.length === 0) {
		toast.error("No students found");

		return <Navigate to="/dashboard/students/input-scores" />;
	}

	const tableData = students.map((student) => ({
		[columns[0]]: student.name,
		[columns[1]]: student.reg_number,
		[columns[2]]: "",
		[columns[3]]: "",
		[columns[4]]: "",
		[columns[5]]: "",
		[columns[6]]: "",
	}));

	const handleCSVDownload = () => {
		const csv = generateCsv(csvConfig)(tableData);

		download(csvConfig)(csv);

		navigate("/dashboard/students/input-scores/upload");
	};

	return (
		<Main className="flex flex-col bg-white pt-12">
			<section>
				<Table.Root className="border-separate rounded-[20px] border-2 border-[hsl(313,0%,42%)]">
					<Table.Header>
						<Table.Row>
							{columns.map((column) => (
								<Table.Head
									key={column}
									className="border-b border-b-[hsl(0,0%,3%)] px-7 py-4
										[&:not(:last-child)]:border-r [&:not(:last-child)]:border-r-[hsl(0,0%,3%)]"
								>
									{column}
								</Table.Head>
							))}
						</Table.Row>
					</Table.Header>
					<Table.Body>
						{tableData.map((student) => (
							<Table.Row
								key={student["Reg. No"]}
								className="[&:not(:last-child)_td]:border-b
									[&:not(:last-child)_td]:border-b-[hsl(0,0%,3%)] [&_td:not(:last-child)]:border-r
									[&_td:not(:last-child)]:border-r-[hsl(0,0%,3%)]"
							>
								<Table.Cell className="h-[56px] px-7">{student.Name}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student["Reg. No"]}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student["First CA"]}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student["Second CA"]}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student.Exam}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student.Total}</Table.Cell>
								<Table.Cell className="h-[56px] px-7">{student.Grade}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Root>
			</section>

			<section className="mt-auto flex gap-6 self-end">
				<button
					type="reset"
					className="max-w-fit rounded-[10px] border border-school-blue bg-white px-8 py-4 text-[18px]
						font-bold text-school-blue"
				>
					Cancel
				</button>

				<button
					type="button"
					className="max-w-fit rounded-[10px] bg-school-blue px-8 py-4 text-[18px] font-bold
						text-white"
					onClick={handleCSVDownload}
				>
					Export to CSV
				</button>
			</section>
		</Main>
	);
}

export default TablePage;
