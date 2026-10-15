"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
	BankIcon,
	BriefcaseIcon,
	BuildingsIcon,
	CheckCircleIcon,
	CircleDashedIcon,
	FileTextIcon,
	FirstAidIcon,
	HandshakeIcon,
	HeartbeatIcon,
	IdentificationCardIcon,
	MagnifyingGlassIcon,
	ReceiptIcon,
	ScalesIcon,
	ShieldCheckIcon,
	UsersThreeIcon,
} from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { SectionBreak } from "@/components/layout/section-break";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CatalogService {
	id: string;
	number: string;
	title: string;
	category: string;
	filterCategory: "all" | "setup" | "pro" | "visas" | "tax" | "legal";
	icon: React.ComponentType<{ className?: string; size?: number }>;
	authority: string;
	badge: string;
	turnaround: string;
	description: string;
	features: string[];
}

const CATEGORIES = [
	{ id: "all", label: "All Services (13)" },
	{ id: "setup", label: "Company Formation" },
	{ id: "pro", label: "PRO & Government" },
	{ id: "visas", label: "Visas & Workforce" },
	{ id: "tax", label: "Tax & Compliance" },
	{ id: "legal", label: "Legal & Specialized" },
] as const;

export const CATALOG_SERVICES: CatalogService[] = [
	{
		id: "business-setup-detail",
		number: "01",
		title: "Business Setup (Mainland, Free Zone, Offshore)",
		category: "Corporate Formation",
		filterCategory: "setup",
		icon: BuildingsIcon,
		authority: "DED / ADDED & 40+ Free Zones",
		badge: "100% Foreign Ownership",
		turnaround: "24-72h Fast-Track",
		description:
			"Full advisory on legal form selection, activity mapping, commercial name approval, initial clearances, and trade license issuance across Abu Dhabi, Dubai, and all seven Emirates.",
		features: [
			"100% foreign ownership structuring on commercial & industrial activities",
			"Free Zone jurisdiction comparison across 40+ specialized economic zones",
			"Trade license issuance, initial approvals & electronic MOA/AOA drafting",
		],
	},
	{
		id: "local-sponsorship-detail",
		number: "02",
		title: "UAE Local Sponsorship & Local Service Agent",
		category: "Corporate Structure",
		filterCategory: "setup",
		icon: HandshakeIcon,
		authority: "DED & Judicial Department",
		badge: "100% Investor Protected",
		turnaround: "Fixed Annual Retainer",
		description:
			"Dependable corporate nominee partnerships and Local Service Agent (LSA) representation with court-notarized investor protection agreements giving foreign shareholders 100% operational control.",
		features: [
			"Court-notarized investor protection & power of attorney agreements",
			"Zero interference in day-to-day management or shareholder profits",
			"Fixed transparent annual corporate sponsorship retainers",
		],
	},
	{
		id: "pro-services-detail",
		number: "03",
		title: "PRO Services & Government Liaison",
		category: "Administrative Support",
		filterCategory: "pro",
		icon: BriefcaseIcon,
		authority: "All UAE Municipalities & Ministries",
		badge: "Dedicated Account PRO",
		turnaround: "Same-Day Collection",
		description:
			"Experienced corporate PROs handling ongoing document clearing, annual trade license renewals, Chamber of Commerce registrations, activity additions, and ministerial filings without delays.",
		features: [
			"Annual trade license renewals & commercial lease Ejari/Tawtheeq liaison",
			"Chamber of Commerce approvals & municipality permits",
			"Door-to-door document collection and secure government courier dispatch",
		],
	},
	{
		id: "visa-services-detail",
		number: "04",
		title: "Immigration & Visa Services",
		category: "Residency & Relocation",
		filterCategory: "visas",
		icon: IdentificationCardIcon,
		authority: "ICP & GDRFA Immigration",
		badge: "10-Year Golden Visas",
		turnaround: "5-10 Working Days",
		description:
			"Complete management of investor, partner, employment, and dependent visas. We handle entry permits, status change, VIP medical screening typing, biometric appointments, and Emirates ID stamping.",
		features: [
			"10-Year UAE Golden Visa nomination & VIP expedited processing",
			"Investor, Partner, Freelance, and Corporate employee residency visas",
			"Family & dependent sponsorship (spouse, children, parents, domestic staff)",
		],
	},
	{
		id: "tax-consultancy-detail",
		number: "05",
		title: "Tax Consultancy (VAT & Corporate Tax)",
		category: "Tax & Compliance",
		filterCategory: "tax",
		icon: ReceiptIcon,
		authority: "Federal Tax Authority (FTA)",
		badge: "100% FTA Compliance",
		turnaround: "Zero Penalty Guarantee",
		description:
			"Comprehensive FTA tax compliance services keeping your business compliant with the UAE 9% Corporate Tax framework, 5% VAT threshold reviews, quarterly returns, and Free Zone qualifying income analysis.",
		features: [
			"FTA Corporate Tax Registration (TRN) and annual corporate tax filings",
			"Value Added Tax (VAT) registration, accounting reviews & quarterly returns",
			"Economic Substance Regulations (ESR) & Ultimate Beneficial Owner (UBO) filings",
		],
	},
	{
		id: "hr-payroll-detail",
		number: "06",
		title: "HR & Payroll Services",
		category: "Workforce Operations",
		filterCategory: "visas",
		icon: UsersThreeIcon,
		authority: "Central Bank & MOHRE",
		badge: "WPS Certified",
		turnaround: "Monthly Automated",
		description:
			"End-to-end workforce operations ensuring compliant employment contracts, monthly Wage Protection System (WPS) salary file generation, leave tracking, and End of Service Gratuity calculations.",
		features: [
			"WPS-compliant monthly payroll generation and bank transfer verification",
			"MOHRE compliant bilingual employment contracts & offer letters",
			"End of Service Gratuity (EOSG) calculations and final settlements",
		],
	},
	{
		id: "mohre-labor-detail",
		number: "07",
		title: "MOHRE & Labor Services",
		category: "Labor Regulations",
		filterCategory: "pro",
		icon: ShieldCheckIcon,
		authority: "Ministry of Human Resources & Emiratisation",
		badge: "Fast-Track Quotas",
		turnaround: "48-72h Labor Cards",
		description:
			"Establishment and maintenance of company labor files, electronic work permit applications, employee quota modifications, labor card renewals, and official work permit cancellations.",
		features: [
			"Company labor establishment card opening and annual renewal",
			"Electronic work permit applications, renewals, and quota adjustments",
			"Labor absconding removals, labor contract amendments & dispute resolution",
		],
	},
	{
		id: "medical-insurance-detail",
		number: "08",
		title: "Medical Insurance & Employee Benefits",
		category: "Health & Benefits",
		filterCategory: "visas",
		icon: FirstAidIcon,
		authority: "Department of Health (DOH) & DHA",
		badge: "Statutory Coverage",
		turnaround: "Instant Policy Issuance",
		description:
			"Procurement of mandatory basic and comprehensive health insurance plans compliant with Department of Health Abu Dhabi (DOH) and Dubai Health Authority (DHA) statutory legal minimums.",
		features: [
			"DOH Abu Dhabi & DHA Dubai mandatory employee insurance enrollment",
			"Comprehensive executive and family healthcare coverage packages",
			"Seamless policy renewals synchronized with annual visa expirations",
		],
	},
	{
		id: "notary-services-detail",
		number: "09",
		title: "Notary Services (Private & Public)",
		category: "Legal Instruments",
		filterCategory: "legal",
		icon: ScalesIcon,
		authority: "Abu Dhabi Judicial Dept & Dubai Courts",
		badge: "Private Notary Authorized",
		turnaround: "Same-Day Notarization",
		description:
			"Expedited public and private notarization of corporate resolutions, General & Special Powers of Attorney (POA), Memorandum of Association amendments, and commercial lease agreements.",
		features: [
			"Private Notary liaison for same-day digital and physical notarization",
			"General & Special corporate Power of Attorney drafting and execution",
			"MOA addendums, share transfer agreements & board resolution notarization",
		],
	},
	{
		id: "moj-services-detail",
		number: "10",
		title: "Ministry of Justice (MOJ) Services",
		category: "Judicial Legalisation",
		filterCategory: "legal",
		icon: FileTextIcon,
		authority: "Ministry of Justice & MOFA",
		badge: "Certified Translations",
		turnaround: "15+ Languages",
		description:
			"Official Ministry of Justice certified legal translations, commercial contract legalization, court document filings, and Ministry of Foreign Affairs (MOFA) embassy attestations.",
		features: [
			"MOJ certified legal translations accepted by all UAE courts & ministries",
			"Ministry of Foreign Affairs (MOFA) document attestation & embassy stamping",
			"Judicial authentication of foreign incorporation documents & certificates",
		],
	},
	{
		id: "pension-detail",
		number: "11",
		title: "Abu Dhabi Pension Registration",
		category: "Statutory Filings",
		filterCategory: "pro",
		icon: BankIcon,
		authority: "Abu Dhabi Pension Fund (ADPF)",
		badge: "Statutory Compliance",
		turnaround: "ADPF Accredited",
		description:
			"Mandatory entity registration and monthly contribution management with the Abu Dhabi Pension Fund (ADPF) and GPSSA for UAE national (Emirati) employees.",
		features: [
			"ADPF entity file opening and statutory employer profile creation",
			"Monthly pension calculation, reporting, and contribution processing",
			"End-of-service pension documentation and retirement compliance clearance",
		],
	},
	{
		id: "doh-services-detail",
		number: "12",
		title: "Department of Health (DOH) Services",
		category: "Healthcare Regulatory",
		filterCategory: "legal",
		icon: HeartbeatIcon,
		authority: "Department of Health Abu Dhabi",
		badge: "Specialized Healthcare",
		turnaround: "Inspection Ready",
		description:
			"End-to-end regulatory licensing for clinics, dental practices, pharmacies, wellness centres, medical professionals, and medical equipment distributors in Abu Dhabi.",
		features: [
			"Healthcare facility preliminary approvals and architectural inspection readiness",
			"Doctor, nurse, and allied medical professional credentialing & exam filing",
			"Medical equipment trading, pharmaceutical registration, and DOH renewals",
		],
	},
	{
		id: "cicpa-detail",
		number: "13",
		title: "CICPA Passes & Security Clearance",
		category: "Critical Infrastructure",
		filterCategory: "legal",
		icon: ShieldCheckIcon,
		authority: "CICPA & Supreme Council",
		badge: "Security Clearance",
		turnaround: "Priority Approval",
		description:
			"Security clearance applications and Critical Infrastructure & Coastal Protection Authority (CICPA) gate passes for companies, commercial vehicles, and personnel operating in sensitive zones.",
		features: [
			"CICPA corporate security clearance and company accreditation filing",
			"Commercial vehicle gate passes and equipment transport authorizations",
			"Supreme Council security vetting and personnel security passes",
		],
	},
];

export const AllServicesGrid = () => {
	const [activeCategory, setActiveCategory] = useState<string>("all");
	const [searchQuery, setSearchQuery] = useState<string>("");

	// Filter services based on category and search query
	const filteredServices = useMemo(() => {
		return CATALOG_SERVICES.filter((service) => {
			const matchesCategory =
				activeCategory === "all" || service.filterCategory === activeCategory;
			const matchesSearch =
				searchQuery.trim() === "" ||
				service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				service.authority.toLowerCase().includes(searchQuery.toLowerCase()) ||
				service.description.toLowerCase().includes(searchQuery.toLowerCase());
			return matchesCategory && matchesSearch;
		});
	}, [activeCategory, searchQuery]);

	return (
		<section
			className="relative scroll-mt-20 bg-foreground text-background"
			id="all-services"
		>
			<SectionBreak />
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Section Header */}
				<div className="flex flex-col gap-3">
					<h2 className="inline-flex items-center gap-2 text-gold-400">
						<CircleDashedIcon className="animate-spin text-primary" />
						All-Inclusive Service Catalog
					</h2>
					<p className="max-w-5xl font-display text-2xl text-background leading-snug md:text-5xl">
						13 Dedicated Corporate Services. Zero Friction.
					</p>
					<p className="max-w-3xl text-pretty text-brand-foreground text-base md:text-lg">
						Explore our full operational catalog. As you scroll, each service card stacks naturally
						to keep governing authorities, statutory deliverables, and turnaround times in clear focus.
					</p>
				</div>

				{/* Filter & Search Controls */}
				<div className="mt-8 flex flex-col gap-4 border-border/15 border-b pb-6 sm:mt-10 lg:flex-row lg:items-center lg:justify-between">
					{/* Category Filter Pills (rounded-lg) */}
					<div className="flex flex-wrap items-center gap-2">
						{CATEGORIES.map((cat) => {
							const isActive = activeCategory === cat.id;
							return (
								<button
									className={cn(
										"rounded-lg px-4 py-2 text-xs sm:text-sm font-medium transition-all cursor-pointer",
										isActive
											? "bg-primary text-primary-foreground font-semibold shadow-xs"
											: "bg-black/30 text-gold-200/90 border border-border/20 hover:border-primary/50 hover:bg-gold-950/70 hover:text-primary"
									)}
									key={cat.id}
									onClick={() => setActiveCategory(cat.id)}
									type="button"
								>
									{cat.label}
								</button>
							);
						})}
					</div>

					{/* Search Input (rounded-lg) */}
					<div className="relative w-full sm:w-72">
						<MagnifyingGlassIcon
							className="absolute top-1/2 left-3.5 -translate-y-1/2 text-gold-400 size-4 pointer-events-none"
						/>
						<input
							className="h-10 w-full rounded-lg border border-border/20 bg-black/40 pl-10 pr-4 text-xs sm:text-sm text-background placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
							onChange={(e) => setSearchQuery(e.target.value)}
							placeholder="Search services, authorities..."
							type="text"
							value={searchQuery}
						/>
					</div>
				</div>

				{/* Smooth Stacking Cards Container */}
				<div className="relative mt-10 pb-12 [--stack-base:4.75rem] md:[--stack-base:5.5rem]">
					{filteredServices.length === 0 ? (
						<div className="py-20 text-center">
							<p className="text-lg text-brand-foreground">
								No services found matching &quot;{searchQuery}&quot;.
							</p>
							<button
								className="mt-3 text-sm font-medium text-primary hover:underline cursor-pointer"
								onClick={() => {
									setSearchQuery("");
									setActiveCategory("all");
								}}
								type="button"
							>
								Reset all filters
							</button>
						</div>
					) : (
						filteredServices.map((service, index) => {
							const Icon = service.icon;
							return (
								<article
									className={cn(
										"sticky rounded-xl border border-gold-400/25 bg-[#17130e] p-6 sm:p-7 md:p-8",
										"shadow-[0_-6px_24px_rgba(0,0,0,0.65)] transform-gpu",
										"mb-8 md:mb-12 last:mb-0"
									)}
									key={service.id}
									style={{
										top: `calc(var(--stack-base) + ${index * 4}px)`,
										zIndex: index + 1,
									}}
								>
									{/* Top Meta Bar */}
									<div className="flex flex-wrap items-center justify-between gap-3 border-border/15 border-b pb-4">
										<div className="flex items-center gap-3">
											<span className="font-mono text-2xl sm:text-3xl font-semibold text-primary">
												{service.number}
											</span>
											<div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gold-950 text-primary border border-gold-400/20">
												<Icon size={18} />
											</div>
											<span className="rounded-lg border border-primary/30 bg-gold-950/80 px-2.5 py-0.5 font-mono text-xs text-primary">
												{service.category}
											</span>
										</div>

										<div className="flex items-center gap-2">
											<span className="hidden sm:inline-block text-xs font-mono text-gold-300/80">
												{service.authority}
											</span>
											<span className="rounded-full border border-border/20 bg-black/40 px-2.5 py-0.5 font-mono text-xs text-gold-200">
												{service.badge}
											</span>
										</div>
									</div>

									{/* 2-Column Responsive Split Layout */}
									<div className="mt-5 grid gap-6 lg:grid-cols-12 lg:items-center">
										{/* Left: Title, Description & Status */}
										<div className="space-y-3 lg:col-span-6">
											<h3 className="font-display text-2xl text-background leading-snug md:text-4xl">
												{service.title}
											</h3>
											<p className="text-pretty text-brand-foreground text-sm leading-relaxed md:text-base">
												{service.description}
											</p>
											<div className="flex items-center gap-2 text-xs text-muted-foreground font-mono pt-1">
												<span>Timeline:</span>
												<span className="text-gold-200 font-semibold">{service.turnaround}</span>
												<span className="text-border/40">•</span>
												<span>Service {index + 1} of {filteredServices.length}</span>
											</div>
										</div>

										{/* Right: Deliverables List & Quick Action */}
										<div className="space-y-4 lg:col-span-6 lg:border-l lg:border-border/15 lg:pl-6">
											<div>
												<h4 className="text-[11px] font-semibold uppercase tracking-wider text-gold-300 mb-2.5">
													Standard Deliverables Included:
												</h4>
												<ul className="space-y-2">
													{service.features.map((feat) => (
														<li
															className="flex items-start gap-2 text-xs sm:text-sm text-gold-100"
															key={feat}
														>
															<CheckCircleIcon
																className="mt-0.5 size-3.5 shrink-0 text-primary"
																weight="fill"
															/>
															<span className="leading-snug">{feat}</span>
														</li>
													))}
												</ul>
											</div>

											<div className="pt-1">
												<Button
													className="h-9 px-4 text-xs sm:text-sm w-full sm:w-auto"
													nativeButton={false}
													render={
														<Link
															href={`/get-consultation?service=${encodeURIComponent(service.title)}`}
														/>
													}
												>
													Inquire About This Service{" "}
													<ArrowRightIcon className="size-3" />
												</Button>
											</div>
										</div>
									</div>
								</article>
							);
						})
					)}
				</div>

				{/* Bottom Enterprise Advisory Banner */}
				<div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-lg border border-primary/30 bg-gold-950/70 p-6 sm:flex-row sm:p-8">
					<div className="space-y-1 text-center sm:text-left">
						<h4 className="font-display text-2xl text-background">
							Need a Multi-Service Corporate Retainer?
						</h4>
						<p className="text-brand-foreground text-sm">
							Combine business setup, employee visas, monthly WPS payroll, and PRO retainers into a single fixed monthly fee.
						</p>
					</div>
					<Button
						className="shrink-0"
						nativeButton={false}
						render={<Link href="/get-consultation" />}
					>
						Request Custom Proposal <ArrowRightIcon className="size-3.5" />
					</Button>
				</div>
			</div>
		</section>
	);
};
