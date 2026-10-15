import { CircleDashedIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";

const LOCATIONS = [
	{
		city: "Abu Dhabi",
		type: "Headquarters & Government Liaison",
		address: "Al Maryah Island & Downtown Business Hub",
		poBox: "P.O. Box 45012, Abu Dhabi, UAE",
		specialization: "ADDED Mainland setups, ADGM, Notary, CICPA clearances & Pension registration.",
		mapQuery: "https://maps.google.com/?q=Al+Maryah+Island+Abu+Dhabi",
	},
	{
		city: "Dubai",
		type: "Branch & Commercial Operations",
		address: "Business Bay / Sheikh Zayed Road",
		poBox: "P.O. Box 78120, Dubai, UAE",
		specialization: "DED licensing, DMCC, IFZA, DAFZA Free Zones & corporate banking introductions.",
		mapQuery: "https://maps.google.com/?q=Business+Bay+Dubai",
	},
] as const;

export const ContactOffices = () => {
	return (
		<section className="relative bg-secondary/50">
			<div className="px-6 py-12 sm:px-9 md:px-16">
				{/* Section Header */}
				<div>
					<h2 className="inline-flex items-center gap-2 text-gold-600">
						<CircleDashedIcon className="animate-spin text-primary" />
						Strategic Presence
					</h2>
					<p className="mt-2 max-w-5xl font-display text-2xl text-brand leading-snug md:text-5xl">
						On the Ground in Abu Dhabi &amp; Dubai.
					</p>
					<p className="mt-4 max-w-3xl text-pretty text-muted-foreground text-base md:text-lg">
						Operating locally across the capital and Dubai allows our corporate PROs to walk directly into
						economic departments, ministries, notaries, and judicial chambers on your behalf.
					</p>
				</div>

				{/* Location Cards */}
				<div className="mt-12 grid gap-8 md:grid-cols-2">
					{LOCATIONS.map((loc) => (
						<div
							className="flex flex-col justify-between rounded-lg border border-border bg-card p-6 shadow-xs sm:p-8"
							key={loc.city}
						>
							<div>
								<div className="flex items-center justify-between border-border/60 border-b pb-4">
									<div className="flex items-center gap-2">
										<MapPinIcon className="size-5 text-primary" weight="fill" />
										<span className="font-display text-2xl text-brand">
											{loc.city}
										</span>
									</div>
									<span className="rounded-full bg-secondary px-3 py-1 font-mono text-xs font-medium text-brand">
										{loc.type}
									</span>
								</div>

								<div className="mt-6 space-y-2">
									<p className="font-medium text-base text-brand">
										{loc.address}
									</p>
									<p className="text-xs font-mono text-muted-foreground">
										{loc.poBox}
									</p>
									<p className="mt-4 text-pretty text-sm text-muted-foreground leading-relaxed">
										<strong className="text-brand font-medium">Core Focus: </strong>
										{loc.specialization}
									</p>
								</div>
							</div>

							<div className="mt-8 border-border/60 border-t pt-4">
								<a
									className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary transition-colors hover:text-gold-700"
									href={loc.mapQuery}
									rel="noopener noreferrer"
									target="_blank"
								>
									View on Google Maps →
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
