import { Cta } from "@/components/layout/cta";

import { ContactDirectChannels } from "./sections/contact-direct-channels";
import { ContactFaq } from "./sections/contact-faq";
import { ContactFormSection } from "./sections/contact-form-section";
import { ContactHero } from "./sections/contact-hero";
import { ContactOffices } from "./sections/contact-offices";

export function ContactPageView() {
	return (
		<main>
			<ContactHero />
			<ContactDirectChannels />
			<ContactFormSection />
			<ContactOffices />
			<ContactFaq />
			<Cta />
		</main>
	);
}
