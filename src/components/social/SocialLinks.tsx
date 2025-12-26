import type { SocialLinksProps } from "types/app";

export default function SocialLinks({ links }: SocialLinksProps) {
	return (
		<div className="py-12">
			<div className="flex justify-center gap-6">
				{links.map((link) => {
					const Icon = link.icon;
					return (
						<a
							key={link.label}
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							className="group p-4 rounded-full bg-white border border-gray-100 shadow-sm hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
							aria-label={link.label}
						>
							<Icon className="h-6 w-6 text-gray-400 transition-colors group-hover:text-brand-primary" />
						</a>
					);
				})}
			</div>
		</div>
	);
}
