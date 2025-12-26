import { FiCpu, FiBook, FiZap ,FiHeart, FiWind, FiHeadphones } from "react-icons/fi";
import type { AppData } from "../types/app";
import {
	RiInstagramFill,
	RiTiktokFill,
	RiTwitterXFill,
} from "react-icons/ri";

export const appData: AppData = {
	title: "HolieMood",
	description:"Discover Bible verses tailored to your emotions and life situations. Find divine guidance and comfort for every moment. Version 2.0 coming soon with Guided Breathwork and Audio Scriptures.",
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
			title: "Guided Breathwork",
      description: "Calm your mind and spirit with our new guided breathwork sessions, designed to help you center yourself and connect with God.",
      icon: FiWind,
		},
		{
			title: "Immersive Audio Bible",
      description: "Listen to the Word with enhanced audio quality. Now featuring the Berean Standard Bible (BSB) with full audio support for a deeper experience.",
      icon: FiHeadphones,
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
			answer: "HolieMood now features the Berean Standard Bible (BSB) with full audio support! We also offer King James Version (KJV), World English Bible (WEB), and American Standard Version (ASV). You can easily switch between translations based on your preference.",
		},
		{
			question: "What is included in Version 2.0?",
            answer: "Version 2.0 introduces Guided Breathwork to help you meditate and relax, enhanced audio quality for all verses, and the addition of the Berean Standard Bible (BSB) with complete audio support.",
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
			answer: "The core features of HolieMood are completely free! This includes emotional scripture matching, verse saving, mood tracking, and the new breathwork tools. For the AI-powered biblical insights feature, you get a limited number of free messages per day.",
		},
	],
	storeLinks: {
		apple: "https://apps.apple.com/us/app/holiemood/id6744375696",
		google: "https://play.google.com/store/apps/details?id=com.jesseawuah.readmeapp",
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
