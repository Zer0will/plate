"use client";

import Image from "next/image";
import {ChevronDown} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

// Types
type FounderContent = {
	subtitle: string;
	title: string;
	description: string;
	image: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
};

type AccordionItem = {
	id: string;
	number: string;
	title: string;
	content: string;
};

// Constants
const FOUNDER_CONTENT: FounderContent = {
	subtitle: "Who Founded",
	title: "PLATE OF AFRICA",
	description:
		"Plate of Africa was founded to celebrate Africa's rich culinary heritage through a modern, plant-based approach. Created by passionate chefs and cultural advocates, it combines authentic flavors, sustainable practices, and innovation to honor the continent's vibrant traditions and diverse cuisines.",
	image: {
		src: "/images/founder.png",
		alt: "African cuisine dish",
		width: 500,
		height: 600,
	},
};

const ACCORDION_ITEMS: AccordionItem[] = [
	{
		id: "item-1",
		number: "01",
		title: "Celebrate Diversity",
		content: "Showcasing cuisines from North, South, East, and West.",
	},
	{
		id: "item-2",
		number: "02",
		title: "Plant-Based Excellence",
		content: "Innovative plant-based interpretations of traditional African dishes.",
	},
	{
		id: "item-3",
		number: "03",
		title: "Authentic Ingredients",
		content: "Sourcing genuine African ingredients for authentic flavors.",
	},
	{
		id: "item-4",
		number: "04",
		title: "Heritage Keepers",
		content: "Preserving and sharing African culinary traditions.",
	},
];

// Components
const GradientChevron = () => (
	<div className='relative'>
		<svg width='0' height='0'>
			<defs>
				<linearGradient id='chevron-gradient' x1='0%' y1='0%' x2='100%' y2='0%'>
					<stop offset='0%' style={{stopColor: "#f7efc1"}} />
					<stop offset='100%' style={{stopColor: "#e0bc6b"}} />
				</linearGradient>
			</defs>
		</svg>
		<ChevronDown className='h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180' style={{stroke: "url(#chevron-gradient)"}} />
	</div>
);

const AccordionSection = () => (
	<Accordion type='single' collapsible className='w-full space-y-4' defaultValue='item-1'>
		{ACCORDION_ITEMS.map(item => (
			<AccordionItem key={item.id} value={item.id} className='border-none bg-white/5 px-5 py-2 rounded-xl'>
				<AccordionTrigger className='flex items-center gap-4 hover:no-underline group'>
					<div className='flex items-center gap-4'>
						<span className='bg-gradient-to-r from-[#f7efc1] to-[#e0bc6b] text-black w-8 h-8 rounded-full flex items-center justify-center font-medium'>
							{item.number}
						</span>
						<span className='font-medium'>{item.title}</span>
					</div>
					<GradientChevron />
				</AccordionTrigger>
				<AccordionContent className='pl-12 font-light'>{item.content}</AccordionContent>
			</AccordionItem>
		))}
	</Accordion>
);

export default function FounderSection() {
	return (
		<div className=' text-white pt-[150px]'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-3 gap-12 items-center'>
					{/* Left Column - Text */}
					<div className='space-y-6'>
						<div className='space-y-2'>
							<p className='h6 font-light font-poppins'>{FOUNDER_CONTENT.subtitle}</p>
							<p className='h3 font-gilroy'>{FOUNDER_CONTENT.title}</p>
						</div>
						<p className='h8 font-light font-poppins'>{FOUNDER_CONTENT.description}</p>
					</div>

					{/* Center Column - Image */}
					<div className='rounded-2xl overflow-hidden'>
						<Image
							src={FOUNDER_CONTENT.image.src}
							alt={FOUNDER_CONTENT.image.alt}
							width={FOUNDER_CONTENT.image.width}
							height={FOUNDER_CONTENT.image.height}
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Right Column - Accordion */}
					<div className='space-y-4 flex items-center h-full'>
						<AccordionSection />
					</div>
				</div>
			</div>
		</div>
	);
}
