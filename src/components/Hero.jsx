import { motion } from "framer-motion";
import {
	ArrowRight,
	Terminal,
	ShieldAlert,
	Cpu,
	Database,
	Globe,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, MediumIcon } from "./icons";

export function Hero() {
	return (
		<section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
			{/* Background ambient glow effect */}
			<div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
			<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

			<div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
				{/* Left column: Text Content */}
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="lg:col-span-7 space-y-6"
				>
					<h1 className="text-4xl sm:text-6xl font-bold font-sans tracking-tight text-foreground leading-tight">
						Hi Everyone 👋, I am{" "}
						<span className="text-primary underline decoration-primary/30 underline-offset-8 block sm:inline">
							Indra Rahmat Maulidi (rmindra)
						</span>
					</h1>

					<div className="space-y-3 font-mono text-lg sm:text-xl font-semibold tracking-wide text-foreground/90">
						<div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-primary">
							<span>Build.</span>
							<span>Break.</span>
							<span>Understand.</span>
							<span>Improve.</span>
						</div>
						<p className="text-sm sm:text-base font-sans font-normal text-muted-foreground max-w-xl leading-relaxed">
							<strong className="text-foreground font-semibold">
								Undergraduate IT PENS | Software Engineer |
								Network &amp; Security learner.
							</strong>{" "}
							Learning web programming is fun and exciting—and the
							best way to master technology is to build scalable
							applications while maintaining a strong cyber
							security mindset.
						</p>
					</div>

					{/* Tier 1: Primary Action Buttons */}
					<div className="pt-6 flex flex-wrap items-center gap-4 sm:gap-5">
						<a
							href="#projects"
							className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-glow-md hover:bg-primary/90 hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-300 group"
						>
							<span>Explore Projects</span>
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
						</a>

						<a
							href="#about"
							className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-card hover:bg-secondary/90 border border-border/80 hover:border-primary/50 text-foreground font-medium text-base hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
						>
							<span>More About Me</span>
						</a>
					</div>

					{/* Tier 2: Spacious Social Profiles Strip */}
					<div className="pt-4 space-y-3">
						<span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground block">
							Connect &amp; Profiles
						</span>
						<div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
							<a
								href="https://github.com/rmindra"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card hover:bg-secondary/90 border border-border/80 hover:border-primary/50 text-foreground font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
							>
								<GithubIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-foreground" />
								<span>GitHub</span>
							</a>

							<a
								href="https://www.linkedin.com/in/rmindra/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card hover:bg-secondary/90 border border-border/80 hover:border-blue-500/50 text-foreground font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
							>
								<LinkedinIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-blue-500" />
								<span>LinkedIn</span>
							</a>

							<a
								href="https://medium.com/@rmindra"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card hover:bg-secondary/90 border border-border/80 hover:border-emerald-500/50 text-foreground font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
							>
								<MediumIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-400" />
								<span>Medium</span>
							</a>

							<a
								href="https://www.instagram.com/rm_indraa/"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-card hover:bg-secondary/90 border border-border/80 hover:border-pink-500/50 text-foreground font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
							>
								<InstagramIcon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-pink-500" />
								<span>Instagram</span>
							</a>
						</div>
					</div>
				</motion.div>

				{/* Right column: Sleek Interactive System HUD (Clean, Calm, Modern) */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.7, delay: 0.2 }}
					className="lg:col-span-5 relative w-full"
				>
					<div className="rounded-2xl border border-border/80 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden">
						{/* macOS Window Header */}
						<div className="px-5 py-3.5 bg-secondary/80 border-b border-border/80 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-3 h-3 rounded-full bg-red-500/80" />
								<div className="w-3 h-3 rounded-full bg-amber-500/80" />
								<div className="w-3 h-3 rounded-full bg-emerald-500/80" />
							</div>
							<div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
								<Terminal className="w-3.5 h-3.5 text-primary" />
								<span>rmindra@pens-core:~</span>
							</div>
							<div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] font-semibold">
								<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
								<span>ONLINE</span>
							</div>
						</div>

						{/* Terminal Body */}
						<div className="p-6 sm:p-7 space-y-6 font-mono text-sm leading-relaxed">
							{/* Command 1: whoami */}
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-muted-foreground font-semibold">
									<span className="text-primary">$</span>
									<span>whoami --profile</span>
								</div>
								<div className="pl-4 border-l-2 border-primary/40 text-foreground space-y-1">
									<p className="font-bold font-sans text-base">
										Indra Rahmat Maulidi
									</p>
									<p className="text-xs text-muted-foreground font-mono">
										&gt; Undergraduate IT Student @ PENS
										Surabaya
									</p>
								</div>
							</div>

							{/* Command 2: focus areas */}
							<div className="space-y-2">
								<div className="flex items-center gap-2 text-muted-foreground font-semibold">
									<span className="text-primary">$</span>
									<span>cat focus-stack.json</span>
								</div>
								<div className="bg-secondary/60 rounded-xl p-4 border border-border/60 text-xs space-y-2.5 font-mono">
									<div className="flex items-center justify-between text-foreground">
										<span className="text-primary font-bold">
											01. Software Engineering
										</span>
										<span className="text-muted-foreground">
											Flutter / React / .NET
										</span>
									</div>
									<div className="flex items-center justify-between text-foreground">
										<span className="text-blue-400 font-bold">
											02. Network &amp; FTTH
										</span>
										<span className="text-muted-foreground">
											Biznet / Backbone Infra
										</span>
									</div>
									<div className="flex items-center justify-between text-foreground">
										<span className="text-emerald-400 font-bold">
											03. Cyber Security
										</span>
										<span className="text-muted-foreground">
											Bootcamp Graduate @IDN
										</span>
									</div>
								</div>
							</div>

							{/* Command 3: quick status */}
							<div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs text-muted-foreground">
								<span>
									System Status:{" "}
									<strong className="text-foreground">
										Secure &amp; Scalable
									</strong>
								</span>
								<span className="text-primary flex items-center gap-1">
									<span>Ready to build</span>
									<span className="inline-block w-1.5 h-3 bg-primary animate-pulse ml-0.5" />
								</span>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
