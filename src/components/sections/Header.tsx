import { appData } from "../../data/appData";
import { useEffect, useState } from "react";
import logoImage from "../../assets/Light-modified-modified.png";

const Header: React.FC = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-white/80 backdrop-blur-lg border-b border-gray-100 py-3"
					: "bg-transparent py-6"
			}`}
		>
			<div className="container mx-auto px-6 flex items-center justify-between">
				{/* Logo/Brand */}
				<a href="/" className="flex items-center gap-2 group">
					<img
						src={logoImage.src}
						alt="HolieMood Logo"
						className="w-8 h-8 object-contain drop-shadow-md group-hover:drop-shadow-glow transition-all duration-300"
					/>
					<span className="text-xl font-bold text-brand-dark tracking-tight">
						HolieMood
					</span>
				</a>

				{/* Navigation Links */}
				<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
					<a
						href="/privacy"
						className="hover:text-brand-primary transition-colors"
					>
						Privacy
					</a>
					<a
						href="/terms"
						className="hover:text-brand-primary transition-colors"
					>
						Terms
					</a>
					<div className="h-4 w-px bg-gray-200"></div>
					<a
						href="/delete-data"
						className="text-gray-500 hover:text-brand-dark transition-colors"
					>
						Data
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
