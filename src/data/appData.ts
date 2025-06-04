import { FiCpu, FiBook, FiZap ,FiHeart } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTiktokFill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "HolieMood",
	description:"Discover Bible verses tailored to your emotions and life situations. Find divine guidance and comfort for every moment, whether you're feeling joyful, anxious, or seeking direction",
	logo: {
		type: "image",
		src: "/gradientText.png",
	},
	screenshots: {
		iphone: [
			"screenshots/iphone/home.png",
			"screenshots/iphone/emotion.png",
			"screenshots/iphone/guide.png",
			"screenshots/iphone/bibleai.png",
			"screenshots/iphone/journey.png",
			"screenshots/iphone/fav.png",
			// ...more Iphone screenshotsa
		],
		ipad: [
			"screenshots/ipad/ipad11home.png",
			"screenshots/ipad/GuidanceIpad.png",
			"screenshots/ipad/JourneyIpad.png",
			"screenshots/ipad/FavIpad.png",
			"screenshots/ipad/AiIpad.png"
			// ...more iPad screenshots
		],
	},
	features: [
		{
			title: "Emotional Scripture Matching",
      description: "Get personalized Bible verses that match your current emotional state, helping you find spiritual comfort and guidance when you need it most.",
      icon: FiHeart,
		},
		{
			title: "AI-Powered Biblical Insights",
      description: "Engage with an AI companion that provides deeper understanding of scriptures, answers faith-based questions, and offers spiritual guidance.",
      icon: FiCpu,
		},
		{
			title: "Personal Study Tools",
      description: "Save your favorite verses, track your emotional journey, and access study notes to deepen your understanding of scripture.",
      icon: FiBook,
		},
	],
	faqs: [
		{
			question: "Which Bible translations does HolieMood use?",
			answer: "HolieMood offers three translations: King James Version (KJV), World English Bible (WEB), and American Standard Version (ASV). These translations are carefully chosen as they are in the public domain while maintaining accuracy and readability. You can easily switch between translations based on your preference.",
		},
		{
			question: "How can I suggest new features or improvements for HolieMood?",
            answer: "I value your input! You can submit your feature requests and suggestions through my dedicated feedback portal. I regularly review all feedback to make HolieMood better for the community.",
            link: {
							url: "https://insigh.to/b/holiemood-feature-request",
							text: "Submit feature request"
					}
		},
		{
			question: "Is HolieMood free to use?",
			answer: "The core features of HolieMood are completely free! This includes emotional scripture matching, verse saving, and mood tracking. For the AI-powered biblical insights feature, you get 5 free messages per day to help manage costs while still providing value. I believe in making spiritual guidance accessible while maintaining a sustainable service.",
		},
	],
	storeLinks: {
		apple: "#", // Replace with your App Store link
		google: "#", // Replace with your Google Play link
	},
	socialLinks: [
		{
			url: "https://www.instagram.com/holiemood?igsh=Yzd1NnF4ZGh0aWd1&utm_source=qr",
			icon: RiInstagramFill,
			label: "Instagram",
		},
		{
			url: "https://www.tiktok.com/@holiemood",
			icon: RiTiktokFill,
			label: "TikTok",
		},
		{
			url: "https://x.com/awuah_jesse",
			icon: RiTwitterXFill,
			label: "Twitter",
		},
	],
};
