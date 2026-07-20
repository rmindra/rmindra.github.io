import { motion } from "framer-motion";
import {
	Terminal,
	ShieldCheck,
	Code,
	Network,
	Trophy,
	Cloud,
	BookOpen,
} from "lucide-react";

export function About() {
	const pillars = [
		{
			title: "Informatics Engineering @ PENS (EEPIS)",
			desc: "Undergraduate student majoring in Informatics Engineering at Politeknik Elektronika Negeri Surabaya (2024-2028), active in Project-Based Learning (@pens-pbl) and Staff Finance at SRE PENS.",
			icon: Code,
		},
		{
			title: "Network Engineering & FTTH @ Biznet",
			desc: "Network Engineer intern experience at PT. Supra Primatama Nusantara (Biznet), specializing in Fiber to the Home (FTTH) installation, troubleshooting, and Network Operation Backbone monitoring.",
			icon: Network,
		},
		{
			title: "Graduated from Cyber Security Bootcamp by IDN",
			desc: "Graduated from the 12-week intensive Cyber Security Bootcamp by ID-Networkers, mastering SOC labs, Linux hardening, and penetration testing.",
			icon: Trophy,
		},
		{
			title: "Cloud Architecture & Medium Author",
			desc: "Certified in AWS Academy Cloud Foundations & Dicoding Cloud Practitioner Essentials. Active technical writer on Medium (@rmindra) sharing deep dives on networking, coding, and cybersecurity.",
			icon: Cloud,
		},
	];

	return (
		<section
			id="about"
			className="py-24 border-t border-border/60 relative"
		>
			<div className="max-w-[1400px] mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="w-full"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-4">
						<Terminal className="w-3.5 h-3.5 text-primary" />
						<span>01 // ABOUT ME</span>
					</div>

					<h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground mb-6">
						<span className="text-primary">
							Undergraduate IT PENS
						</span>{" "}
						| Software Engineer | Network &amp; Security learner
					</h2>

					<div className="space-y-4 font-sans text-base sm:text-lg text-muted-foreground leading-relaxed">
						<p>
							I am an{" "}
							<strong className="text-foreground font-semibold">
								Undergraduate IT PENS student (rmindra)
							</strong>{" "}
							and Staff Finance at SRE PENS. I have a strong
							passion and practical industry experience across{" "}
							<strong className="text-foreground font-semibold">
								Software Engineering, Network Architecture, and
								Cyber Security
							</strong>
							.
						</p>
						<p>
							My professional journey combines hands-on network
							operations—such as FTTH troubleshooting and backbone
							diagnostics at{" "}
							<strong className="text-foreground font-semibold">
								Biznet
							</strong>
							—with offensive security mastery as a{" "}
							<span className="text-primary font-semibold">
								Graduated
							</span>{" "}
							from the{" "}
							<strong className="text-foreground font-semibold">
								ID-Networkers Cyber Security Bootcamp
							</strong>
							. I also hold verified badges in{" "}
							<strong className="text-foreground font-semibold">
								AWS Cloud Foundations
							</strong>{" "}
							and publish technical articles on Medium (@rmindra)
							and my domain at{" "}
							<strong className="text-foreground font-semibold">
								rmindra.github.io
							</strong>
							.
						</p>
						<p className="font-mono text-sm text-foreground/90 bg-card border border-border rounded-lg p-4 shadow-sm">
							&gt;{" "}
							<span className="text-primary font-bold">
								Focus Area:
							</span>{" "}
							Software Engineering | Network &amp; Security
							learner
						</p>
					</div>
				</motion.div>

				{/* Core Pillars Grid */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					{pillars.map((item) => {
						const IconComponent = item.icon;
						return (
							<div
								key={item.title}
								className="p-6 rounded-xl bg-card/60 dark:bg-card/40 border border-border/80 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 hover:shadow-glow-sm flex flex-col justify-between"
							>
								<div className="flex items-start gap-4">
									<div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
										<IconComponent className="w-5 h-5" />
									</div>
									<div>
										<h3 className="font-sans font-semibold text-foreground text-lg mb-1.5 group-hover:text-primary transition-colors">
											{item.title}
										</h3>
										<p className="font-sans text-sm text-muted-foreground leading-relaxed">
											{item.desc}
										</p>
									</div>
								</div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
}
