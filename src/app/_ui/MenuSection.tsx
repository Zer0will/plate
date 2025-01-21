import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {ArrowUpRight} from "lucide-react";

const menuCategories = [
	{id: "all", label: "All"},
	{id: "appetizers", label: "Appetizers"},
	{id: "entres", label: "Entres"},
	{id: "main-courses", label: "Main Courses"},
];

const menuItems = [
	{
		id: 1,
		name: "Vegetable Skewers",
		description: "Flavor Harmony",
		price: 50.42,
		image: "/icons/menu1.svg",
		category: "appetizers",
	},
	{
		id: 2,
		name: "Bunny Chow",
		image: "/icons/menu2.svg",
		category: "entres",
	},
	{
		id: 3,
		name: "Peanut Soup",
		image: "/icons/menu3.svg",
		category: "main-courses",
	},
];

export default function MenuSection() {
	return (
		<div className='min-h-screen bg-black text-white py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto space-y-12'>
				{/* Header */}
				<h1 className='text-4xl md:text-5xl font-bold text-center'>EXPLORE OUR MENU</h1>

				{/* Categories */}
				<div className='flex flex-wrap justify-center gap-4'>
					{menuCategories.map(category => (
						<Button
							key={category.id}
							variant={category.id === "all" ? "secondary" : "outline"}
							className={category.id === "all" ? "bg-[#E5D9B6] text-black hover:bg-[#E5D9B6]/90" : "border-gray-800 text-gray-300 hover:bg-gray-800"}
						>
							{category.label}
						</Button>
					))}
				</div>

				{/* Menu Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{menuItems.map(item => (
						<Card key={item.id} className='bg-zinc-900/50 border-gray-800 overflow-hidden group'>
							<CardContent className='p-0'>
								<div className='aspect-square relative'>
									<Image src={item.image} alt={item.name} fill className='object-cover' />
								</div>
								<div className='p-6'>
									<div className='flex items-start justify-between gap-4 text-white'>
										<div className='space-y-1'>
											<h3 className='text-xl font-semibold'>{item.name}</h3>
											{item.description && <p className='text-sm text-gray-400'>{item.description}</p>}
										</div>
										{item.price && (
											<div className='flex items-center gap-1 text-white'>
												<span className='text-xl font-semibold'>${item.price}</span>
												<ArrowUpRight className='w-4 h-4 opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0' />
											</div>
										)}
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Explore More Button */}
				<div className='flex justify-center'>
					<Button size='lg' className='bg-[#E5D9B6] text-black hover:bg-[#E5D9B6]/90 px-8'>
						Explore More
					</Button>
				</div>
			</div>
		</div>
	);
}
