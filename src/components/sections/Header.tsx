import { appData } from "../../data/appData";

const Header: React.FC = () => {
	return (
		<header className="py-4 px-6 md:px-8 border-b border-white/5">
			<div className="flex items-center justify-between">
				{/* Logo/Brand */}
				<div className="flex items-center space-x-2">

						<span className="text-xl font-bold bg-gradient-to-r from-[#FF3131] via-[#FF914D] to-[#FF3131] bg-clip-text text-transparent">

						</span>

				</div>

				{/* Navigation Links */}
				<nav className="flex items-center space-x-4 md:space-x-6 text-sm text-gray-700">
					<a 
						href="/privacy" 
						className="transition-colors hover:text-black hover:underline underline-offset-4"
					>
						Privacy Policy
					</a>
					<a 
						href="/terms" 
						className="transition-colors hover:text-black hover:underline underline-offset-4"
					>
						Terms of Service
					</a>
					<a 
						href="/delete-data" 
						className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
					>
						Delete Data
					</a>
					<a 
						href="/delete-account" 
						className="text-red-600 hover:text-red-700 transition-colors font-medium"
					>
						Delete Account
					</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
