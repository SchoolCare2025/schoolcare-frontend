import { IconBox } from "@/components/common";
import { For } from "@/components/common/For";
import { Accordion } from "@/components/ui";

const FAQs = [
	{
		answer:
			"SchoolCare allows students from registered schools to check their results online, both termly results,  annual results and entrance exam results with ease.",
		question: "How does SchoolCare work?",
	},
	{
		answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		question: "Can I get a printed copy or official transcript of my result?",
	},
	{
		answer: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		question: "Is there a fee for checking my result?",
	},
	{
		answer:
			"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		question: "I see an “Incomplete” or “Absent” status on my result. What does it mean?",
	},
	{
		answer:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
		question: "How long will my result be available online?",
	},
];

function AccordionFaqs() {
	return (
		<Accordion.Root type="single" collapsible={true} className="flex w-full flex-col gap-3">
			<For
				each={FAQs}
				render={(faq) => (
					<Accordion.Item
						key={faq.question}
						value={faq.question}
						className="rounded-[8px] border border-[hsl(0,0%,78%)] lg:rounded-[12px] lg:border-[3px]"
					>
						<Accordion.Trigger withIcon={false} className="p-4 lg:p-9 lg:text-base">
							{faq.question}

							<div>
								<IconBox
									icon="material-symbols:add-2"
									className="size-3 lg:size-6 [[data-state=open]_&]:hidden"
								/>
								<IconBox
									icon="material-symbols:remove"
									className="size-3 lg:size-6 [[data-state=closed]_&]:hidden"
								/>
							</div>
						</Accordion.Trigger>

						<Accordion.Content className="flex flex-col gap-4 text-balance lg:gap-6">
							<hr className="h-px border-none bg-[hsl(0,0%,78%)] lg:h-[3px]" />

							<p className="px-4 pb-4 text-[12px] lg:px-9 lg:pb-6 lg:text-[14px]">{faq.answer}</p>
						</Accordion.Content>
					</Accordion.Item>
				)}
			/>
		</Accordion.Root>
	);
}

export { AccordionFaqs };
