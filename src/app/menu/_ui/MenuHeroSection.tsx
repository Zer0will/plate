import {Card, CardContent} from "@/components/ui/card";

export default function MenuHeroSection() {
	return (
		<div
			className='min-h-screen bg-cover bg-center bg-no-repeat relative'
			style={{
				backgroundImage: 'url("/images/menu.png")',
			}}
		>
			<div className='absolute inset-0 bg-black/60' />

			<div className='relative container mx-auto px-4 py-20 md:py-32'>
				<div className='flex flex-col items-center text-center space-y-6 md:space-y-10 text-white'>
					<h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight'>MENU</h1>

					<p className='max-w-4xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed md:leading-relaxed'>
						At Plate of Africa, we pride ourselves on crafting a unique dining experience by offering the best flavors from Africa. Each dish was deliberately
						chosen to provide an authentic, bold, and unforgettable experience. In line with our sustainability and ethical dining policy, we pride ourselves on
						100% vegan-certified offerings. From our love for plant-based food, we can create something adventurous away from the mainstream, yet always healthy
						and in harmony with nature. Step into the world of Africa and experience traditional meals, redefined with a contemporary, plant-based flair.
					</p>
				</div>
			</div>
		</div>
	);
}
