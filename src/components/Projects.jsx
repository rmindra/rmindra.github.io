import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, projectCategories } from "../data/projects";
import {
	ArrowUpRight,
	Terminal,
	Layers,
	ShieldCheck,
	Code,
	Smartphone,
	Server,
} from "lucide-react";

export function Projects({ onSelectProject }) {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredProjects =
		activeCategory === "All"
			? projects
			: projects.filter(
					(p) =>
						p.category === activeCategory ||
						(activeCategory === "Security" &&
							(p.category === "Security" ||
								p.category === "Security & Labs")),
			  );

	// Dynamic Template for Empty / Initializing Category Filter Tabs
	const renderEmptyState = (category) => {
		let Icon = Terminal;
		let colorClass = "text-primary bg-primary/10 border-primary/30";
		let title = `${category} Projects Coming Soon`;
		let desc = `New projects in the ${category} domain are currently under active development and will be published here shortly.`;
		let note = `Staging ${category.toLowerCase()} architecture & deployment pipelines...`;

		if (category === "Security") {
			Icon = ShieldCheck;
			colorClass =
				"text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
			title = "Security & CTF Labs Initializing...";
			desc = "I am currently setting up dedicated offensive security lab environments, vulnerability research notes, and Red Team exploitation writeups. Check back very soon!";
			note = "Exploitation environments & Red Team writeups staging...";
		} else if (category === "Mobile") {
			Icon = Smartphone;
			colorClass = "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";
			title = "Mobile App Showcase Initializing...";
			desc = "Cross-platform mobile applications, Flutter modules, and handheld inventory clients are currently being prepared for release.";
			note = "Staging Flutter builds & APK verification pipelines...";
		} else if (category === "Frontend") {
			Icon = Code;
			colorClass = "text-blue-400 bg-blue-500/10 border-blue-500/30";
			title = "Frontend UI/UX Showcases Coming Soon";
			desc = "Modern web interfaces, responsive single-page applications, and interactive design systems will be featured right here.";
			note = "Compiling React/Next.js client bundles & UI tokens...";
		} else if (category === "Backend") {
			Icon = Server;
			colorClass = "text-purple-400 bg-purple-500/10 border-purple-500/30";
			title = "Backend Microservices & APIs Staging...";
			desc = "High-performance backend services, RESTful APIs, and database architecture blueprints are currently in active preparation.";
			note = "Verifying database schemas, JWT auth & API endpoints...";
		} else if (category === "Infra") {
			Icon = Layers;
			colorClass = "text-amber-400 bg-amber-500/10 border-amber-500/30";
			title = "Cloud Infra & DevOps Pipelines Initializing...";
			desc = "AWS cloud deployments, Docker container orchestrations, and high-availability Linux infrastructure labs are being staged.";
			note = "Provisioning multi-AZ cloud topology & Nginx reverse proxy...";
		}

		return (
			<div className="col-span-full rounded-2xl border border-dashed border-border/80 bg-card/40 backdrop-blur-sm p-10 sm:p-14 text-center flex flex-col items-center justify-center max-w-3xl mx-auto my-4 shadow-lg">
				<div
					className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 shadow-glow-sm border ${colorClass}`}
				>
					<Icon className="w-8 h-8 animate-pulse" />
				</div>
				<h3 className="text-2xl sm:text-3xl font-bold font-sans text-foreground mb-3">
					{title}
				</h3>
				<p className="font-sans text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-8">
					{desc}
				</p>

				{/* Terminal status preview box */}
				<div className="w-full max-w-lg bg-secondary/80 border border-border/80 rounded-xl p-4 text-left font-mono text-xs sm:text-sm text-muted-foreground space-y-2 shadow-inner">
					<div className="flex items-center gap-2 pb-2 border-b border-border/50 text-foreground/80">
						<span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
						<span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
						<span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
						<span className="text-[11px] ml-1">
							pipeline-status.sh
						</span>
					</div>
					<div className="text-emerald-400 flex items-center gap-2">
						<span className="text-primary">$</span>
						<span>
							check_pipeline --domain {category.toLowerCase()}
						</span>
					</div>
					<p className="text-foreground/90 pl-4">
						&gt; STATUS: [PENDING_INITIALIZATION]
					</p>
					<p className="text-muted-foreground pl-4">&gt; NOTE: {note}</p>
				</div>
			</div>
		);
	};

	return (
		<section
			id="projects"
			className="py-24 border-t border-border/60 relative"
		>
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="max-w-2xl"
					>
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-4">
							<Terminal className="w-3.5 h-3.5 text-primary" />
							<span>03 // FEATURED WORK &amp; LABS</span>
						</div>

						<h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground">
							Featured Engineering Projects
						</h2>
						<p className="text-muted-foreground font-sans mt-2 text-base sm:text-lg">
							Practical software systems, distributed
							architecture, and offensive security laboratories
							engineered from scratch.
						</p>
					</motion.div>

					{/* Category Filter Tabs */}
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="flex flex-wrap items-center gap-1.5 bg-secondary/80 p-1.5 rounded-xl border border-border/80 self-start sm:self-auto"
					>
						{projectCategories.map((cat) => {
							const isActive = activeCategory === cat;
							return (
								<button
									key={cat}
									onClick={() => setActiveCategory(cat)}
									className={`relative px-4 py-2 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
										isActive
											? "text-foreground font-semibold shadow-sm"
											: "text-muted-foreground hover:text-foreground"
									}`}
								>
									{isActive && (
										<motion.div
											layoutId="projectCategoryTab"
											className="absolute inset-0 bg-card rounded-lg -z-10 border border-border/80 shadow-sm"
											transition={{
												type: "spring",
												stiffness: 400,
												damping: 30,
											}}
										/>
									)}
									{cat}
								</button>
							);
						})}
					</motion.div>
				</div>

				{/* Projects Cards Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={activeCategory}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.35 }}
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
					>
						{filteredProjects.length === 0
							? renderEmptyState(activeCategory)
							: filteredProjects.map((project, index) => (
									<motion.div
										key={project.id}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.4,
											delay: index * 0.1,
										}}
										onClick={() => onSelectProject(project)}
										className="group cursor-pointer rounded-2xl bg-card border border-border overflow-hidden hover:-translate-y-1.5 hover:shadow-glow-md hover:border-primary/60 transition-all duration-300 flex flex-col justify-between"
									>
										<div>
											{/* Card Image Preview */}
											<div className="relative w-full aspect-video bg-secondary/80 overflow-hidden border-b border-border/80 flex items-center justify-center">
												{project.images &&
												project.images[0] ? (
													<>
														{/* Ambient Blurred Background for non-16:9 / tall / wide screenshots */}
														<img
															src={
																project
																	.images[0]
															}
															alt=""
															className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none"
															onError={(e) => {
																e.target.style.display =
																	"none";
															}}
														/>
														{/* Main Foreground Screenshot - object-contain ensures 100% visibility without cropping */}
														<img
															src={
																project
																	.images[0]
															}
															alt={project.title}
															className="relative max-w-full max-h-full w-auto h-auto object-contain group-hover:scale-105 transition-transform duration-500 z-10"
															onError={(e) => {
																e.target.onerror =
																	null;
																e.target.src =
																	"/projects/invento-1.svg";
															}}
														/>
													</>
												) : (
													<div className="w-full h-full flex items-center justify-center text-muted-foreground font-mono text-xs">
														No Preview Available
													</div>
												)}
												<div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-white shadow-sm">
													{project.category}
												</div>
											</div>

											{/* Card Content */}
											<div className="p-6 sm:p-7 space-y-4">
												<div className="flex items-start justify-between gap-4">
													<h3 className="text-xl sm:text-2xl font-bold font-sans text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
														<span>
															{project.title}
														</span>
														<ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
													</h3>
												</div>

												<p className="font-sans text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
													{project.short}
												</p>

												{/* Tech Stack Pills */}
												<div className="flex flex-wrap gap-1.5 pt-2">
													{project.technologies
														?.slice(0, 4)
														.map((tech) => (
															<span
																key={tech}
																className="px-2.5 py-1 rounded bg-secondary/80 border border-border/60 font-mono text-[11px] text-foreground/80"
															>
																{tech}
															</span>
														))}
													{project.technologies
														?.length > 4 && (
														<span className="px-2 py-1 rounded bg-secondary/40 font-mono text-[11px] text-muted-foreground">
															+
															{project
																.technologies
																.length -
																4}{" "}
															more
														</span>
													)}
												</div>
											</div>
										</div>

										{/* Card Footer */}
										<div className="px-6 sm:px-7 py-4 bg-secondary/30 border-t border-border/60 flex items-center justify-between font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
											<span>
												Architecture &amp; Topology
											</span>
											<span className="text-primary font-semibold flex items-center gap-1 group-hover:underline">
												Read More &rarr;
											</span>
										</div>
									</motion.div>
							  ))}
					</motion.div>
				</AnimatePresence>
			</div>
		</section>
	);
}
