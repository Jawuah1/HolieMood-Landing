import { useState, useEffect, useCallback } from "react";
import { FiChevronUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = useCallback(() => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, [toggleVisibility]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.button
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.8 }}
					transition={{ duration: 0.2 }}
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg shadow-brand-dark/20 transition-all hover:bg-brand-primary hover:-translate-y-1 hover:shadow-glow"
					aria-label="Back to top"
				>
					<FiChevronUp size={24} />
				</motion.button>
			)}
		</AnimatePresence>
	);
}
