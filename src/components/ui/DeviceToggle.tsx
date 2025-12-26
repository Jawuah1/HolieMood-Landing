import { motion } from "framer-motion";

interface DeviceToggleProps {
	activeDevice: "iphone" | "ipad";
	onToggle: (device: "iphone" | "ipad") => void;
}

export default function DeviceToggle({
	activeDevice,
	onToggle,
}: DeviceToggleProps) {
	return (
		<div className="flex items-center justify-center gap-1 p-1 rounded-xl bg-gray-100 border border-gray-200">
			{(["iphone", "ipad"] as const).map((device) => (
				<motion.button
					key={device}
					type="button"
					onClick={() => onToggle(device)}
					className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors z-10 ${
						activeDevice === device
							? "text-brand-dark"
							: "text-gray-500 hover:text-gray-700"
					}`}
					whileTap={{ scale: 0.95 }}
				>
					{activeDevice === device && (
						<motion.div
							layoutId="activeDevice"
							className="absolute inset-0 rounded-lg bg-white shadow-sm border border-gray-200"
							transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
							style={{ zIndex: -1 }}
						/>
					)}
					<span className="relative z-10 capitalize">{device === "iphone" ? "Phone" : "Tablet"}</span>
				</motion.button>
			))}
		</div>
	);
}
