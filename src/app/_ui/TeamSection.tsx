import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const chefs = [
	{
		name: "Kwame",
		role: "Head",
		image: "/images/team1.png",
		showVisitButton: true,
	},
	{
		name: "Mandla",
		role: "Team Leader",
		image: "/images/team2.png",
	},
	{
		name: "Amina",
		role: "Manager",
		image: "/images/team3.png",
	},
	{
		name: "Eshe",
		role: "Supervisor",
		image: "/images/team4.png",
	},
];

export default function TeamSection() {
	return (
		<div className='min-h-screen bg-black text-white py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto space-y-12'>
				{/* Header */}
				<h1 className='text-4xl md:text-5xl font-bold text-center'>MEET THE CHEFS</h1>

				{/* Chef Grid */}
				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{chefs.map(chef => (
						<Card key={chef.name} className='bg-zinc-900/50 border-gray-800 overflow-hidden group'>
							<CardContent className='p-6 space-y-4'>
								<div className='aspect-square relative rounded-2xl overflow-hidden'>
									<Image src={chef.image} alt={`${chef.name} - ${chef.role}`} fill className='object-cover transition-transform group-hover:scale-105' />
								</div>
								<div className='space-y-1 text-center'>
									<h2 className='text-xl font-semibold text-white'>{chef.name}</h2>
									<p className='text-gray-400'>{chef.role}</p>
								</div>
								{chef.showVisitButton && <Button className='w-full bg-[#E5D9B6] text-black hover:bg-[#E5D9B6]/90'>Visit Chef</Button>}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
