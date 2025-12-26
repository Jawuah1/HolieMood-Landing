import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { AppHeroProps } from "../../types/app";
import logoImage from "../../assets/Light-modified-modified.png";

export default function AppHero({
	title,
	description,
	storeLinks,
	logo,
}: AppHeroProps) {
	return (
		<section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
			{/* Ambient Background Glow */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full pointer-events-none">
				<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }} />
				<div className="absolute top-40 left-1/3 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[80px] mix-blend-multiply animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
			</div>

			<div className="container mx-auto px-6 relative z-10 text-center">
				{/* Brand Logo */}
				<div className="mb-8 flex justify-center animate-fadeIn">
					<div className="relative">
						<div className="absolute inset-0 bg-brand-primary/20 blur-3xl rounded-full" />
						<img
							src={logoImage.src}
							alt="HolieMood Logo"
							className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-xl animate-[float_6s_ease-in-out_infinite]"
						/>
					</div>
				</div>

				{/* Badge/Pill */}
				<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm mb-8 animate-fadeIn hover:scale-105 transition-transform duration-300 cursor-default">
					<span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse"></span>
					<span className="text-sm font-semibold text-gray-600 tracking-wide uppercase">Version 2.0 Coming Soon</span>
				</div>

				{/* Main Title */}
				<h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-dark via-brand-primary to-brand-secondary">
						{title}
					</span>
				</h1>

				{/* Description */}
				<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
					{description}
				</p>

				{/* Store Buttons */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideIn">
					<StoreButton
						store="apple"
						href={storeLinks?.apple || "https://apps.apple.com/us/app/holiemood/id6744375696"}
						label="Download on the"
						storeName="App Store"
					/>
					<StoreButton
						store="google"
						href={storeLinks?.google || "https://play.google.com/store/apps/details?id=com.jesseawuah.readmeapp"}
						label="Get it on"
						storeName="Google Play"
					/>
				</div>
			</div>
		</section>
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
			className="group flex items-center gap-3 bg-brand-dark text-white px-6 py-3.5 rounded-xl hover:bg-black transition-all duration-300 hover:scale-105 hover:shadow-glow min-w-[200px] relative overflow-hidden"
		>
			{/* Shine effect */}
			<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

			<Icon className="text-3xl" />
			<div className="flex flex-col items-start text-left">
				<span className="text-[10px] uppercase font-bold tracking-wider opacity-80 leading-none mb-1">{label}</span>
				<span className="text-lg font-bold leading-none tracking-tight">{storeName}</span>
			</div>
		</a>
	);
}
