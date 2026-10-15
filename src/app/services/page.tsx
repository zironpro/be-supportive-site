import type { Metadata } from "next";
import Script from "next/script";

import { ServicesPageView } from "@/features/services/services-page-view";

export const metadata: Metadata = {
	title: "Corporate & Business Setup Services UAE | Be Supportive",
	description:
		"Explore complete UAE corporate services by Be Supportive: Mainland & Free Zone business setup, PRO government liaison, investor & golden visas, corporate tax, VAT, and legal notarization.",
	openGraph: {
		title: "Corporate & Business Setup Services UAE | Be Supportive",
		description:
			"Full-spectrum business setup, PRO, residency visas, tax, and compliance support for companies across Abu Dhabi, Dubai, and the UAE.",
		url: "https://besupportive.ae/services",
		siteName: "Be Supportive",
		locale: "en_AE",
		type: "website",
	},
	alternates: {
		canonical: "https://besupportive.ae/services",
	},
};

const servicesJsonLd = {
	"@context": "https://schema.org",
	"@type": "Service",
	serviceType: "Corporate Services & Business Setup in UAE",
	provider: {
		"@type": "ProfessionalService",
		name: "Be Supportive",
		url: "https://besupportive.ae",
		areaServed: {
			"@type": "Country",
			name: "United Arab Emirates",
		},
	},
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "UAE Corporate Services Catalog",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Business Setup (Mainland, Free Zone, Offshore)",
					description:
						"Complete company incorporation, trade licensing, and corporate structuring across Abu Dhabi, Dubai, and Free Zones.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "PRO Services & Government Liaison",
					description:
						"Representation before UAE ministries, municipal approvals, document clearing, and Chamber of Commerce filings.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Immigration & Visa Services",
					description:
						"Investor visas, 10-year UAE Golden Visas, employment residency permits, and family sponsorship management.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Corporate Tax & VAT Consultancy",
					description:
						"Federal Tax Authority (FTA) corporate tax registration, 9% corporate tax returns, and 5% VAT filings.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "Corporate Legal & Notary Services",
					description:
						"Private and public notary facilitation, MOJ legal translations, and power of attorney drafting.",
				},
			},
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Service",
					name: "HR, Payroll & WPS Services",
					description:
						"Wage Protection System (WPS) registration, corporate bank account assistance, and health insurance compliance.",
				},
			},
		],
	},
};

export default function ServicesPage() {
	return (
		<>
			<Script type="application/ld+json">{JSON.stringify(servicesJsonLd)}</Script>
			<ServicesPageView />
		</>
	);
}
