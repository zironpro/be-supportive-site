import {
	ClockIcon,
	EnvelopeSimpleIcon,
	MapPinIcon,
	PhoneCallIcon,
} from "@phosphor-icons/react/dist/ssr";

const CONTACT_CHANNELS = [
	{
		icon: MapPinIcon,
		title: "Head Office",
		primary: "Abu Dhabi & Dubai, UAE",
		secondary: "Serving all 7 Emirates with direct government liaison",
		actionText: "Get Directions",
		href: "https://maps.google.com/?q=Abu+Dhabi+United+Arab+Emirates",
		target: "_blank",
	},
	{
		icon: PhoneCallIcon,
		title: "Phone & WhatsApp",
		primary: "+971 56 789 0123",
		secondary: "Direct line for urgent setups & corporate clearances",
		actionText: "Call Now",
		href: "tel:+971567890123",
	},
	{
		icon: EnvelopeSimpleIcon,
		title: "Email Inquiries",
		primary: "info@besupportive.ae",
		secondary: "Official proposals, document attestation & filings",
		actionText: "Send Email",
		href: "mailto:info@besupportive.ae",
	},
	{
		icon: ClockIcon,
		title: "Working Hours",
		primary: "Mon – Fri: 8:30 AM – 6:00 PM",
		secondary: "Saturday & Sunday: Emergency PRO support by appointment",
		actionText: "Book Slot",
		href: "#contact-form",
	},
] as const;

export const ContactDirectChannels = () => {
	return (
		<section className="relative border-border/10 border-t bg-foreground text-background">
			<div className="px-6 py-12 sm:px-9 md:px-16">
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{CONTACT_CHANNELS.map((channel) => {
						const Icon = channel.icon;
						return (
							<div
								className="flex flex-col justify-between rounded-md border border-border/10 bg-black/20 p-6 transition-colors hover:border-gold-400/40"
								key={channel.title}
							>
								<div>
									<div className="flex size-12 items-center justify-center rounded-full bg-gold-900/30 text-primary">
										<Icon size={24} weight="fill" />
									</div>
									<h3 className="mt-4 font-display text-xl text-background">
										{channel.title}
									</h3>
									<p className="mt-1 font-medium text-base text-gold-200">
										{channel.primary}
									</p>
									<p className="mt-2 text-xs text-brand-foreground leading-relaxed">
										{channel.secondary}
									</p>
								</div>
								<div className="mt-6 border-border/10 border-t pt-4">
									<a
										className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-gold-300"
										href={channel.href}
										rel={channel.target ? "noopener noreferrer" : undefined}
										target={channel.target}
									>
										{channel.actionText} →
									</a>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
