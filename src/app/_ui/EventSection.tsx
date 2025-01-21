"use client";

import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef} from "react";

export default function EventsSection() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "left" ? -320 : 320;
			scrollContainerRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
		}
	};

	return (
		<div className='min-h-screen bg-[#111111] py-12 md:py-20'>
			<h1 className='text-white text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16 px-4'>OUR EVENTS</h1>

			<div className='relative max-w-[90rem] mx-auto'>
				{/* Left Navigation */}
				<div className='absolute left-0 top-1/2 -translate-y-1/2 h-[440px] md:h-[320px] flex items-center z-10'>
					<button
						onClick={() => scroll("left")}
						className='w-[40px] md:w-[72px] h-full bg-[#F5E6BE] rounded-l-full flex items-center justify-center hover:bg-[#E6D4A7] transition-colors'
						aria-label='Previous events'
					>
						<ChevronLeft className='w-6 h-6 md:w-8 md:h-8' />
					</button>
				</div>

				{/* Events Container */}
				<div
					ref={scrollContainerRef}
					className='flex gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4'
					style={{scrollbarWidth: "none", msOverflowStyle: "none"}}
				>
					{[1, 2, 3, 4].map((_, index) => (
						<div
							key={index}
							className='min-w-[280px] md:min-w-[400px] bg-[#1A1A1A] rounded-[24px] md:rounded-[32px] overflow-hidden snap-center'
							style={{
								boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
							}}
						>
							<div className='relative'>
								<Image src='/images/event.png' alt='Event food spread' width={400} height={250} className='object-cover h-[200px] md:h-[250px] w-full' />
								<div className='absolute top-4 md:top-6 left-4 md:left-6 bg-[#2A4B52] text-white px-3 md:px-4 py-2 rounded-lg'>
									<div className='text-2xl md:text-3xl font-bold leading-tight'>10</div>
									<div className='text-xs md:text-sm font-medium'>DEC</div>
								</div>
							</div>

							<div className='p-6 md:p-8'>
								<h3 className='text-white text-xl md:text-2xl font-medium mb-2'>Lorem ipsum dolor sit amet</h3>
								<p className='text-gray-400 text-sm md:text-base mb-6'>Manhattan, New York, NY</p>
								<button className='w-full bg-[#F5E6BE] hover:bg-[#E6D4A7] transition-colors text-black py-3 md:py-4 rounded-xl font-medium text-base md:text-lg'>
									REGISTER
								</button>
							</div>
						</div>
					))}
				</div>

				{/* Right Navigation */}
				<div className='absolute right-0 top-1/2 -translate-y-1/2 h-[440px] md:h-[320px] flex items-center z-10'>
					<button
						onClick={() => scroll("right")}
						className='w-[40px] md:w-[72px] h-full bg-[#F5E6BE] rounded-r-full flex items-center justify-center hover:bg-[#E6D4A7] transition-colors'
						aria-label='Next events'
					>
						<ChevronRight className='w-6 h-6 md:w-8 md:h-8' />
					</button>
				</div>
			</div>
		</div>
	);
}
