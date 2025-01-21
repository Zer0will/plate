import Image from "next/image";
import Link from "next/link";
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone} from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-[#111111] pt-16 pb-8'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-12'>
					{/* Logo Section */}
					<div className='flex justify-center md:justify-start'>
						<Image src='/icons/footer.svg' alt='Plate of Africa Logo' width={120} height={120} className='object-contain' />
					</div>

					{/* Quick Links */}
					<div className='text-center md:text-left'>
						<h3 className='text-white text-2xl font-medium mb-6'>Quick Link</h3>
						<ul className='space-y-4'>
							<li>
								<Link href='/about' className='text-gray-300 hover:text-[#F5E6BE] transition-colors'>
									About
								</Link>
							</li>
							<li>
								<Link href='/services' className='text-gray-300 hover:text-[#F5E6BE] transition-colors'>
									Services
								</Link>
							</li>
							<li>
								<Link href='/contact' className='text-gray-300 hover:text-[#F5E6BE] transition-colors'>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact Us */}
					<div className='text-center md:text-left'>
						<h3 className='text-white text-2xl font-medium mb-6'>Contact Us</h3>
						<ul className='space-y-4'>
							<li className='text-gray-300 flex items-center gap-3 justify-center md:justify-start'>
								<Phone className='w-5 h-5' />
								<Link href='tel:123-456-789-99'>123-456-789-99</Link>
							</li>
							<li className='text-gray-300 flex items-center gap-3 justify-center md:justify-start'>
								<Mail className='w-5 h-5' />
								<Link href='mailto:poa@mail.com'>poa@mail.com</Link>
							</li>
							<li className='text-gray-300 flex items-center gap-3 justify-center md:justify-start'>
								<MapPin className='w-5 h-5' />
								<span>1 Ardfrail ct Millbrook Rd Oldcastle</span>
							</li>
						</ul>
					</div>

					{/* Follow Us */}
					<div className='text-center md:text-left'>
						<h3 className='text-white text-2xl font-medium mb-6'>Follow Us</h3>
						<div className='flex gap-4 justify-center md:justify-start'>
							<Link
								href='#'
								className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#F5E6BE] hover:text-[#F5E6BE] transition-colors'
							>
								<Linkedin size={20} />
							</Link>
							<Link
								href='#'
								className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#F5E6BE] hover:text-[#F5E6BE] transition-colors'
							>
								<Facebook size={20} />
							</Link>
							<Link
								href='#'
								className='w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#F5E6BE] hover:text-[#F5E6BE] transition-colors'
							>
								<Instagram size={20} />
							</Link>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-800 pt-8'>
					<p className='text-gray-400 text-center text-sm'>© Copyright 2024. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}
