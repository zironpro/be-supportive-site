import { Suspense } from "react";
import {
	CheckCircleIcon,
	CircleDashedIcon,
	ClockIcon,
	EnvelopeSimpleIcon,
	MapPinIcon,
	PhoneCallIcon,
	ShieldCheckIcon,
} from "@phosphor-icons/react/dist/ssr";

import { SectionBreak } from "@/components/layout/section-break";
import { ConsultationForm } from "@/features/get-consultation/components/consultation-form";

export const ContactFormSection = () => {
	return (
		<section
			className="relative scroll-mt-20 bg-background text-brand"
			id="contact-form"
		>
			<SectionBreak />
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Section Header Matching Home Services standard */}
				<div className="flex flex-col gap-3">
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Get in touch.
					</h2>
					<p className="max-w-5xl font-display text-2xl text-brand leading-snug md:text-5xl">
						Send an Inquiry or Schedule a Corporate Consultation.
					</p>
					<p className="max-w-3xl text-pretty text-muted-foreground text-base md:text-lg">
						Fill out your licensing objectives below. A licensed UAE setup consultant will review
						your proposed commercial activity and revert with a transparent proposal within 24 hours.
					</p>
				</div>

				<div className="mt-12 grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
					{/* Left Column: Context, Advisory Commitments & Contact Info */}
					<div className="space-y-8 lg:col-span-5 lg:sticky lg:top-24">
						<div className="rounded-lg border border-border bg-card p-6 shadow-xs sm:p-8">
							<h3 className="font-display text-2xl text-brand">
								What happens after you reach out?
							</h3>
							<ul className="mt-6 space-y-4">
								<li className="flex items-start gap-3">
									<CheckCircleIcon
										className="mt-1 size-5 shrink-0 text-primary"
										weight="fill"
									/>
									<div>
										<p className="font-medium text-brand text-sm sm:text-base">
											Free Regulatory Feasibility Check
										</p>
										<p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
											We verify whether your business activity qualifies for 100% foreign ownership.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircleIcon
										className="mt-1 size-5 shrink-0 text-primary"
										weight="fill"
									/>
									<div>
										<p className="font-medium text-brand text-sm sm:text-base">
											Clear Cost Breakdown with Zero Hidden Fees
										</p>
										<p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
											Itemized quotes for government vouchers, trade license, and residency visas.
										</p>
									</div>
								</li>
								<li className="flex items-start gap-3">
									<CheckCircleIcon
										className="mt-1 size-5 shrink-0 text-primary"
										weight="fill"
									/>
									<div>
										<p className="font-medium text-brand text-sm sm:text-base">
											Dedicated Corporate PRO Assigned
										</p>
										<p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
											A single point of contact guides paperwork, medicals, biometrics, and notary steps.
										</p>
									</div>
								</li>
							</ul>

							{/* Assurance Badge */}
							<div className="mt-8 flex items-center gap-3 rounded-md border border-primary/20 bg-secondary/50 p-4">
								<ShieldCheckIcon className="size-8 shrink-0 text-gold-600" />
								<div>
									<p className="font-semibold text-xs text-brand uppercase tracking-wider">
										NDA Protected &amp; Confidential
									</p>
									<p className="text-xs text-muted-foreground leading-snug">
										All shareholder details and commercial strategies are treated with strict confidentiality.
									</p>
								</div>
							</div>
						</div>

						{/* Quick direct contact links card */}
						<div className="rounded-lg border border-border bg-card p-6 shadow-xs space-y-4">
							<h4 className="font-medium text-brand text-sm uppercase tracking-wider">
								Immediate Assistance
							</h4>
							<div className="space-y-3 text-sm">
								<div className="flex items-center gap-3 text-muted-foreground">
									<PhoneCallIcon className="text-gold-600 size-4 shrink-0" />
									<span className="text-brand font-medium">+971 56 789 0123</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<EnvelopeSimpleIcon className="text-gold-600 size-4 shrink-0" />
									<span className="text-brand font-medium">info@besupportive.ae</span>
								</div>
								<div className="flex items-center gap-3 text-muted-foreground">
									<MapPinIcon className="text-gold-600 size-4 shrink-0" />
									<span className="text-brand font-medium">Abu Dhabi &amp; Dubai, UAE</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Form Container styled to match dark brand/card theme */}
					<div className="lg:col-span-7">
						<div className="rounded-xl border border-gold-400/25 bg-[#17130e] p-6 shadow-[0_-6px_24px_rgba(0,0,0,0.65)] sm:p-8 md:p-10">
							<div className="mb-6 border-border/15 border-b pb-4">
								<h3 className="font-display text-2xl text-background leading-snug md:text-3xl">
									Direct Consultation Request
								</h3>
								<p className="mt-1 text-sm text-brand-foreground">
									Please provide your company details to receive personalized guidance.
								</p>
							</div>

							<Suspense
								fallback={
									<div className="rounded-lg border border-border/10 bg-black/20 p-8 text-center text-muted-foreground">
										Loading consultation form...
									</div>
								}
							>
								<ConsultationForm />
							</Suspense>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
