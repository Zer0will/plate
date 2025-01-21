import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const chefs = [
	{
		name: "Kwame",
		role: "Head",
		image: "/images/team1.png",
		showVisitButton: true,
		width: 300,
		height: 374,
	},
	{
		name: "Mandla",
		role: "Team Leader",
		image: "/images/team2.png",
		width: 300,
		height: 307,
	},
	{
		name: "Amina",
		role: "Manager",
		image: "/images/team3.png",
		width: 300,
		height: 307,
	},
	{
		name: "Eshe",
		role: "Supervisor",
		image: "/images/team4.png",
		width: 300,
		height: 307,
	},
];

export default function TeamSection() {
	return (
		<div className=' text-white   pt-[150px] w-full'>
			<div className='max-w-7xl mx-auto w-full'>
				{/* Header */}
				<p className='h3 text-center font-gilroy text-white'>MEET THE CHEFS</p>

				{/* Chef Grid */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6  pt-14'>
					{chefs.map(chef => (
						<>
							<div className='aspect-square relative rounded-2xl overflow-hidden'>
								<Image src={chef.image} alt={`${chef.name} - ${chef.role}`} fill className='object-cover transition-transform group-hover:scale-105' />
							</div>
							<Card key={chef.name} className='bg-[#1E1E1E] border-none overflow-hidden group rounded-[40px] width-{chef.width} height-{chef.height}'>
								<CardContent className='p-6 space-y-4'>
									<div className='space-y-1 text-center'>
										<h2 className='font-poppins h6 font-medium text-white'>{chef.name}</h2>
										<p className='text-[#FFFDF4] h7'>{chef.role}</p>
									</div>
									{chef.showVisitButton && (
										<div className='flex justify-center items-center'>
											<Button
												className=' h8 text-[#1e1e1e] rounded-[24px] px-8 py-1.5 w-[147px] h-[37px]'
												style={{background: "linear-gradient(90deg, #f7efc1 0%, #e0bc6b 100%)"}}
											>
												Visit Chef
											</Button>
										</div>
									)}
								</CardContent>
							</Card>
						</>
					))}
				</div>
			</div>
		</div>
	);
}
