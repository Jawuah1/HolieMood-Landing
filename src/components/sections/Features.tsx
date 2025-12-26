import type { FeaturesProps } from "types/app";

export default function Features({ features }: FeaturesProps) {
	return (
		<section className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16 max-w-2xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-black text-brand-dark mb-4 tracking-tight">
						Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-secondary">HolieMood?</span>
					</h2>
					<p className="text-gray-600 text-lg">
						Discover the features that make HolieMood the perfect companion for your spiritual journey.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => {
						const Icon = feature.icon;
						return (
							<div
								key={feature.title}
								className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-premium transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
							>
								{/* Hover Gradient Background */}
								<div className="absolute inset-0 bg-gradient-to-br from-brand-light to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

								<div className="relative z-10">
									<div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-light group-hover:bg-white transition-colors duration-300 shadow-sm group-hover:shadow-md">
										<Icon className="h-8 w-8 text-brand-primary group-hover:scale-110 transition-transform duration-300" />
									</div>

									<h3 className="text-xl font-bold text-brand-dark mb-3 tracking-tight">
										{feature.title}
									</h3>

									<p className="text-gray-600 leading-relaxed font-medium">
										{feature.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
