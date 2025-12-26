import type { FAQProps } from "types/app";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ items }: FAQProps) {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6 max-w-4xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 tracking-tight">
						Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">Questions</span>
					</h2>
					<p className="text-gray-600 text-lg">
						Everything you need to know about HolieMood.
					</p>
				</div>

				<div className="space-y-4">
					{items.map((item, index) => (
						<FAQItem key={index} item={item} />
					))}
				</div>
			</div>
		</section>
	);
}

function FAQItem({ item }: { item: { question: string; answer: string; link?: { url: string; text: string } } }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-gray-200 rounded-2xl bg-white overflow-hidden hover:border-brand-primary/20 transition-colors duration-300">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center justify-between w-full p-6 text-left"
			>
				<span className="text-lg font-bold text-brand-dark pr-8">{item.question}</span>
				<span className={`flex-shrink-0 w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-45 bg-brand-primary/10 text-brand-primary" : "text-gray-400"}`}>
					<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</span>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<div className="px-6 pb-6 text-gray-600 leading-relaxed">
							<p>{item.answer}</p>
							{item.link && (
								<a
									href={item.link.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1 mt-3 font-semibold text-brand-primary hover:text-brand-secondary transition-colors"
								>
									{item.link.text}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
										<path d="M5 12h14M12 5l7 7-7 7"/>
									</svg>
								</a>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
