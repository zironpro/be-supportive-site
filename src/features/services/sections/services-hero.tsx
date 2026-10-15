import Link from "next/link";
import {
	ArrowRightIcon,
	CircleDashedIcon,
} from "@phosphor-icons/react/dist/ssr";

import { Slope } from "@/assets/slope";
import { Button } from "@/components/ui/button";
import { HeroLines } from "@/features/home/components/lottie";
import { ParallaxImage } from "@/features/home/components/parallax-hero-image";

export const ServicesHero = () => {
	return (
		<section className="relative flex max-h-svh items-end overflow-hidden pt-[55vh]">
			{/* Top Hero Banner with Parallax and Animated Lines */}
			<div className="absolute inset-x-0 top-0 size-full h-1/2 overflow-hidden bg-brand md:inset-0 md:h-full">
				<div className="absolute inset-x-0 z-10 h-1/4 bg-linear-to-b from-gold-800/60" />
				<ParallaxImage src="/images/hero-banner.webp" />
				<HeroLines />
			</div>

			{/* Bottom Card Matching Home Hero Structure */}
			<div className="relative flex h-[55svh] w-full bg-background md:h-[43svh] md:max-h-[440px]">
				{/* Top Sloped Tab Badge */}
				<div className="absolute -top-12 z-40 flex h-12 bg-background">
					<div className="flex items-center gap-3 px-6 sm:px-14 md:px-16">
						<CircleDashedIcon className="animate-spin text-primary" />
						<p className="text-gold-600">Your UAE Corporate Partner.</p>
					</div>
					<Slope className="absolute left-full text-background" />
				</div>

				{/* Two-Column Split Content */}
				<div className="flex w-full flex-col items-stretch border-t md:flex-row md:justify-between">
					{/* Left Column: Heading */}
					<div className="px-6 py-6 sm:flex-1 md:w-[60%] md:p-6 md:pt-16 md:pl-16">
						<h1 className="text-balance font-display text-4xl text-brand tracking-tight sm:text-[clamp(3.5*1rem,((3.5-((5.5-3.5)/(93-70)*70))*1rem+((5.5-3.5)/(93-70))*100vw),5.5*1rem)]/[100%]">
							Comprehensive Services for your UAE Business.
						</h1>
					</div>

					{/* Right Column: Copy & Actions */}
					<div className="max-w-xl space-y-6 px-6 sm:border-x sm:p-6 md:mr-12 md:w-[40%] md:p-12 md:py-16">
						<p className="text-pretty indent-6 text-brand text-lg leading-snug md:indent-12 md:text-xl">
							Launch, manage, and scale your company with expert guidance across
							Mainland, Free Zone, and Offshore jurisdictions. From company formation
							to visas, PRO, corporate tax, and legal compliance — we handle everything
							so you can focus on success.
						</p>
						<div className="flex flex-wrap items-center gap-3">
							<Button
								nativeButton={false}
								render={<Link href="/get-consultation" />}
							>
								Get Started Today <ArrowRightIcon />
							</Button>
							<Button
								nativeButton={false}
								render={<Link href="#all-services" />}
								variant="outline"
							>
								View All Services
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
