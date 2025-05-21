import type { FAQProps } from "types/app";

export default function FAQ({ items }: FAQProps) {
	return (
		<div className="mb-16">
			<h2 className="mb-8 text-3xl font-bold text-center bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent">FAQ</h2>
			<div className="space-y-4 max-w-3xl mx-auto">
				{items.map((item) => (
					<div
						key={item.question}
						className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg"
					>
						<details className="group">
							<summary className="flex cursor-pointer items-center justify-between p-6 hover:bg-gray-50">
								<h3 className="pr-6 font-semibold text-gray-800">{item.question}</h3>
								<svg
									className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180 text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-label="Toggle answer"
								>
									<title>Toggle answer</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19 9l-7 7-7-7"
									/>
								</svg>
							</summary>
							<div className="px-6 pb-6">
								<div className="border-t border-gray-100 pt-6">
									<p className="text-gray-600 leading-relaxed">{item.answer}</p>
									{item.link && (
										<a
											href={item.link.url}
											target="_blank"
											rel="noopener noreferrer"
											className="mt-3 inline-block font-medium bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
										>
											{item.link.text}
										</a>
									)}
								</div>
							</div>
						</details>
					</div>
				))}
			</div>
		</div>
	);
}
