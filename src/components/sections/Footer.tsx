import { appData } from "../../data/appData";
import logoImage from "../../assets/Light-modified-modified.png";

const Footer: React.FC = () => {
	return (
		<footer className="py-12 border-t border-brand-dark/5 bg-transparent">
			<div className="container mx-auto px-6">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Brand & Copyright */}
					<div className="text-center md:text-left">
						<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
							<img
								src={logoImage.src}
								alt="HolieMood Logo"
								className="w-6 h-6 object-contain"
							/>
							<span className="font-bold text-brand-dark">HolieMood</span>
						</div>
						<p className="text-sm text-gray-500">
							&copy; {new Date().getFullYear()} Awuah Labs LLC. All rights reserved.
						</p>
					</div>

					{/* Links */}
					<div className="flex items-center gap-6 text-sm font-medium text-gray-600">
						<a href="/privacy" className="hover:text-brand-primary transition-colors">
							Privacy Policy
						</a>
						<a href="/terms" className="hover:text-brand-primary transition-colors">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
