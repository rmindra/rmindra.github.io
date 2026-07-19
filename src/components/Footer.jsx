import { useState } from "react";
import { Mail, Copy, Check, Terminal, Shield, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, MediumIcon } from "./icons";

export function Footer() {
	const [copied, setCopied] = useState(false);
	const email = "indraaa.rm@gmail.com";

	const handleCopyEmail = () => {
		navigator.clipboard.writeText(email);
		setCopied(true);
		setTimeout(() => setCopied(false), 2500);
	};

	return (
		<footer className="py-16 border-t border-border/80 bg-card/40 relative">
			<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
				{/* Left Column: Exploring & Status */}
				<div className="md:col-span-7 space-y-4">
					<div className="flex items-center gap-2 font-mono font-bold text-foreground text-lg">
						<Terminal className="w-5 h-5 text-primary" />
						<span>rmindra.my.id</span>
					</div>

					<div className="space-y-2 font-sans text-sm text-muted-foreground max-w-md">
						<p className="text-foreground font-semibold">
							Currently exploring:
						</p>
						<ul className="grid grid-cols-2 gap-2 font-mono text-xs text-foreground/80 pt-1">
							<li className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-primary" />
								<span>Bug Bounty & OWASP</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
								<span>High-Throughput APIs</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
								<span>Detection Engineering</span>
							</li>
							<li className="flex items-center gap-2">
								<span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
								<span>Secure Microservices</span>
							</li>
						</ul>
					</div>

					<p className="text-sm font-sans text-foreground/90 font-medium pt-2">
						Open to collaboration on software engineering and web
						security research.
					</p>
				</div>

				{/* Right Column: Connect & Copy Email */}
				<div className="md:col-span-5 flex flex-col items-start md:items-end space-y-4">
					<span className="text-xs font-mono font-semibold uppercase tracking-wider text-muted-foreground">
						Connect & Collaboration
					</span>

					{/* Copy Email Button with Toast badge */}
					<div className="relative w-full sm:w-auto">
						<button
							onClick={handleCopyEmail}
							className="w-full sm:w-auto flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg bg-secondary border border-border hover:border-primary/50 text-foreground font-mono text-xs sm:text-sm transition-all group"
						>
							<div className="flex items-center gap-2 text-muted-foreground group-hover:text-foreground">
								<Mail className="w-4 h-4 text-primary" />
								<span>{email}</span>
							</div>
							<div className="flex items-center gap-1.5 pl-2 border-l border-border/80 text-xs font-semibold">
								{copied ? (
									<>
										<Check className="w-4 h-4 text-emerald-400" />
										<span className="text-emerald-400">
											Copied!
										</span>
									</>
								) : (
									<>
										<Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
										<span>Copy</span>
									</>
								)}
							</div>
						</button>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-3 pt-2">
						<a
							href="https://www.github.com/rmindra/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							className="p-3 rounded-lg bg-secondary border border-border text-foreground hover:border-primary/60 hover:text-primary transition-colors"
						>
							<GithubIcon className="w-4 h-4" />
						</a>
						<a
							href="https://www.linkedin.com/in/rmindra/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							className="p-3 rounded-lg bg-secondary border border-border text-foreground hover:border-blue-500/60 hover:text-blue-400 transition-colors"
						>
							<LinkedinIcon className="w-4 h-4" />
						</a>
						<a
							href="https://medium.com/@rmindra"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Medium"
							className="p-3 rounded-lg bg-secondary border border-border text-foreground hover:border-emerald-500/60 hover:text-emerald-400 transition-colors"
						>
							<MediumIcon className="w-4 h-4" />
						</a>
						<a
							href="https://www.instagram.com/rm_indraa/"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
							className="p-3 rounded-lg bg-secondary border border-border text-foreground hover:border-pink-500/60 hover:text-pink-400 transition-colors"
						>
							<InstagramIcon className="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
				<div>
					&copy; {new Date().getFullYear()} Made With &#9825; Indra RM
					(<strong className="text-foreground">rmindra.my.id</strong>)
				</div>
				<div className="flex items-center gap-2">
					<span>
						Undergraduate IT PENS | Software Engineer | Network
						&amp; Security learner
					</span>
				</div>
			</div>
		</footer>
	);
}
