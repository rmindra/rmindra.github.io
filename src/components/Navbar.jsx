import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Shield, Terminal, Code2 } from "lucide-react";

const navItems = [
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
];

export function Navbar({ theme, toggleTheme }) {
	const [activeSection, setActiveSection] = useState("about");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}

			// Determine active section
			const sections = ["about", "skills", "projects"];
			const scrollPosition = window.scrollY + 200;

			for (const section of sections) {
				const el = document.getElementById(section);
				if (el) {
					const top = el.offsetTop;
					const height = el.offsetHeight;
					if (
						scrollPosition >= top &&
						scrollPosition < top + height
					) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-3.5"
					: "bg-transparent py-5"
			}`}
		>
			<div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
				<a
					href="#"
					className="flex items-center gap-2.5 font-mono font-semibold tracking-tight text-foreground hover:text-primary transition-colors group"
				>
					<div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-105 transition-transform shrink-0">
						<Terminal className="w-4 h-4" />
					</div>
					<div className="flex flex-col">
						<span className="text-sm sm:text-base font-bold leading-tight">
							rmindra
						</span>
						<span className="text-[10px] text-muted-foreground font-sans hidden sm:block tracking-normal font-medium">
							Undergraduate IT PENS | Software Engineer | Network
							&amp; Security learner
						</span>
					</div>
				</a>

				<nav className="hidden md:flex items-center gap-1 bg-card/60 dark:bg-card/40 backdrop-blur-md border border-border/80 rounded-full px-3 py-1.5 shadow-sm">
					{navItems.map((item) => {
						const isActive =
							activeSection === item.href.substring(1);
						return (
							<a
								key={item.name}
								href={item.href}
								onClick={() =>
									setActiveSection(item.href.substring(1))
								}
								className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
									isActive
										? "text-foreground font-semibold"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{isActive && (
									<motion.div
										layoutId="activeNav"
										className="absolute inset-0 bg-secondary rounded-full -z-10 border border-border/60"
										transition={{
											type: "spring",
											stiffness: 380,
											damping: 30,
										}}
									/>
								)}
								{item.name}
							</a>
						);
					})}
				</nav>

				<div className="flex items-center gap-3">
					<div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-medium">
						<span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
						<span>Software Engineering × Network & Security</span>
					</div>

					<button
						onClick={toggleTheme}
						aria-label="Toggle Theme"
						className="p-2.5 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all focus:outline-none focus:ring-2 focus:ring-primary/40"
					>
						{theme === "dark" ? (
							<Sun className="w-4 h-4 text-yellow-400 hover:rotate-45 transition-transform duration-300" />
						) : (
							<Moon className="w-4 h-4 text-blue-600 hover:-rotate-12 transition-transform duration-300" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
}
