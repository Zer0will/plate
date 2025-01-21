"use client";

import Image from "next/image";
import {Calendar} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default function LocationsMap() {
	return (
		<div className='  pt-[150px]'>
			<p className='h3 text-center font-gilroy text-white'>OUR MULTIPLE LOCATIONS</p>

			<div className='max-w-[1200px] mx-auto relative  pt-14'>
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
					<Card className='absolute bottom-48 right-6 bg-[#1A1A1A]/90 backdrop-blur-sm border-0 p-5  '>
						<div className='flex flex-col items-start gap-3 mb-4'>
							<Image src='/icons/time.svg' width={36} height={36} alt='time' />
							<h3 className='font-poppins h9 font-light text-white'>Hours</h3>
						</div>
						<div className='space-y-2 font-poppins h9 font-light text-white mb-6'>
							<p>Monday - Friday: 11:00 AM – 10:00 PM</p>
							<p>Saturday - Sunday: 9:00 AM – 11:00 PM</p>
						</div>
						<div className='flex items-center justify-center'>
							<Button
								className='w-[277px] h-[37px] px-8 rounded-[24px] py-1.5 font-poppins font-light h8 text-[#232323]'
								style={{background: "linear-gradient(90deg, #f7efc1 0%, #e0bc6b 100%)"}}
							>
								Meet the chef
							</Button>
						</div>
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
