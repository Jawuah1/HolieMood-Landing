import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ScreenshotsProps } from "../../types/app";
import DeviceToggle from "../ui/DeviceToggle";

export default function Screenshots({ images }: ScreenshotsProps) {
	// Temporarily hardcoded to iphone to hide tablet section
	const [activeDevice, setActiveDevice] = useState<"iphone" | "ipad">("iphone");
	const currentImages = images[activeDevice];

	return (
		<section className="py-12 md:py-24 relative overflow-hidden">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
					<div className="max-w-xl">
						<h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 tracking-tight">
							A beautiful <span className="text-brand-primary">experience</span>
						</h2>
						<p className="text-gray-600 text-lg">
							Designed with care to provide the best user experience.
						</p>
					</div>
					{/* Tablet toggle temporarily hidden */}
					{/* <DeviceToggle activeDevice={activeDevice} onToggle={setActiveDevice} /> */}
				</div>

				<div
					className={`relative ${activeDevice === "iphone" ? "min-h-[400px]" : "min-h-[300px]"}`}
				>
					<AnimatePresence mode="wait">
						<motion.div
							key={activeDevice}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.3 }}
							className="screenshots-container overflow-x-auto pb-12 -mx-6 px-6 scrollbar-hide"
						>
							<div className="flex gap-8 w-max">
								{currentImages.map((image, index) => (
									<motion.button
										key={image}
										initial={{ opacity: 0, y: 20 }}
										animate={{
											opacity: 1,
											y: 0,
											transition: { delay: index * 0.1 },
										}}
										exit={{ opacity: 0, y: 20 }}
										type="button"
										onClick={() => window.openLightbox?.(index, activeDevice)}
										className="relative flex-shrink-0 group focus:outline-none"
									>
										<div className="relative overflow-hidden rounded-[2rem] border-[8px] border-white shadow-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
											<img
												src={image}
												alt={`Screenshot ${index + 1}`}
												className={`object-cover bg-gray-100 ${
													activeDevice === "iphone"
														? "aspect-[9/19.5] w-[280px]"
														: "aspect-[4/3] w-[400px]"
												}`}
												loading="lazy"
											/>
											{/* Shine overlay */}
											<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
										</div>
									</motion.button>
								))}
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}
