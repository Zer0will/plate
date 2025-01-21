"use client";

import {Card, CardContent} from "@/components/ui/card";
import {Users, DollarSign, Leaf, Users2, Coins} from "lucide-react";
import Image from "next/image";

interface BenefitProps {
	icon: React.ReactNode;
	text: string;
}

const Benefit = ({icon, text}: BenefitProps) => (
	<div className='flex items-start space-x-4 pb-4 border-b border-white/10'>
		<div className='rounded-full bg-white/10 p-2.5 w-10 h-10 flex items-center justify-center'>{icon}</div>
		<p className='text-base sm:text-lg text-muted-foreground'>{text}</p>
	</div>
);

export default function WhyJoinSection() {
	return (
		<section className='w-full bg-black py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-8 items-center'>
					{/* Left Column - Benefits */}
					<div className='space-y-10'>
						<h2 className='text-4xl sm:text-5xl font-bold text-white'>WHY JOIN?</h2>

						<div className='space-y-8'>
							<Benefit
								icon={<Users2 className='w-5 h-5 text-white' />}
								text="Join an Inclusive Community: As a Plate of Africa employee, you're not just an employee, but a member of our family."
							/>

							<Benefit
								icon={<Coins className='w-5 h-5 text-white' />}
								text='Competitive Salary: We believe that workers should be fairly compensated for their labour. Plate of Africa is among the top 10% of restaurants in average employee salary.'
							/>

							<Benefit
								icon={<Leaf className='w-5 h-5 text-white' />}
								text='Make an Impact: Join us on our mission to foster community through an environmentally-friendly dining experience.'
							/>
						</div>
					</div>

					{/* Right Column - Images */}
					<div className='grid  '>
						<Card className='overflow-hidden bg-transparent border-0'>
							<CardContent className='p-0'>
								<div className='relative aspect-[4/3] rounded-3xl overflow-hidden'>
									<Image src='/images/join.png' alt='Restaurant interior view' fill />
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
