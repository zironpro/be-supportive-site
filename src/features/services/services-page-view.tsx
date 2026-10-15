import { Cta } from "@/components/layout/cta";

import { AllServicesGrid } from "./sections/all-services-grid";
import { JurisdictionComparison } from "./sections/jurisdiction-comparison";
import { ServiceCategories } from "./sections/service-categories";
import { ServicesFaq } from "./sections/services-faq";
import { ServicesHero } from "./sections/services-hero";
import { ServicesProcess } from "./sections/services-process";

export function ServicesPageView() {
	return (
		<main>
			<ServicesHero />
			<ServiceCategories />
			<AllServicesGrid />
			<JurisdictionComparison />
			<ServicesProcess />
			<ServicesFaq />
			<Cta />
		</main>
	);
}
