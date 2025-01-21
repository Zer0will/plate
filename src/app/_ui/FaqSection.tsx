"use client";

import {useState} from "react";
import {ChevronUp} from "lucide-react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Button} from "@/components/ui/button";

export default function FAQSection() {
	const [showScrollTop, setShowScrollTop] = useState(false);

	// Show button when page is scrolled up to given distance
	if (typeof window !== "undefined") {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 300) {
				setShowScrollTop(true);
			} else {
				setShowScrollTop(false);
			}
		});
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const faqData = [
		{
			question: "What type of cuisine does Plate of Africa serve?",
			answer:
				"An AI agent (Artificial Intelligence agent) is a computer system or software entity that can perceive its environment, process information, and take actions to achieve specific goals. AI agents are designed to simulate intelligent behavior and can operate autonomously or with minimal human intervention.",
		},
		{
			question: "Where do you source your ingredients from?",
			answer:
				"We source our ingredients from local farmers and suppliers whenever possible, ensuring the freshest and highest quality produce for our dishes. We also import specific authentic African ingredients to maintain the traditional flavors of our cuisine.",
		},
		{
			question: "Do you offer takeout or delivery services?",
			answer:
				"Yes, we offer both takeout and delivery services. You can place your order through our website or preferred delivery partners. We ensure your food arrives fresh and well-packaged.",
		},
		{
			question: "How can I provide feedback about my experience?",
			answer:
				"We welcome your feedback through multiple channels. You can fill out our feedback form on our website, speak with a manager during your visit, or leave a review on our social media platforms.",
		},
		{
			question: "Is there a dress code at Plate of Africa?",
			answer:
				"We maintain a smart casual dress code. While we want our guests to be comfortable, we ask that they avoid beachwear, sportswear, or overly casual attire.",
		},
	];

	return (
		<div className='min-h-screen bg-[#111111] py-12 md:py-20 px-4 relative'>
			<div className='max-w-[900px] mx-auto'>
				<h1 className='text-white text-3xl md:text-5xl font-bold text-center mb-12'>FREQUENTLY ASKED QUESTIONS</h1>

				<Accordion type='single' collapsible className='space-y-4'>
					{faqData.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`} className='border-0 bg-[#1A1A1A] rounded-lg overflow-hidden'>
							<AccordionTrigger className='px-6 py-4 text-white hover:no-underline hover:bg-[#252525]'>
								<div className='flex items-center justify-between w-full py-2 text-left text-lg md:text-xl font-medium'>{faq.question}</div>
							</AccordionTrigger>
							<AccordionContent className='px-6 pb-4 text-gray-300'>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			{/* Scroll to Top Button */}
			<Button
				onClick={scrollToTop}
				className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#F5E6BE] hover:bg-[#E6D4A7] transition-all duration-300 ${
					showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				variant='ghost'
			>
				<ChevronUp className='w-6 h-6 text-black' />
			</Button>
		</div>
	);
}
