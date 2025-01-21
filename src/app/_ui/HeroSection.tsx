import Image from "next/image";
import Link from "next/link";

import {ChevronDown} from "lucide-react";
import {Button} from "@/components/ui/button";
import Nav from "../../components/Nav";

export function HeroSection() {
	return (
		<div className='relative '>
			<main className='absolute min-h-[800px] w-full  flex'>
				<div>
					<Image src='/images/hero-bg.png' alt='African cuisine background' fill className='object-cover' priority style={{transform: "rotate(-180deg)"}} />
				</div>
				<div className=' w-3/5  bg-black/35 backdrop-blur-sm'></div>
				<div className=' w-2/5  '></div>
			</main>
			<div className='relative z-20 min-h-[800px] container flex items-center w-full   flex-1 '>
				<div>
					<div className=' text-white pb-14'>
						<p className='pb-5'>
							<span className='block h1 font-gilroy '>Welcome to</span>
							<span className='block h2 font-gilroy'>PLATE OF AFRICA</span>
						</p>
						<p className='h8 max-w-2xl font-poppins font-light '>
							Plate of Africa is an African restaurant that specializes in the diverse cuisines found throughout the African continent, through an entirely
							plant-based menu.
						</p>
					</div>
					<Button
						className='w-[219px] md:w-[238px] h-[44px] rounded-[24px] font-poppins font-light h8
             px-8 py-[6px] bg-gradient-to-r from-[#F7EFC1] to-[#E0BC6B] 
             text-black text-sm md:text-base 
             hover:opacity-90 transition-all '
					>
						Make a Reservation
					</Button>
				</div>
				<div className='absolute bottom-8 left-1/2 -translate-x-1/2 text-[#E5D9B6]'>
					<ChevronDown size={32} className='animate-bounce' />
				</div>
			</div>
		</div>
	);
}
