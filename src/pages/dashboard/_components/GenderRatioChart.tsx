import { Card, Chart } from "@/components/ui";
import { studentsGenderQuery } from "@/store/react-query/queryFactory";
import { useQuery } from "@tanstack/react-query";
import { Pie, PieChart } from "recharts";

const chartConfig = {
	female: {
		color: "var(--chart-2)",
		label: "Female",
	},
	male: {
		color: "var(--chart-1)",
		label: "Male",
	},
	ratio: {
		label: "Ratio",
	},
} satisfies Chart.ChartConfig;

function GenderRatioChart() {
	const studentsGenderQueryResult = useQuery(studentsGenderQuery());

	const chartData = [
		{
			fill: "var(--color-male)",
			gender: "male",
			ratio: studentsGenderQueryResult.data?.data?.male ?? 0,
		},
		{
			fill: "var(--color-female)",
			gender: "female",
			ratio: studentsGenderQueryResult.data?.data?.female ?? 0,
		},
	];

	return (
		<Card.Root className="flex size-full flex-col items-center rounded-[30px] bg-white py-9">
			<Card.Header>
				<Card.Title>Gender Composition</Card.Title>
			</Card.Header>

			<Card.Content className="flex size-full justify-center">
				<Chart.Container config={chartConfig} className="h-[245px] w-full max-w-[215px]">
					<PieChart>
						<Chart.Tooltip cursor={false} content={<Chart.TooltipContent hideLabel={true} />} />

						{Boolean(studentsGenderQueryResult.data?.data) && (
							<Pie
								data={chartData}
								dataKey="ratio"
								nameKey="gender"
								innerRadius={60}
								strokeWidth={5}
								cornerRadius={20}
								paddingAngle={-20}
							/>
						)}

						<Chart.Legend
							content={
								<Chart.LegendContent
									classNames={{ base: "pt-0", legendItemIcon: "size-[10px] rounded-full" }}
								/>
							}
						/>
					</PieChart>
				</Chart.Container>
			</Card.Content>

			<Card.Footer />
		</Card.Root>
	);
}
export default GenderRatioChart;
