"use client";

import Image from "next/image";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default function EmploymentSection() {
	return (
		<section className='relative min-h-[60vh] w-full flex items-center justify-center overflow-hidden py-12 sm:py-16 lg:py-20'>
			{/* Background Image */}
			<div className='absolute inset-0 z-0'>
				<Image src='/images/employment.png' alt='Background of African dishes' fill />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white'>
				<p>EMPLOYMENT</p>

				<p>
					Are you interested in working for Plate of Africa? We are always looking for new, motivated minds to contribute to our family. Whether it be the front
					or the back of the house, we want you to look into joining our family.
				</p>
			</div>
		</section>
	);
}
