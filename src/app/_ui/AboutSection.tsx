import Image from "next/image";

export default function AboutSection() {
	return (
		<div className='min-h-screen bg-black text-white py-16 px-4 md:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid lg:grid-cols-2 gap-8 items-center'>
					{/* Image Grid */}
					<div>
						{/* Large Image */}

						<Image src='/images/about.png' alt='Grilled vegetable skewers' width={540} height={290} className='w-full h-full object-cover' />
					</div>

					{/* Text Content */}
					<div className='space-y-6'>
						<div className='space-y-2'>
							<h2 className='text-2xl font-light'>About</h2>
							<h1 className='text-4xl md:text-5xl font-bold'>PLATE OF AFRICA</h1>
						</div>

						<div className='space-y-6 text-gray-300'>
							<p className='text-lg'>
								We celebrate the culinary history found throughout Africa, recrafted into modern, health-conscious dining. Our dishes can be found throughout
								the continent, and include North, South, East, and West African cuisine.
							</p>

							<p className='text-lg'>
								We commit ourselves to a high standard of culinary excellence, and invite you to experience the vast flavors that Africa has to offer. Many
								ingredients used in the creation of our dishes are directly shipped from the continent itself, prioritizing excellence without compromise.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
