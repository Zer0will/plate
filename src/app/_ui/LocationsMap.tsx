"use client";

import Image from "next/image";
import {Calendar} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function LocationsMap() {
	return (
		<div className='min-h-screen bg-[#111111] py-12 md:py-20 px-4'>
			<h1 className='text-white text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16'>OUR MULTIPLE LOCATIONS</h1>

			<div className='max-w-[1200px] mx-auto relative'>
				{/* Map Container */}
				<Card className='relative w-full aspect-[16/9] border-0 bg-transparent overflow-hidden'>
					<Image src='/images/location.png' alt='Locations Map' className='object-cover rounded-3xl' width={1260} height={536} />

					{/* Location Markers */}
					<div className='absolute left-[25%] top-[60%]'>
						<LocationMarker />
					</div>
					<div className='absolute left-[45%] top-[30%]'>
						<LocationMarker />
					</div>
					<div className='absolute left-[65%] top-[45%]'>
						<LocationMarker />
					</div>

					{/* Hours Card */}
					<Card className='absolute bottom-6 right-6 bg-[#1A1A1A]/90 backdrop-blur-sm border-0 p-6 max-w-[400px]'>
						<div className='flex items-center gap-3 mb-4'>
							<Calendar className='w-6 h-6 text-[#F5E6BE]' />
							<h3 className='text-white text-xl font-medium'>Hours</h3>
						</div>
						<div className='space-y-2 text-gray-200 mb-6'>
							<p>Monday - Friday: 11:00 AM – 10:00 PM</p>
							<p>Saturday - Sunday: 9:00 AM – 11:00 PM</p>
						</div>
						<Button className='w-full bg-[#F5E6BE] hover:bg-[#E6D4A7] text-black font-medium' variant='ghost'>
							Meet the chef
						</Button>
					</Card>
				</Card>
			</div>
		</div>
	);
}

function LocationMarker() {
	return (
		<div className='relative group cursor-pointer'>
			<div className='w-12 h-12 rounded-full bg-[#F5E6BE] border-4 border-[#1A1A1A] flex items-center justify-center transform transition-transform group-hover:scale-110'>
				<Image src='/icons/africaIcon.svg' alt='africa icon' width={33} height={33} />
			</div>
			<div className='absolute inset-0 rounded-full bg-[#F5E6BE]/20 animate-ping' />
		</div>
	);
}
