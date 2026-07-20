import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";
import { Terminal } from "lucide-react";

export function Skills() {
	return (
		<section
			id="skills"
			className="py-24 border-t border-border/60 relative bg-secondary/20"
		>
			<div className="max-w-[1400px] mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="w-full mb-12"
				>
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground mb-4">
						<Terminal className="w-3.5 h-3.5 text-primary" />
						<span>02 // TECHNICAL SKILLS</span>
					</div>

					<h2 className="text-3xl sm:text-4xl font-bold font-sans tracking-tight text-foreground">
						Core Competencies &amp; Stack
					</h2>
					<p className="text-muted-foreground font-sans mt-2 text-base sm:text-lg">
						A balanced foundation spanning software engineering
						architecture, low-level infrastructure, and practical
						offensive security tools.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{skillCategories.map((category, index) => {
						const CategoryIcon = category.icon || Terminal;
						return (
							<motion.div
								key={category.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								className="p-6 sm:p-8 rounded-xl bg-card border border-border/80 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-glow-sm flex flex-col justify-between"
							>
								<div>
									<div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-border/60">
										<div
											className={`w-11 h-11 rounded-xl flex items-center justify-center border group-hover:scale-105 transition-transform ${category.colorClass}`}
										>
											<CategoryIcon className="w-5.5 h-5.5" />
										</div>
										<h3 className="font-sans font-semibold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
											{category.title}
										</h3>
									</div>

									<div className="flex flex-wrap gap-2.5">
										{category.skills.map((skill) => {
											const SkillIcon =
												skill.icon || Terminal;
											return (
												<div
													key={skill.name}
													className="px-3.5 py-2.5 rounded-lg bg-secondary/80 border border-border/60 text-foreground font-mono text-xs sm:text-sm flex items-center gap-2.5 hover:border-primary/50 hover:bg-secondary transition-all duration-200 group/skill"
												>
													<SkillIcon className="w-4 h-4 text-primary group-hover/skill:scale-110 transition-transform" />
													<span className="font-medium">
														{skill.name}
													</span>
												</div>
											);
										})}
									</div>
								</div>

								<div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-mono text-muted-foreground border-t border-border/40">
									<span>
										TOTAL ITEMS: {category.skills.length}
									</span>
									<span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
										&gt; verified stack
									</span>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
