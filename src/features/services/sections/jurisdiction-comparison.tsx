import Link from "next/link";
import { CircleDashedIcon } from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { Button } from "@/components/ui/button";

const JURISDICTIONS = [
	{
		name: "Mainland Company",
		badge: "Unrestricted Local & Global Trade",
		authority: "DED / ADDED (Economic Development)",
		tagline: "Direct access to the entire UAE local market & government contracts.",
		features: [
			{ label: "Ownership", value: "100% Foreign Ownership on 1,000+ activities" },
			{ label: "Trading Scope", value: "Unrestricted trade anywhere in UAE & globally" },
			{ label: "Government Tenders", value: "Eligible for federal & municipal tenders" },
			{ label: "Office Requirement", value: "Physical commercial office or Ejari required" },
			{ label: "Visa Quota", value: "Scalable based on physical office square meters" },
			{ label: "Corporate Tax", value: "Standard 9% above AED 375,000 threshold" },
		],
		bestFor: "Commercial trading, retail, restaurants, engineering, and government suppliers.",
		popular: true,
	},
	{
		name: "Free Zone Company",
		badge: "Tax-Efficient & Streamlined",
		authority: "40+ Free Zones (ADGM, DMCC, IFZA, DAFZA)",
		tagline: "100% import/export duty exemption with cost-effective setup packages.",
		features: [
			{ label: "Ownership", value: "100% Foreign Ownership guaranteed" },
			{ label: "Trading Scope", value: "International, within Free Zone, or via local distributor" },
			{ label: "Customs Duty", value: "0% customs duties on goods within the zone" },
			{ label: "Office Requirement", value: "Virtual desk / flexi-desk or dedicated office" },
			{ label: "Visa Quota", value: "Pre-allocated packages (1 to 6+ visas without office)" },
			{ label: "Corporate Tax", value: "0% on Qualifying Income (subject to FTA rules)" },
		],
		bestFor: "Tech startups, marketing agencies, consultants, e-commerce, and import/export.",
		popular: false,
	},
	{
		name: "Offshore Company",
		badge: "Asset Protection & Holding",
		authority: "RAK ICC / JAFZA Offshore",
		tagline: "Confidential international holding structure with zero UAE physical presence.",
		features: [
			{ label: "Ownership", value: "100% Foreign Ownership" },
			{ label: "Trading Scope", value: "International business only (no trade inside UAE)" },
			{ label: "Local Office", value: "No physical office required in the UAE" },
			{ label: "UAE Visas", value: "No UAE residency visas issued" },
			{ label: "Asset Holding", value: "Ideal for real estate & overseas subsidiary ownership" },
			{ label: "Public Register", value: "High confidentiality with closed registers" },
		],
		bestFor: "Wealth management, real estate asset holding, IP rights, and international trading.",
		popular: false,
	},
];

export const JurisdictionComparison = () => {
	return (
		<section className="relative bg-secondary/50">
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Header */}
				<div>
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Jurisdiction Guide
					</h2>
					<p className="mt-2 max-w-5xl font-display text-2xl text-brand leading-snug md:text-5xl">
						Mainland vs. Free Zone vs. Offshore
					</p>
					<p className="mt-4 max-w-3xl text-pretty text-muted-foreground text-base md:text-lg">
						Selecting the right UAE jurisdiction is the single most critical decision for your enterprise.
						Compare key parameters below or speak with our structuring team for personalized analysis.
					</p>
				</div>

				{/* Cards Comparison */}
				<div className="mt-14 grid gap-8 lg:grid-cols-3">
					{JURISDICTIONS.map((j) => (
						<div
							className={`relative flex flex-col justify-between rounded-md border p-6 sm:p-8 transition-all ${
								j.popular
									? "border-primary bg-card shadow-md ring-1 ring-primary/30"
									: "border-border bg-card/80 hover:border-border/80"
							}`}
							key={j.name}
						>
							{j.popular && (
								<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3.5 py-0.5 font-medium text-primary-foreground text-xs uppercase tracking-wider">
									Most Popular Choice
								</div>
							)}

							<div>
								{/* Header */}
								<div className="space-y-1">
									<span className="text-xs font-semibold text-gold-600 uppercase tracking-wider">
										{j.badge}
									</span>
									<h3 className="font-display text-2xl text-brand">
										{j.name}
									</h3>
									<p className="text-xs text-muted-foreground">
										Regulated by {j.authority}
									</p>
								</div>

								<p className="mt-4 text-pretty text-sm text-brand/80 border-border/60 border-t pt-4">
									{j.tagline}
								</p>

								{/* Parameters */}
								<div className="mt-6 space-y-3 border-border/60 border-t pt-6">
									{j.features.map((f) => (
										<div className="flex flex-col text-xs sm:text-sm" key={f.label}>
											<span className="font-medium text-brand">
												{f.label}:
											</span>
											<span className="text-muted-foreground">
												{f.value}
											</span>
										</div>
									))}
								</div>

								{/* Ideal For */}
								<div className="mt-6 rounded-md border border-border/80 bg-background/60 p-3.5 text-xs">
									<span className="font-semibold text-brand">Recommended For:</span>
									<p className="mt-1 text-muted-foreground leading-relaxed">{j.bestFor}</p>
								</div>
							</div>

							{/* Action */}
							<div className="mt-8">
								<Button
									className="w-full justify-center"
									nativeButton={false}
									render={
										<Link href={`/get-consultation?jurisdiction=${encodeURIComponent(j.name)}`} />
									}
									variant={j.popular ? "default" : "outline"}
								>
									Choose {j.name.split(" ")[0]} <ArrowRightIcon className="size-3.5" />
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
