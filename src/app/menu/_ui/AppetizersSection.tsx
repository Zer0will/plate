import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";

interface MenuItem {
	title: string;
	price: number;
	ingredients: string[];
	description: string;
	image: string;
}

const menuItems: MenuItem[] = [
	{
		title: "Liberian Fried Okra",
		price: 25,
		ingredients: ["Chicken", "okra", "tomato paste", "cayenne pepper"],
		description: "Lorem ipsum dolor sit amet consectetur. Gravida ultrices.",
		image: "icons/menuA.svg",
	},
	{
		title: "Ugandan Vegetarian Spring Rolls",
		price: 25,
		ingredients: ["Vegetables", "Seasonings", "Pastry"],
		description: "Have you tastedUgandan Vegetarian Spring Rolls......",
		image: "icons/menuB.svg",
	},
	{
		title: "African Spice Grilled Vegetable Skewers",
		price: 25,
		ingredients: ["Vegetables", "Olive oil", "Fresh lemon juice"],
		description: "Have you tasted African Spice Grilled Vegetable Skewers....",
		image: "icons/menuC.svg",
	},
];

export default function AppetizersSection() {
	return (
		<div className='bg-black/90 text-white min-h-screen w-full flex items-center justify-center p-4 md:p-8'>
			<Card className='bg-zinc-900 p-8  mx-auto'>
				<h2 className='text-4xl font-bold text-white text-center mb-8'>APPETIZERS</h2>
				<div className='flex'>
					<div className='space-y-8 flex-1 w-full  border-r border-r-red-300 border-0'>
						{menuItems.map((item, index) => (
							<CardContent key={index} className='flex items-start gap-4  pb-8 last:border-0'>
								<div className='relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0'>
									<Image src={item.image || "/placeholder.svg"} alt={item.title} fill className='object-cover' />
								</div>
								<div className='flex-1 min-w-0'>
									<div className='flex items-center gap-4 mb-2'>
										<h3 className='text-xl font-semibold text-yellow-400 truncate'>{item.title}</h3>
										<div className='h-[0.6px] w-[242px] border-[0.6px] border-dashed border-white flex-shrink-0' />
										<span className='text-xl font-semibold text-yellow-400 flex-shrink-0'>${item.price}</span>
									</div>
									<div className='flex flex-wrap gap-2 mb-2 items-center'>
										{item.ingredients.map((ingredient, idx) => (
											<>
												<span
													key={idx}
													className='font-light text-lg text-center'
													style={{
														fontFamily: "var(--font-family)",
														fontSize: "18px",
														color: "rgba(255, 255, 255, 0.62)",
													}}
												>
													{ingredient}
												</span>
												{idx < item.ingredients.length - 1 && <div className='h-4 w-px bg-white/10 ' />}
											</>
										))}
									</div>
									<p className='text-zinc-400 text-sm'>{item.description}</p>
								</div>
							</CardContent>
						))}
					</div>
					<div className='space-y-8  w-full flex-1'>
						{menuItems.map((item, index) => (
							<CardContent key={index} className='flex items-start gap-4  pb-8 last:border-0'>
								<div className='relative h-16 w-16 rounded-lg overflow-hidden flex-shrink-0'>
									<Image src={item.image || "/placeholder.svg"} alt={item.title} fill className='object-cover' />
								</div>
								<div className='flex-1 min-w-0'>
									<div className='flex items-center gap-4 mb-2'>
										<h3 className='text-xl font-semibold text-yellow-400 truncate'>{item.title}</h3>
										<div className='h-[0.6px] w-[242px] border-[0.6px] border-dashed border-white flex-shrink-0' />
										<span className='text-xl font-semibold text-yellow-400 flex-shrink-0'>${item.price}</span>
									</div>
									<div className='flex flex-wrap gap-2 mb-2 items-center'>
										{item.ingredients.map((ingredient, idx) => (
											<>
												<span
													key={idx}
													className='font-light text-lg text-center'
													style={{
														fontFamily: "var(--font-family)",
														fontSize: "18px",
														color: "rgba(255, 255, 255, 0.62)",
													}}
												>
													{ingredient}
												</span>
												{idx < item.ingredients.length - 1 && <div className='h-4 w-px bg-white/10 ' />}
											</>
										))}
									</div>
									<p className='text-zinc-400 text-sm'>{item.description}</p>
								</div>
							</CardContent>
						))}
					</div>
				</div>
			</Card>
		</div>
	);
}
