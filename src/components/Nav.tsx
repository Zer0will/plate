"use client";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {useState, useEffect} from "react";

const Nav = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 120) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array means this effect runs once on mount

	return (
		<nav className={cn("w-full fixed top-0 z-[1000] mb-10 ", isScrolled ? "bg-black" : "bg-transparent")}>
			<div className={`flex mx-auto items-center container  justify-between  w-full transition-colors duration-300 `}>
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
			</div>
		</nav>
	);
};

export default Nav;
