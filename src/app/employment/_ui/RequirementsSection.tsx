import {Clock, Utensils, FileCheck, Building2} from "lucide-react";
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";

export default function RequirementsSection() {
	return (
		<div className='bg-black/90 text-white min-h-screen p-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid gap-8 md:grid-cols-[1fr,2fr] items-center'>
					{/* Image Grid */}
					<div className='grid  '>
						<Card className='overflow-hidden bg-transparent border-0'>
							<CardContent className='p-0'>
								<div className='relative aspect-[4/3] rounded-3xl overflow-hidden'>
									<Image src='/images/req.png' alt='Restaurant interior view' fill />
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Requirements Content */}
					<div className='space-y-8'>
						<h2 className='text-4xl font-bold tracking-tight'>REQUIREMENTS</h2>

						<div className='grid gap-6 sm:grid-cols-2'>
							<div className='flex gap-4 items-start border-r border-gray-700 pr-6'>
								<div className='p-2.5 rounded-full bg-[#4a4a42]'>
									<FileCheck className='w-6 h-6' />
								</div>
								<div className='space-y-1'>
									<p className='font-medium'>Strong Work ethic and willpower</p>
								</div>
							</div>

							<div className='flex gap-4 items-start'>
								<div className='p-2.5 rounded-full bg-[#4a4a42]'>
									<Clock className='w-6 h-6' />
								</div>
								<div className='space-y-1'>
									<p className='font-medium'>Ability to work a minimum of 3 days per week</p>
								</div>
							</div>

							<div className='flex gap-4 items-start border-r border-gray-700 pr-6'>
								<div className='p-2.5 rounded-full bg-[#4a4a42]'>
									<Utensils className='w-6 h-6' />
								</div>
								<div className='space-y-1'>
									<p className='font-medium'>Minimum 2 years work experience in fine dining</p>
								</div>
							</div>

							<div className='flex gap-4 items-start'>
								<div className='p-2.5 rounded-full bg-[#4a4a42]'>
									<Building2 className='w-6 h-6' />
								</div>
								<div className='space-y-1'>
									<p className='font-medium'>Food Handler's License (Required for both front and back of the house staff)</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
