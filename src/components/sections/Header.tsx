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
				<nav className="flex items-center space-x-6 text-sm text-gray-700">
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
				</nav>
			</div>
		</header>
	);
};

export default Header;
