"use client";

import Image from "next/image";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef} from "react";

interface TestimonialData {
	image: string;
	text: string;
	subText: string;
	description: string;
}

const testimonialData: TestimonialData[] = [
	{
		image: "/icons/about1.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: "/icons/about2.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: "/icons/about3.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: "/icons/about1.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: "/icons/about2.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
	{
		image: "/icons/about3.svg",
		text: "John Wellberg",
		subText: "@poa",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	},
];

export default function EventsSection(): JSX.Element {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scroll = (direction: "left" | "right") => {
		if (scrollContainerRef.current) {
			const scrollAmount = direction === "left" ? -320 : 320;
			scrollContainerRef.current.scrollBy({
				left: scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<section className='  pt-[150px]'>
			<p className='h3 text-center font-gilroy text-white  pb-14'>What people say about us</p>

			<div className='relative max-w-7xl mx-auto px-4'>
				<button
					onClick={() => scroll("left")}
					className='absolute left-0 top-1/2 -translate-y-1/2 w-11 h-64 flex items-center justify-center rounded-3xl bg-gradient-to-r from-[#f7efc1] to-[#e0bc6b] transition-opacity hover:opacity-90 z-10'
					aria-label='Previous testimonials'
				>
					<ChevronLeft className='w-6 h-6 md:w-8 md:h-8' />
				</button>

				<div
					ref={scrollContainerRef}
					className='flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 mx-12'
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
					}}
				>
					{testimonialData.map((testimonial, index) => (
						<div
							key={index}
							className='flex-shrink-0 rounded-3xl w-96 h-64 backdrop-blur-3xl bg-white/[0.04] p-6 snap-center transition-transform hover:scale-[1.02]'
						>
							<div className='flex justify-between'>
								<div className='flex items-center gap-4 mb-4'>
									<div className='relative w-12 h-12 rounded-full overflow-hidden'>
										<img src={testimonial.image} alt='' className='w-full h-full object-cover' loading='lazy' />
									</div>
									<div>
										<p className='text-white font-semibold'>{testimonial.text}</p>
										<p className='text-gray-400'>{testimonial.subText}</p>
									</div>
								</div>
								<div>
									<img src='/icons/quot.svg' width={24} height={24} alt='quot' />
								</div>
							</div>
							<p className='text-white text-sm leading-relaxed'>{testimonial.description}</p>
						</div>
					))}
				</div>

				<button
					onClick={() => scroll("right")}
					className='absolute right-0 top-1/2 -translate-y-1/2 w-11 h-64 flex items-center justify-center rounded-3xl bg-gradient-to-r from-[#e3d582] to-[#e6b035] transition-opacity hover:opacity-90 z-10'
					aria-label='Next testimonials'
				>
					<ChevronRight className='w-6 h-6 md:w-8 md:h-8' />
				</button>
			</div>
		</section>
	);
}
