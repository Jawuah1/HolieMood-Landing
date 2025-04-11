import { FaApple, FaGooglePlay } from "react-icons/fa";
import type { AppHeroProps } from "types/app";

export default function AppHero({
	title,
	description,
	storeLinks,
	logo,
}: AppHeroProps) {
	return (
		<div className="mb-16 flex flex-col md:flex-row gap-8">
			<div className="flex-shrink-0 md:self-center">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 w-[200px] h-[192px] flex items-center justify-center">
            <img
                src={logo.src}
                alt="App Logo"
                className="h-40 w-40 rounded-2xl shadow-lg object-cover"
            />
        </div>
    </div>

			<div className="flex flex-1 flex-col justify-between">
				<div>
					<h1 className="text-4xl font-bold text-black mb-3">{title}</h1>
					<p className="text-lg text-black leading-relaxed mb-6 max-w-2xl">
						{description}
					</p>
				</div>

				<div className="flex flex-wrap gap-4">
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
			className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-3 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 shadow-sm shadow-black/5"
		>
			<div className="flex items-center justify-center w-7 h-7">
				<Icon
					className={`text-black transition-transform duration-300 group-hover:scale-110 group-hover:text-black ${
						store === "apple" ? "w-[22px] h-[22px]" : "w-5 h-5"
					}`}
				/>
			</div>
			<span className="text-left">
				<div className="text-[11px] font-medium text-gray-400 group-hover:text-gray-300 transition-colors">
					{label}
				</div>
				<div className="text-[13px] font-semibold tracking-wide text-gray-400 group-hover:text-black transition-colors">
					{storeName}
				</div>
			</span>
		</a>
	);
}
