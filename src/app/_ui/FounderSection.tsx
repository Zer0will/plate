import Image from "next/image";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function FounderSection() {
	return (
		<div className='min-h-screen bg-black text-white py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-3 gap-12 items-start'>
					{/* Left Column - Text */}
					<div className='space-y-6'>
						<div className='space-y-2'>
							<h2 className='text-2xl font-light'>Who Founded</h2>
							<h1 className='text-4xl md:text-5xl font-bold'>PLATE OF AFRICA</h1>
						</div>

						<p className='text-gray-300 text-lg leading-relaxed'>
							Plate of Africa was founded to celebrate Africa's rich culinary heritage through a modern, plant-based approach. Created by passionate chefs and
							cultural advocates, it combines authentic flavors, sustainable practices, and innovation to honor the continent's vibrant traditions and diverse
							cuisines.
						</p>
					</div>

					{/* Center Column - Image */}
					<div className='rounded-2xl overflow-hidden'>
						<Image src='/images/founder.png' alt='African cuisine dish' width={500} height={600} className='w-full h-full object-cover' />
					</div>

					{/* Right Column - Accordion */}
					<div className='space-y-4'>
						<Accordion type='single' collapsible className='w-full space-y-4'>
							<AccordionItem value='item-1' className='border-none'>
								<AccordionTrigger className='flex items-center gap-4 hover:no-underline'>
									<div className='flex items-center gap-4'>
										<span className='bg-[#E5D9B6] text-black w-8 h-8 rounded-full flex items-center justify-center text-sm'>01</span>
										<span className='text-xl font-semibold'>Celebrate Diversity</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className='text-gray-300 pl-12'>Showcasing cuisines from North, South, East, and West.</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-2' className='border-none'>
								<AccordionTrigger className='flex items-center gap-4 hover:no-underline'>
									<div className='flex items-center gap-4'>
										<span className='bg-[#E5D9B6] text-black w-8 h-8 rounded-full flex items-center justify-center text-sm'>02</span>
										<span className='text-xl font-semibold'>Plant-Based Excellence</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className='text-gray-300 pl-12'>Innovative plant-based interpretations of traditional African dishes.</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-3' className='border-none'>
								<AccordionTrigger className='flex items-center gap-4 hover:no-underline'>
									<div className='flex items-center gap-4'>
										<span className='bg-[#E5D9B6] text-black w-8 h-8 rounded-full flex items-center justify-center text-sm'>03</span>
										<span className='text-xl font-semibold'>Authentic Ingredients</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className='text-gray-300 pl-12'>Sourcing genuine African ingredients for authentic flavors.</AccordionContent>
							</AccordionItem>

							<AccordionItem value='item-4' className='border-none'>
								<AccordionTrigger className='flex items-center gap-4 hover:no-underline'>
									<div className='flex items-center gap-4'>
										<span className='bg-[#E5D9B6] text-black w-8 h-8 rounded-full flex items-center justify-center text-sm'>04</span>
										<span className='text-xl font-semibold'>Heritage Keepers</span>
									</div>
								</AccordionTrigger>
								<AccordionContent className='text-gray-300 pl-12'>Preserving and sharing African culinary traditions.</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</div>
		</div>
	);
}
