import Link from "next/link";
import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { Button } from "@/components/ui/button";

const STEPS = [
	{
		step: "01",
		title: "Consultation & Strategic Scoping",
		description:
			"We analyze your business activities, shareholder objectives, target market, and visa requirements to determine the optimal legal form and jurisdiction.",
		timeline: "Day 1",
	},
	{
		step: "02",
		title: "Document Preparation & Initial Approvals",
		description:
			"Our team reserves your trade name, prepares bilingual MOA/AOA contracts, and secures initial clearance from the Department of Economic Development or Free Zone.",
		timeline: "Days 2 - 3",
	},
	{
		step: "03",
		title: "License Issuance & Ministry Clearances",
		description:
			"We finalize notary execution, register your commercial lease (Ejari/Tawtheeq), pay government voucher fees, and issue your official UAE Trade License.",
		timeline: "Days 3 - 5",
	},
	{
		step: "04",
		title: "Visas, Bank Accounts & Ongoing PRO",
		description:
			"We fast-track investor and staff residency visas, introduce your file to premier UAE corporate banking partners, and provide continuous PRO and tax support.",
		timeline: "Ongoing",
	},
];

export const ServicesProcess = () => {
	return (
		<section className="relative bg-background">
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Header */}
				<div className="flex flex-col gap-3">
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Execution Framework
					</h2>
					<p className="max-w-5xl font-display text-2xl text-brand leading-snug md:text-5xl">
						A Streamlined 4-Step Process from Initial Call to Full Operation.
					</p>
					<p className="max-w-3xl text-pretty text-muted-foreground text-base md:text-lg">
						We take the complexity out of UAE government bureaucracy. Every step is clearly tracked with
						transparent milestones and dedicated PRO guidance.
					</p>
				</div>

				{/* Steps Grid */}
				<div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{STEPS.map((step) => (
						<div
							className="relative flex flex-col justify-between rounded-md border border-border bg-card p-6 shadow-2xs transition-all hover:border-primary/40 sm:p-8"
							key={step.step}
						>
							<div>
								<div className="flex items-center justify-between">
									<span className="font-display font-semibold text-4xl text-primary/40">
										{step.step}
									</span>
									<span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[11px] font-medium text-brand">
										{step.timeline}
									</span>
								</div>
								<h3 className="mt-4 font-display text-xl text-brand">
									{step.title}
								</h3>
								<p className="mt-3 text-pretty text-sm text-muted-foreground leading-relaxed">
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Consultation Banner */}
				<div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-md border border-border bg-card p-6 sm:flex-row sm:p-8">
					<div className="space-y-1 text-center sm:text-left">
						<h4 className="font-display text-2xl text-brand">
							Ready to Start Your UAE Setup?
						</h4>
						<p className="text-muted-foreground text-sm">
							Book a zero-obligation consultation with an experienced UAE corporate structuring advisor.
						</p>
					</div>
					<Button
						className="shrink-0"
						nativeButton={false}
						render={<Link href="/get-consultation" />}
					>
						Schedule Free Call <ArrowRightIcon className="size-3.5" />
					</Button>
				</div>
			</div>
		</section>
	);
};
