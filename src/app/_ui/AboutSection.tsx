"use client";

import Image from "next/image";

// Types
type AboutContent = {
	subtitle: string;
	title: string;
	paragraphs: string[];
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

// Constants
const ABOUT_CONTENT: AboutContent = {
	subtitle: "About",
	title: "PLATE OF AFRICA",
	paragraphs: [
		"We celebrate the culinary history found throughout Africa, recrafted into modern, health-conscious dining. Our dishes can be found throughout the continent, and include North, South, East, and West African cuisine.",
		"We commit ourselves to a high standard of culinary excellence, and invite you to experience the vast flavors that Africa has to offer. Many ingredients used in the creation of our dishes are directly shipped from the continent itself, prioritizing excellence without compromise.",
	],
	image: {
		src: "/images/about.png",
		alt: "Grilled vegetable skewers",
		width: 540,
		height: 290,
	},
};

export default function AboutSection() {
	return (
		<div className='  text-white pt-[150px]'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-8 items-center'>
					{/* Image Grid */}
					<div>
						<Image
							src={ABOUT_CONTENT.image.src}
							alt={ABOUT_CONTENT.image.alt}
							width={ABOUT_CONTENT.image.width}
							height={ABOUT_CONTENT.image.height}
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Text Content */}
					<div className='space-y-6'>
						<div>
							<p className='h6 font-light font-poppins'>{ABOUT_CONTENT.subtitle}</p>
							<p className='h3 font-gilroy'>{ABOUT_CONTENT.title}</p>
						</div>

						<div className='space-y-6 text-white'>
							{ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
								<p key={index} className='h8 font-light font-poppins'>
									{paragraph}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
