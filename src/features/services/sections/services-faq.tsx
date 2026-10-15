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

const SERVICES_FAQS = [
	{
		id: "faq-1",
		title: "Can foreigners own 100% of a UAE Mainland company?",
		content:
			"Yes. Following landmark amendments to UAE Federal Commercial Companies Law, 100% foreign ownership is permitted for over 1,000 commercial and industrial business activities in Mainland jurisdictions (such as Abu Dhabi ADDED and Dubai DED) without requiring an Emirati majority shareholder.",
	},
	{
		id: "faq-2",
		title: "What is a Local Service Agent (LSA) and how are my rights protected?",
		content:
			"For specific professional activities (such as consultancies or branches of foreign companies) that still mandate a local representative, an Emirati Local Service Agent (LSA) is appointed. The LSA acts purely as a government liaison with zero equity, zero operational control, and zero claim on company profits. We formalize court-notarized investor protection agreements to ensure 100% operational autonomy.",
	},
	{
		id: "faq-3",
		title: "How long does it take to obtain a UAE trade license and residency visa?",
		content:
			"Initial trade licenses in many Free Zones and Mainland sectors can be issued in as little as 24 to 72 hours once documents are verified. The complete residency visa process (including entry permit, medical fitness test, biometric typing, and Emirates ID issuance) typically takes 5 to 10 working days.",
	},
	{
		id: "faq-4",
		title: "Does a newly formed company have to register for UAE Corporate Tax?",
		content:
			"Yes. All taxable UAE entities (both Mainland and Free Zone) are legally mandated by the Federal Tax Authority (FTA) to obtain a Corporate Tax Registration Number (TRN) regardless of their annual revenue or profit level. Be Supportive coordinates your initial registration and tax impact analysis to avoid late-registration fines.",
	},
	{
		id: "faq-5",
		title: "How does Be Supportive assist with corporate bank account opening?",
		content:
			"Corporate bank account opening in the UAE requires stringent KYC, proof of business substance, and detailed business plans. We review your corporate documents, draft compliant business profiles, and facilitate introductions to premier institutions like Emirates NBD, First Abu Dhabi Bank (FAB), Mashreq, and digital banking platforms like Wio.",
	},
	{
		id: "faq-6",
		title: "What are CICPA passes and which businesses require them?",
		content:
			"CICPA (Critical Infrastructure and Coastal Protection Authority) passes are mandatory security clearances required for companies, commercial vehicles, and personnel operating within Abu Dhabi's critical infrastructure zones — including oil and gas facilities, ports, power stations, and industrial refineries. We manage end-to-end Supreme Council and CICPA clearance filings.",
	},
	{
		id: "faq-7",
		title: "Do you offer ongoing corporate PRO retainer packages?",
		content:
			"Yes. Many clients retain Be Supportive after initial incorporation for ongoing monthly PRO services. This includes trade license renewals, employee visa quotas, labor card issuance, WPS salary compliance, immigration updates, and official document attestations.",
	},
	{
		id: "faq-8",
		title: "Which is better for my business: Mainland or Free Zone?",
		content:
			"Mainland companies allow unrestricted trading across the entire UAE local market and participation in government tenders, while Free Zones offer 100% import/export duty exemption, bundled visa packages, and simplified setups. The ideal structure depends on your target clients and commercial activities.",
	},
];

export const ServicesFaq = () => {
	return (
		<section
			className="relative flex flex-col scroll-mt-20 bg-brand p-6 pb-24 sm:p-12 md:flex-row md:justify-between md:p-16"
			id="faqs"
		>
			<div className="z-10 mb-6 h-fit max-w-3xl md:sticky md:top-[25vh] md:mb-0">
				<div>
					<h2 className="inline-flex items-center gap-2 text-gold-200">
						<CircleDashedIcon className="animate-spin text-gold-300" />
						Clear Answers. Trusted Guidance.
					</h2>
					<p className="mt-2 text-balance font-display text-2xl text-card md:text-4xl lg:text-5xl">
						Frequently Asked Questions About UAE Corporate Services
					</p>

					<p className="mt-4 text-balance text-brand-foreground md:text-lg">
						Get clear, expert answers to key questions about company setup,
						visas, PRO services, corporate tax, and legal requirements across
						Abu Dhabi, Dubai, and the UAE.
					</p>
				</div>
				<div className="mt-6 max-w-md rounded-md border border-gold-300/20 bg-card p-6">
					<h3 className="text-balance font-display text-2xl text-brand">
						Still have questions about corporate services in the UAE?
					</h3>
					<p className="mt-2 mb-4 text-balance text-muted-foreground text-xl">
						Speak with our experts for personalized guidance.
					</p>
					<Button
						nativeButton={false}
						render={<Link href="/get-consultation" />}
						variant="outline"
					>
						Get a Free Consultation <ArrowRightIcon />
					</Button>
				</div>
			</div>

			<Accordion className="relative z-10" defaultValue={["faq-1"]}>
				{SERVICES_FAQS.map((item) => (
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
