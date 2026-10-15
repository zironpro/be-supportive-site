"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
	BankIcon,
	BuildingsIcon,
	CheckCircleIcon,
	CircleDashedIcon,
	IdentificationCardIcon,
	ReceiptIcon,
	ScalesIcon,
	ShieldCheckIcon,
	SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";

import { ArrowRightIcon } from "@/assets/icons/arrow";
import { SectionBreak } from "@/components/layout/section-break";
import { Button } from "@/components/ui/button";
import { clipPathVariants } from "@/features/home/components/slideshow";
import { cn } from "@/lib/utils";

export interface ServicePillar {
	id: string;
	number: string;
	shortTitle: string;
	title: string;
	subtitle: string;
	description: string;
	icon: React.ComponentType<{ className?: string; size?: number }>;
	deliverables: string[];
	idealFor: string;
	image: string;
	badge: string;
	turnaround: string;
}

export const SERVICE_PILLARS: ServicePillar[] = [
	{
		id: "business-setup",
		number: "01",
		shortTitle: "Company Setup",
		title: "Business Setup & Company Formation",
		subtitle: "Mainland, Free Zone & Offshore Solutions",
		description:
			"Form your UAE company with optimal legal structuring and 100% foreign ownership. We guide you through activity selection, jurisdiction comparison, trade license issuance, and commercial lease registration with zero delays.",
		icon: BuildingsIcon,
		deliverables: [
			"Mainland (DED / ADDED) Commercial, Professional & Industrial Licenses",
			"Free Zone setup across 40+ specialized UAE economic zones",
			"Offshore company incorporation (RAK ICC, JAFZA) for asset protection",
			"Local Service Agent (LSA) & corporate nominee agreements",
			"Memorandum & Articles of Association (MOA/AOA) drafting",
		],
		idealFor: "International founders, tech startups, retail brands, and multinational subsidiaries.",
		image: "/images/corporate-services.jpg",
		badge: "100% Foreign Ownership",
		turnaround: "24-72h Fast-Track",
	},
	{
		id: "pro-services",
		number: "02",
		shortTitle: "PRO Liaison",
		title: "PRO Services & Government Liaison",
		subtitle: "Ministry Representation & Administrative Clearances",
		description:
			"Bypass government queues and complex regulatory paperwork. Our dedicated corporate PRO team manages all departmental interactions across Abu Dhabi, Dubai, and federal UAE authorities.",
		icon: ShieldCheckIcon,
		deliverables: [
			"Ministry of Human Resources & Emiratisation (MOHRE) quotas & files",
			"Abu Dhabi Pension Fund & social insurance company registrations",
			"Department of Health (DOH) medical facility & wellness licensing",
			"CICPA Security Passes for oil & gas and critical infrastructure zones",
			"Chamber of Commerce registrations, trademark filing & renewals",
		],
		idealFor: "Operating enterprises, engineering firms, and companies requiring regular ministry approvals.",
		image: "/images/pro-services.jpg",
		badge: "10,000+ Clearances Executed",
		turnaround: "Expedited Processing",
	},
	{
		id: "visa-services",
		number: "03",
		shortTitle: "Visas & Residency",
		title: "Immigration & Residence Visas",
		subtitle: "Investor, Golden, Employment & Family Sponsorship",
		description:
			"Complete visa concierge handling quota allocations, medical screening, biometric Emirates ID typing, and residence visa stamping with VIP priority turnaround.",
		icon: IdentificationCardIcon,
		deliverables: [
			"10-Year UAE Golden Visa nomination & processing (Investors & Talents)",
			"Investor, Partner & Freelance residence visa stamping",
			"Corporate employee residence visas & labour contract processing",
			"Family & dependent sponsorship (spouse, children, parents, domestic staff)",
			"VIP medical fitness test assistance and expedited Emirates ID biometrics",
		],
		idealFor: "C-suite executives, high-net-worth investors, overseas hires, and relocated families.",
		image: "/images/visa-services.jpg",
		badge: "10-Year Golden Visas",
		turnaround: "5-10 Working Days",
	},
	{
		id: "vat-tax",
		number: "04",
		shortTitle: "Tax & VAT",
		title: "Corporate Tax, VAT & Accounting",
		subtitle: "Federal Tax Authority (FTA) Compliance & Advisory",
		description:
			"Ensure absolute compliance with the UAE's 9% Corporate Tax and 5% VAT frameworks. We prepare your filings, establish GAAP/IFRS bookkeeping, and protect your enterprise from statutory penalties.",
		icon: ReceiptIcon,
		deliverables: [
			"FTA Corporate Tax registration, tax group structuring & annual filing",
			"Value Added Tax (VAT) registration, threshold reviews & quarterly returns",
			"Economic Substance Regulations (ESR) & Ultimate Beneficial Owner (UBO) filings",
			"Corporate tax impact assessments for Free Zone qualifying income",
			"Approved internal & external financial auditing arrangements",
		],
		idealFor: "All UAE licensed entities, commercial traders, cross-border holding firms, and Free Zone ventures.",
		image: "/images/tax-services.jpg",
		badge: "100% FTA Compliance",
		turnaround: "Zero Penalty Guarantee",
	},
	{
		id: "legal-notary",
		number: "05",
		shortTitle: "Legal & Notary",
		title: "Corporate Legal & Notary Services",
		subtitle: "Public & Private Notary, Attestations & MOJ Filings",
		description:
			"Protect your corporate equity with binding legal instruments. We coordinate bilingual legal drafting, private notary execution, Ministry of Justice legalisation, and embassy attestations.",
		icon: ScalesIcon,
		deliverables: [
			"Private & Public Notary notarization of corporate resolutions & POA",
			"Ministry of Justice (MOJ) legal translations & document certifications",
			"Ministry of Foreign Affairs (MOFA) attestation and embassy legalization",
			"Share transfer agreements, capital amendments & board resolution drafting",
			"Company deregistration, liquidation reports & formal closing procedures",
		],
		idealFor: "Shareholders restructuring capital, cross-border joint ventures, and international acquisitions.",
		image: "/images/legal-services.jpg",
		badge: "Private Notary Authorized",
		turnaround: "Same-Day Attestation",
	},
	{
		id: "hr-payroll",
		number: "06",
		shortTitle: "HR & Banking",
		title: "HR, Payroll & Corporate Banking",
		subtitle: "WPS Setup, Employee Insurance & Tier-1 Bank Accounts",
		description:
			"Streamline your day-to-day operations with compliant employee payroll, mandatory health insurance coverage, and priority corporate bank account introductions.",
		icon: BankIcon,
		deliverables: [
			"Wage Protection System (WPS) registration and monthly payroll dispatch",
			"Corporate bank account opening assistance with major UAE and digital banks",
			"Mandatory employee medical insurance packages & group coverage",
			"Compliant UAE labour contracts and onboarding documentation",
			"End of Service Gratuity (EOSG) calculations and separation settlements",
		],
		idealFor: "Growing teams, foreign entities building UAE workforces, and newly licensed entities.",
		image: "/images/hr-banking.jpg",
		badge: "Tier-1 UAE Banks",
		turnaround: "WPS Compliant",
	},
];

export const ServiceCategories = () => {
	const [activeId, setActiveId] = useState<string>("business-setup");

	// Sync with URL hash if visitor arrives via #pro-services, #vat-tax, etc.
	useEffect(() => {
		const handleHashChange = () => {
			const hash = window.location.hash.replace("#", "");
			if (hash && SERVICE_PILLARS.some((p) => p.id === hash)) {
				setActiveId(hash);
			}
		};

		handleHashChange();
		window.addEventListener("hashchange", handleHashChange);
		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	const currentPillar =
		SERVICE_PILLARS.find((p) => p.id === activeId) || SERVICE_PILLARS[0];
	const ActiveIcon = currentPillar.icon;

	return (
		<section className="relative bg-background" id="domains">
			<SectionBreak />
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Section Header */}
				<div className="flex flex-col gap-3">
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Core Service Domains
					</h2>
					<p className="max-w-5xl font-display text-2xl text-brand leading-snug md:text-5xl">
						Strategic Pillars Engineered for UAE Business Excellence.
					</p>
					<p className="max-w-3xl text-pretty text-muted-foreground text-base md:text-lg">
						Select a corporate domain below to review scope of services, statutory deliverables,
						and government clearances managed by our licensed consultants.
					</p>
				</div>

				{/* Interactive Domain Navigation Tabs */}
				<div className="mt-8 overflow-x-auto pb-2 scrollbar-none sm:mt-10">
					<div className="flex min-w-max items-center gap-2 border-border/60 border-b pb-4">
						{SERVICE_PILLARS.map((pillar) => {
							const Icon = pillar.icon;
							const isActive = pillar.id === currentPillar.id;
							return (
								<button
									className={cn(
										"group relative flex items-center gap-2.5 rounded-lg px-4 py-2 text-sm font-medium transition-all cursor-pointer",
										isActive
											? "bg-brand text-card shadow-xs"
											: "bg-card text-brand border border-border hover:border-primary/50 hover:bg-secondary/60 hover:text-primary"
									)}
									key={pillar.id}
									onClick={() => {
										setActiveId(pillar.id);
										window.history.replaceState(null, "", `#${pillar.id}`);
									}}
									type="button"
								>
									<span
										className={cn(
											"font-mono text-xs",
											isActive ? "text-primary font-semibold" : "text-muted-foreground"
										)}
									>
										{pillar.number}
									</span>
									<Icon
										className={cn(
											"size-4 transition-transform group-hover:scale-110",
											isActive ? "text-primary" : "text-gold-600"
										)}
									/>
									<span>{pillar.shortTitle}</span>
								</button>
							);
						})}
					</div>
				</div>

				{/* Active Domain Detailed Showcase Panel */}
				<div className="mt-8 overflow-hidden rounded-md border border-border bg-card shadow-xs">
					{/* Anchor element for smooth scroll targets */}
					{SERVICE_PILLARS.map((p) => (
						<span
							className="block scroll-mt-28"
							id={p.id}
							key={`anchor-${p.id}`}
						/>
					))}

					<div className="grid lg:grid-cols-12">
						{/* Left Column: Scope, Description & Deliverables */}
						<div className="flex flex-col justify-between p-6 sm:p-9 md:p-12 lg:col-span-7">
							<div>
								{/* Pillar badge */}
								<div className="flex items-center justify-between border-border/60 border-b pb-4">
									<div className="flex items-center gap-2">
										<span className="font-mono text-xs font-semibold text-primary uppercase tracking-widest">
											Pillar {currentPillar.number}
										</span>
										<span className="text-muted-foreground/50">•</span>
										<span className="text-xs font-medium text-gold-600">
											{currentPillar.subtitle}
										</span>
									</div>
									<span className="rounded-full bg-secondary px-3 py-1 font-mono text-[11px] font-medium text-brand">
										{currentPillar.turnaround}
									</span>
								</div>

								{/* Title & Description */}
								<div className="mt-6 flex items-start gap-4">
									<div className="flex size-12 shrink-0 items-center justify-center rounded-md bg-secondary text-brand">
										<ActiveIcon size={26} />
									</div>
									<div>
										<h3 className="font-display text-2xl text-brand md:text-4xl">
											{currentPillar.title}
										</h3>
										<p className="mt-3 text-pretty text-brand text-base leading-snug md:text-xl">
											{currentPillar.description}
										</p>
									</div>
								</div>

								{/* Deliverables Checklist */}
								<div className="mt-8">
									<h4 className="font-medium text-brand text-sm uppercase tracking-wider">
										Key Deliverables & Government Clearances
									</h4>
									<ul className="mt-4 grid gap-2.5 sm:grid-cols-1">
										{currentPillar.deliverables.map((item) => (
											<li
												className="flex items-start gap-3 rounded-sm border border-border/40 bg-secondary/30 p-3 text-brand text-sm"
												key={item}
											>
												<CheckCircleIcon
													className="mt-0.5 size-4 shrink-0 text-gold-600"
													weight="fill"
												/>
												<span className="leading-snug">{item}</span>
											</li>
										))}
									</ul>
								</div>
							</div>

							{/* Bottom Info & Action */}
							<div className="mt-8 flex flex-col gap-4 border-border/60 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
								<div className="max-w-xs">
									<span className="text-[11px] font-semibold text-gold-600 uppercase tracking-wider">
										Ideal For:
									</span>
									<p className="text-xs text-muted-foreground leading-snug">
										{currentPillar.idealFor}
									</p>
								</div>
								<Button
									className="shrink-0"
									nativeButton={false}
									render={
										<Link
											href={`/get-consultation?service=${encodeURIComponent(currentPillar.title)}`}
										/>
									}
								>
									Inquire About {currentPillar.shortTitle}{" "}
									<ArrowRightIcon className="size-3.5" />
								</Button>
							</div>
						</div>

						{/* Right Column: Visual Feature Showcase with Home Industry Image Animation */}
						<div className="relative flex flex-col justify-between border-border/60 border-t bg-brand p-6 sm:p-9 lg:col-span-5 lg:border-t-0 lg:border-l">
							{/* Background Image Container with stacked layers */}
							<div className="relative aspect-4/3 w-full overflow-hidden rounded-md border border-brand-foreground/15 shadow-md">
								<div className="grid size-full overflow-hidden *:col-start-1 *:col-end-1 *:row-start-1 *:row-end-1 *:size-full">
									{SERVICE_PILLARS.map((pillar) => {
										const isPillarActive = pillar.id === currentPillar.id;
										return (
											<motion.div
												animate={isPillarActive ? "visible" : "hidden"}
												className="relative size-full overflow-hidden"
												initial={false}
												key={pillar.id}
												transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
												variants={clipPathVariants}
											>
												<Image
													alt={pillar.title}
													className="size-full object-cover transition-transform duration-700 hover:scale-105"
													fill
													priority={pillar.id === "business-setup"}
													sizes="(max-width: 1024px) 100vw, 40vw"
													src={pillar.image}
												/>
												<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
											</motion.div>
										);
									})}
								</div>

								{/* Overlay Tag */}
								<div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
									<div className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-black/60 px-3 py-1 text-xs font-medium text-gold-200 backdrop-blur-md">
										<SparkleIcon className="text-primary size-3.5" weight="fill" />
										<span>{currentPillar.badge}</span>
									</div>
									<span className="rounded-full bg-gold-950/80 px-2.5 py-0.5 font-mono text-[11px] text-primary">
										{currentPillar.number}/06
									</span>
								</div>
							</div>

							{/* Summary Card below image */}
							<div className="mt-6 space-y-4 rounded-md border border-gold-300/20 bg-card p-6">
								<h5 className="font-display text-2xl text-brand">
									Why Trust Be Supportive for {currentPillar.shortTitle}?
								</h5>
								<ul className="space-y-2 text-xs text-muted-foreground">
									<li className="flex items-center gap-2">
										<CheckCircleIcon className="size-3.5 text-primary" weight="fill" />
										<span>Direct ministerial & department relationships</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircleIcon className="size-3.5 text-primary" weight="fill" />
										<span>Fixed, transparent pricing with zero hidden fees</span>
									</li>
									<li className="flex items-center gap-2">
										<CheckCircleIcon className="size-3.5 text-primary" weight="fill" />
										<span>Dedicated corporate PRO assigned to your account</span>
									</li>
								</ul>
								<div className="border-border/40 border-t pt-4">
									<Link
										className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-primary transition-colors"
										href="/get-consultation"
									>
										<span>Request a tailored proposal</span>
										<ArrowRightIcon className="size-3" />
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Quick Glance 6-Pillar Summary Strip */}
				<div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
					{SERVICE_PILLARS.map((p) => {
						const Icon = p.icon;
						const isSelected = p.id === currentPillar.id;
						return (
							<button
								className={cn(
									"flex flex-col items-start justify-between rounded-md border p-4 text-left transition-all cursor-pointer",
									isSelected
										? "border-primary bg-secondary/60 shadow-xs ring-1 ring-primary/30"
										: "border-border bg-card/60 hover:border-primary/40 hover:bg-card"
								)}
								key={`card-${p.id}`}
								onClick={() => {
									setActiveId(p.id);
									window.history.replaceState(null, "", `#${p.id}`);
								}}
								type="button"
							>
								<div className="flex w-full items-center justify-between">
									<span className="font-mono text-xs font-semibold text-primary">
										{p.number}
									</span>
									<Icon className="size-4 text-gold-600" />
								</div>
								<h5 className="mt-3 font-display text-sm font-medium text-brand line-clamp-2">
									{p.shortTitle}
								</h5>
								<span className="mt-2 text-[11px] text-muted-foreground">
									{p.turnaround}
								</span>
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
};
