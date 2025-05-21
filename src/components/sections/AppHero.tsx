import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { AppHeroProps } from "types/app";
import { useEffect } from "react";

// Add animation styles for the gradient and entrance animations
const styleTag = typeof document !== 'undefined' ? document.createElement('style') : null;
if (styleTag) {
  styleTag.textContent = `
    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient {
      background-size: 200% 200%;
      animation: gradient 8s ease infinite;
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease-out forwards;
    }

    @keyframes slideIn {
      from { transform: translateY(-10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    .animate-slideIn {
      animation: slideIn 0.6s ease-out forwards;
    }
  `;
  document.head.appendChild(styleTag);
}

export default function AppHero({
	title,
	description,
	storeLinks,
	logo,
}: AppHeroProps) {
	return (
		<div className="mb-16 relative overflow-hidden">
			{/* Subtle background pattern with enhanced styling */}
			<div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-80 rounded-2xl -z-10" />
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtNnYtNmg2djZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-25 -z-10" />
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3131] to-[#FF914D] opacity-70" />

			<div className="flex flex-col md:flex-row gap-6 p-6 md:p-10 rounded-2xl">
				<div className="flex flex-1 flex-col justify-between">
					<div className="animate-fadeIn">
						<h1
							className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] font-extrabold mb-6 md:mb-8 bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent hover:scale-[1.02] transition-transform duration-300 animate-gradient animate-slideIn"
							style={{
								textShadow: '0 1px 2px rgba(0,0,0,0.05)',
								letterSpacing: '-0.02em'
							}}
						>
							HolieMood
						</h1>
						<p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 md:mb-8 max-w-2xl font-medium animate-fadeIn" style={{ animationDelay: '0.2s' }}>
							{description}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
						<StoreButton
							store="apple"
							href={storeLinks.apple}
							label="Coming to"
							storeName="App Store Soon"
						/>
						<StoreButton
							store="google"
							href={storeLinks.google}
							label="Coming to"
							storeName="Google Play Soon"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

function StoreButton({
	store,
	href,
	label,
	storeName,
}: {
	store: "apple" | "google";
	href: string;
	label: string;
	storeName: string;
}) {
	const Icon = store === "apple" ? FaApple : FaGooglePlay;

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3.5 transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
		>
			<div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full p-1.5 shadow-inner">
				<Icon
					className={`text-gray-800 transition-transform duration-300 group-hover:scale-110 ${
						store === "apple" ? "w-[22px] h-[22px]" : "w-5 h-5"
					}`}
				/>
			</div>
			<span className="text-left">
				<div className="text-[12px] font-medium text-gray-500 group-hover:text-gray-600 transition-colors">
					{label}
				</div>
				<div className="text-[14px] font-semibold tracking-wide text-gray-700 group-hover:text-gray-900 transition-colors">
					{storeName}
				</div>
			</span>
		</a>
	);
}
