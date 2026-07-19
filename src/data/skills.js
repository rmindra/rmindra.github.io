import {
	Code2,
	Network,
	Cloud,
	ShieldAlert,
	Globe,
	FileCode,
	Smartphone,
	Cpu,
	Server,
	Layers,
	Wifi,
	Radio,
	ShieldCheck,
	Activity,
	HardDrive,
	Terminal,
	GitBranch,
	Lock,
	Bug,
} from "lucide-react";

export const skillCategories = [
	{
		title: "Software Engineering",
		icon: Code2,
		colorClass: "text-primary bg-primary/10 border-primary/30",
		skills: [
			{ name: "React / Next.js", level: "Beginner", icon: Globe },
			{
				name: "TypeScript & JavaScript ES6+",
				level: "Beginner",
				icon: FileCode,
			},
			{ name: "Flutter & Dart", level: "Beginner", icon: Smartphone },
			{ name: ".NET Core / C#", level: "Beginner", icon: Cpu },
			{ name: "PHP & REST APIs", level: "Beginner", icon: Server },
			{ name: "Node.js / Express", level: "Beginner", icon: Terminal },
			{
				name: "Tailwind CSS & Bootstrap",
				level: "Beginner",
				icon: Layers,
			},
		],
	},
	{
		title: "Network Engineering & Fiber Optics",
		icon: Network,
		colorClass: "text-blue-400 bg-blue-500/10 border-blue-500/30",
		skills: [
			{
				name: "FTTH Installation & Troubleshooting",
				level: "Beginner",
				icon: Wifi,
			},
			{
				name: "Network Backbone Operations",
				level: "Beginner",
				icon: Server,
			},
			{
				name: "Wireless Networking & Routing",
				level: "Beginner",
				icon: Radio,
			},
			{
				name: "TCP/IP & Subnet Architecture",
				level: "Beginner",
				icon: Network,
			},
			{
				name: "Nginx & Reverse Proxy Configuration",
				level: "Beginner",
				icon: ShieldCheck,
			},
			{
				name: "Network Diagnostics & Packet Analysis",
				level: "Beginner",
				icon: Activity,
			},
		],
	},
	{
		title: "Cloud Infrastructure & DevOps",
		icon: Cloud,
		colorClass: "text-purple-400 bg-purple-500/10 border-purple-500/30",
		skills: [
			{
				name: "AWS Cloud Foundations & IAM",
				level: "Beginner",
				icon: Cloud,
			},
			{
				name: "AWS High Availability Web Architecture",
				level: "Beginner",
				icon: Layers,
			},
			{
				name: "Docker & Container Orchestration",
				level: "Beginner",
				icon: HardDrive,
			},
			{
				name: "Linux Administration & Bash Scripting",
				level: "Beginner",
				icon: Terminal,
			},
			{
				name: "Git & GitHub Actions CI/CD Pipelines",
				level: "Beginner",
				icon: GitBranch,
			},
		],
	},
	{
		title: "Offensive Security & Pentesting",
		icon: ShieldAlert,
		colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
		skills: [
			{
				name: "Red Team Ops (Bootcamp IDF Top 5 Graduate)",
				level: "Beginner",
				icon: ShieldAlert,
			},
			{
				name: "OWASP Top 10 & Web Exploitation",
				level: "Beginner",
				icon: Lock,
			},
			{
				name: "Burp Suite & HTTP Request Probing",
				level: "Beginner",
				icon: Bug,
			},
		],
	},
];
