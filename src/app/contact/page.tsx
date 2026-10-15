import type { Metadata } from "next";
import Script from "next/script";

import { ContactPageView } from "@/features/contact/contact-page-view";

export const metadata: Metadata = {
	title: "Contact Us | UAE Business Setup & Corporate Consultants | Be Supportive",
	description:
		"Get in touch with Be Supportive's UAE business setup and corporate services specialists. Direct office access in Abu Dhabi and Dubai for Mainland, Free Zone, PRO, and visa solutions.",
	openGraph: {
		title: "Contact Us | Be Supportive UAE",
		description:
			"Direct consultations with licensed UAE business formation specialists in Abu Dhabi & Dubai.",
		url: "https://besupportive.ae/contact",
		siteName: "Be Supportive",
		locale: "en_AE",
		type: "website",
	},
	alternates: {
		canonical: "https://besupportive.ae/contact",
	},
};

const contactJsonLd = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	name: "Contact Be Supportive",
	url: "https://besupportive.ae/contact",
	description:
		"Contact Be Supportive for UAE corporate setup, PRO services, visas, and tax advisory.",
	mainEntity: {
		"@type": "ProfessionalService",
		name: "Be Supportive",
		telephone: "+971567890123",
		email: "info@besupportive.ae",
		address: {
			"@type": "PostalAddress",
			addressCountry: "AE",
			addressLocality: "Abu Dhabi",
			streetAddress: "Al Maryah Island & Downtown Business Hub",
		},
		openingHoursSpecification: [
			{
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
				opens: "08:30",
				closes: "18:00",
			},
		],
	},
};

export default function ContactPage() {
	return (
		<>
			<Script type="application/ld+json">{JSON.stringify(contactJsonLd)}</Script>
			<ContactPageView />
		</>
	);
}
