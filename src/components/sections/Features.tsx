import type { FeaturesProps } from "types/app";

export default function Features({ features }: FeaturesProps) {
	return (
		<div className="mb-16">
			<h2 className="mb-8 text-3xl font-bold text-center bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent">Features</h2>

			<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
				{features.map((feature) => {
					const Icon = feature.icon;
					return (
						<div
							key={feature.title}
							className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
						>
							<div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[#FF3131] to-[#FF914D]">
								<Icon className="h-7 w-7 text-white" />
							</div>
							<h3 className="mb-3 text-xl font-semibold text-gray-800">{feature.title}</h3>
							<p className="text-base leading-relaxed text-gray-600">
								{feature.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
