import Image from "next/image";
import Link from "next/link";

import {ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";

export function HeroSection() {
	return (
		<main className='min-h-screen relative  mx-auto pt-[40px]'>
			{/* Background Image with Overlay */}
			<div>
				<Image src='/images/hero-bg.png' alt='African cuisine background' fill className='object-cover' priority style={{transform: "rotate(-180deg)"}} />
			</div>

			{/* Content */}
			<div className='relative z-10'>
				{/* Navigation */}
				<nav className='flex items-center justify-between '>
					{/* Logo */}
					<div className='w-["118px"] h-["118px"]'>
						<Image src='/icons/nav-logo.svg' alt='Plate of Africa Logo' width={118} height={118} className='object-contain' />
					</div>

					{/* Navigation Links */}
					<div className='flex items-center gap-8'>
						<Link href='/' className='text-white hover:text-white/80 nav-text'>
							Home
						</Link>
						<Link href='/menu' className='text-white hover:text-white/80'>
							Menu
						</Link>
						<Link href='/sign-in' className='text-white hover:text-white/80'>
							Sign In
						</Link>
						<Button
							className='w-[111px] h-[25px] md:h-[37px] rounded-[24px] px-8 py-[6px] 
             bg-gradient-to-r from-[#E3D582] to-[#E6B035] 
             text-black h3-font-line
             hover:opacity-90 transition-all'
						>
							Login
						</Button>
					</div>
				</nav>

				{/* Hero Section */}
				<div className=' mx-auto px-6 py-24'>
					<div className='space-y-4 text-white'>
						<h1>
							<span className='block h1'>Welcome to</span>
							<span className='block h2'>PLATE OF AFRICA</span>
						</h1>
						<p className='h3 max-w-2xl '>
							Plate of Africa is an African restaurant that specializes in the diverse cuisines found throughout the African continent, through an entirely
							plant-based menu.
						</p>
					</div>
					<Button
						className='w-[219px] md:w-[238px] h-[44px] rounded-[24px] 
             px-8 py-[6px] bg-gradient-to-r from-[#F7EFC1] to-[#E0BC6B] 
             text-black text-sm md:text-base 
             hover:opacity-90 transition-all'
					>
						Make a Reservation
					</Button>
				</div>

				{/* Scroll Indicator */}
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E5D9B6]'>
					<ChevronDown size={32} className='animate-bounce' />
				</div>
			</div>
		</main>
	);
}
