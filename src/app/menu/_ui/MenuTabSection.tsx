"use client";
import React, {useState} from "react";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";

const MenuTabSection = () => {
	const [activeTab, setActiveTab] = useState("Appetizers-1");

	const menuSections = [
		{
			id: 1,
			name: "Appetizers",
			isActive: true,
		},
		{
			id: 2,
			name: "Entres",
			isActive: false,
		},
		{
			id: 3,
			name: "Main Courses",
			isActive: false,
		},
		{
			id: 4,
			name: "Desserts",
			isActive: false,
		},
		{
			id: 5,
			name: "Non-Alcoholic Drinks",
			isActive: false,
		},
		{
			id: 6,
			name: "Non-Alcoholic Drinks",
			isActive: false,
		},
	];

	return (
		<div className='bg-black/90 text-white min-h-screen w-full flex items-center justify-center p-4 md:p-8'>
			<div className='w-full max-w-screen-lg bg-gray-200 bg-opacity-5 px-3 md:px-5 py-2 md:py-3 rounded-full overflow-hidden'>
				<Tabs defaultValue='Appetizers-1' className='w-full' onValueChange={setActiveTab}>
					<TabsList className='w-full h-10 md:h-12 bg-transparent flex items-center gap-2 md:gap-3 overflow-x-auto scrollbar-hide'>
						{menuSections.map(section => (
							<TabsTrigger
								key={section.id}
								value={`${section.name}-${section.id}`}
								className={`
                  whitespace-nowrap
                  px-4 md:px-6 
                  py-2 md:py-2.5 
                  rounded-full
                  text-xs md:text-sm 
                  font-medium
                  flex-shrink-0
				   ${activeTab === `${section.name}-${section.id}` ? "bg-gradient-to-r from-amber-100 to-amber-300 text-black" : "bg-[#393939] text-white"}
                  transition-all duration-200
                `}
							>
								{section.name}
							</TabsTrigger>
						))}
					</TabsList>
				</Tabs>
			</div>
		</div>
	);
};

export default MenuTabSection;
