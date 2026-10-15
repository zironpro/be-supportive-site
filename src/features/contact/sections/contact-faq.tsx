import Image from "next/image";
import Link from "next/link";
import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import {
	Accordion,
	AccordionHeader,
	AccordionItem,
	AccordionPanel,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const CONTACT_FAQS = [
	{
		id: "c-faq-1",
		title: "How quickly will an advisor respond to my inquiry?",
		content:
			"Our senior corporate setup consultants review inquiries immediately and respond within 2 to 4 business hours during working days, or within a maximum of 24 hours over weekends.",
	},
	{
		id: "c-faq-2",
		title: "Can I meet your consultants in person in Abu Dhabi or Dubai?",
		content:
			"Yes. We welcome clients at our partner offices in Abu Dhabi and Dubai. Alternatively, our corporate advisors are available for scheduled video calls or can visit your office anywhere in the UAE.",
	},
	{
		id: "c-faq-3",
		title: "Do you charge an upfront fee for initial setup advice?",
		content:
			"No. Initial consultations, jurisdiction scoping, activity suitability checks, and preliminary cost quotations are completely complimentary with zero commitment required.",
	},
	{
		id: "c-faq-4",
		title: "What documents should I have ready when inquiring?",
		content:
			"Having your passport copy, proposed business activity list, preferred trade names, and intended number of residency visas is helpful, but not required for an initial discussion. We guide you from scratch.",
	},
];

export const ContactFaq = () => {
	return (
		<section
			className="relative flex flex-col scroll-mt-20 bg-brand p-6 pb-24 sm:p-12 md:flex-row md:justify-between md:p-16"
			id="faqs"
		>
			<div className="z-10 mb-6 h-fit max-w-3xl md:sticky md:top-[25vh] md:mb-0">
				<div>
					<h2 className="inline-flex items-center gap-2 text-gold-200">
						<CircleDashedIcon className="animate-spin text-gold-300" />
						Consultation FAQs
					</h2>
					<p className="mt-2 text-balance font-display text-2xl text-card md:text-4xl lg:text-5xl">
						Common Questions About Inquiries &amp; Consultations
					</p>

					<p className="mt-4 text-balance text-brand-foreground md:text-lg">
						Everything you need to know about contacting Be Supportive, meeting
						our team, and taking the next step for your UAE venture.
					</p>
				</div>

				<div className="mt-6 max-w-md rounded-md border border-gold-300/20 bg-card p-6">
					<h3 className="text-balance font-display text-2xl text-brand">
						Need immediate corporate PRO assistance?
					</h3>
					<p className="mt-2 mb-4 text-balance text-muted-foreground text-xl">
						Call our direct desk or message us on WhatsApp.
					</p>
					<Button
						nativeButton={false}
						render={<a href="tel:+971567890123" />}
						variant="outline"
					>
						Call +971 56 789 0123 <ArrowRightIcon />
					</Button>
				</div>
			</div>

			<Accordion className="relative z-10" defaultValue={["c-faq-1"]}>
				{CONTACT_FAQS.map((item) => (
					<AccordionItem key={item.id} value={item.id}>
						<AccordionHeader>
							<AccordionTrigger>{item.title}</AccordionTrigger>
						</AccordionHeader>
						<AccordionPanel>{item.content}</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>

			<Image
				alt=""
				className="object-cover opacity-10"
				fill
				src="/images/faq-bg.webp"
			/>
		</section>
	);
};
