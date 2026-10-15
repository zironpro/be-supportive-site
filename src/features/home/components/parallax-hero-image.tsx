"use client";

import { useRef } from "react";

import Image from "next/image";

import { motion, useScroll, useTransform } from "motion/react";

interface ParallaxImageProps {
	src?: string;
	alt?: string;
}

export function ParallaxImage({
	src = "/images/hero-banner.webp",
	alt = "Background image",
}: ParallaxImageProps = {}) {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});
	const translateY = useTransform(scrollYProgress, [0, 1], ["-85%", "65%"]);

	return (
		<motion.div
			className="absolute inset-0"
			ref={containerRef}
			style={{ y: translateY }}
		>
			<Image
				alt={alt}
				className="object-cover opacity-80"
				fill
				loading="eager"
				priority
				src={src}
			/>
		</motion.div>
	);
}
