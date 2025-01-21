"use client";

import Image from "next/image";
import {useState} from "react";
import {ArrowUpRight} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

// Types
type MenuCategory = {
	id: string;
	label: string;
};

type MenuItem = {
	id: number;
	name: string;
	description?: string;
	price?: number;
	width: number;
	height: number;
	image: string;
	category: string;
};

// Constants
const MENU_CATEGORIES: MenuCategory[] = [
	{id: "all", label: "All"},
	{id: "appetizers", label: "Appetizers"},
	{id: "entres", label: "Entres"},
	{id: "main-courses", label: "Main Courses"},
];

const MENU_ITEMS: MenuItem[] = [
	{
		id: 1,
		name: "Vegetable Skewers",
		description: "Flavor Harmony",
		price: 50.42,
		width: 360,
		height: 227,
		image: "/images/menu1.png",
		category: "appetizers",
	},
	{
		id: 2,
		name: "Bunny Chow",
		width: 234,
		height: 234,
		image: "/images/menu2.png",
		category: "entres",
	},
	{
		id: 3,
		name: "Peanut Soup",
		width: 234,
		height: 234,
		image: "/images/menu3.png",
		category: "main-courses",
	},
];

// Components
const MenuItemCard = ({item}: {item: MenuItem}) => (
	<Card className='bg-[#1E1E1E] border-none overflow-hidden group rounded-[40px]'>
		<CardContent className='p-6 flex justify-center flex-col items-center'>
			<div className='relative'>
				<Image src={item.image} alt={item.name} width={item.width} height={item.height} />
			</div>
			<div className='py-6 w-full'>
				<div className='flex items-start justify-between gap-4 text-white'>
					<div className='space-y-3'>
						<h3 className='font-poppins h7 font-medium '>{item.name}</h3>
						{item.description && <p className=' h9 font-poppins text-[#9F9F9F]'>{item.description}</p>}
					</div>
					{item.price && (
						<div className='flex  gap-1 text-white flex-col items-end'>
							<p className='font-poppins h4 font-regular'>${item.price.toFixed(2)}</p>
							<Image src='/icons/arrow.svg' width={15} height={15} alt='arrow' />
						</div>
					)}
				</div>
			</div>
		</CardContent>
	</Card>
);

export default function MenuSection() {
	const [activeMenu, setActiveMenu] = useState("All-1");

	return (
		<div className=' text-white w-full'>
			<div className='max-w-7xl mx-auto pt-[150px] w-full'>
				{/* Header */}
				<h2 className='h3 text-center font-gilroy'>EXPLORE OUR MENU</h2>

				{/* Categories */}
				<div className='flex justify-center w-full px-4 pt-14 pb-10'>
					<div
						className='w-[798px] rounded-full overflow-hidden flex items-center justify-center max-w-full py-3'
						style={{background: "rgba(235, 235, 235, 0.04)"}}
					>
						<Tabs defaultValue='All-1' className='w-full' onValueChange={setActiveMenu}>
							<TabsList className='w-full h-10 md:h-12 bg-transparent flex items-center justify-center gap-2 md:gap-20 overflow-x-auto scrollbar-hide'>
								{MENU_CATEGORIES.map(section => (
									<TabsTrigger
										key={section.id}
										value={`${section.label}-${section.id}`}
										className={`
                      whitespace-nowrap
                      px-4 md:px-6
                      py-2 md:py-2.5
                      rounded-full h7 font-poppins
                      flex-shrink-0
                      ${activeMenu === `${section.label}-${section.id}` ? "bg-gradient-to-r from-amber-100 to-amber-300 text-black" : "bg-[#393939] text-white"}
                      transition-all duration-200
                    `}
									>
										{section.label}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>
				</div>

				{/* Menu Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{MENU_ITEMS.map(item => (
						<MenuItemCard key={item.id} item={item} />
					))}
				</div>

				{/* Explore More Button */}
				<div className='flex justify-center pt-12'>
					<Button className='w-[196px] h-[25px] md:h-[37px] rounded-[24px] bg-gradient-to-r from-[#f7efc1] to-[#e0bc6b] text-[#232323] h8 font-poppins hover:opacity-90 transition-all'>
						Explore More
					</Button>
				</div>
			</div>
		</div>
	);
}
