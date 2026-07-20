import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Terminal, CheckCircle2, Layers, UserCheck, ClipboardList, Users, ShieldAlert } from 'lucide-react';
import { GithubIcon } from '../icons';

export function ProjectModal({ project, onClose }) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  // Reset index when project changes
  useEffect(() => {
    setCurrentImageIdx(0);
  }, [project]);

  const handleNextImage = useCallback(() => {
    if (!project?.images || project.images.length <= 1) return;
    setCurrentImageIdx((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const handlePrevImage = useCallback(() => {
    if (!project?.images || project.images.length <= 1) return;
    setCurrentImageIdx((prev) => (prev - 1 + project.images.length) % project.images.length);
  }, [project]);

  // Keyboard support: Esc and Arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose, handleNextImage, handlePrevImage]);

  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [];
  const architectureNodes = project.architecture ? project.architecture.split(/→|↓/g).map(s => s.trim()) : [];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop (Light Dismiss) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Content Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-y-auto flex flex-col z-10"
        >
          {/* Modal Header */}
          <div className="sticky top-0 z-20 bg-card/90 backdrop-blur-md px-6 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold">
                {project.category}
              </span>
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-foreground">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Image Carousel */}
            {images.length > 0 && (
              <div className="relative w-full min-h-[260px] sm:min-h-[380px] max-h-[70vh] aspect-video sm:aspect-auto rounded-xl bg-secondary/90 border border-border overflow-hidden group flex items-center justify-center">
                {/* Ambient Glowing Background Layer */}
                <img
                  src={images[currentImageIdx]}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-40 scale-125 pointer-events-none transition-all duration-300"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />

                {/* Main Foreground Screenshot - scales automatically to fit any screen ratio cleanly */}
                <img
                  src={images[currentImageIdx]}
                  alt={`${project.title} slide ${currentImageIdx + 1}`}
                  className="relative max-w-full max-h-[65vh] w-auto h-auto object-contain z-10 select-none transition-transform duration-300 rounded-lg shadow-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/projects/invento-1.svg';
                  }}
                />

                {/* Carousel Controls */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      aria-label="Previous slide"
                      className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/10 opacity-0 group-hover:opacity-100 sm:opacity-100 transition-all shadow-lg"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      aria-label="Next slide"
                      className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/10 opacity-0 group-hover:opacity-100 sm:opacity-100 transition-all shadow-lg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>

                    {/* Dots indicator */}
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 shadow-lg">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIdx(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === currentImageIdx ? 'w-5 bg-primary' : 'bg-white/40 hover:bg-white/70'
                          }`}
                          aria-label={`Go to slide ${i + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Badges / Technologies */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-primary" />
                <span>Technologies & Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-md bg-secondary border border-border text-foreground font-mono text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Overview & Purpose
              </h4>
              <p className="font-sans text-foreground/90 text-base sm:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenges solved */}
            {project.challenges && project.challenges.length > 0 && (
              <div className="p-5 sm:p-6 rounded-xl bg-secondary/40 border border-border">
                <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Key Engineering & Security Challenges Solved</span>
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm font-sans text-muted-foreground">
                      <span className="text-primary font-mono font-bold mt-0.5">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Topology */}
            {architectureNodes.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-primary" />
                  <span>System Architecture Topology</span>
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-3 p-5 rounded-xl bg-secondary/80 border border-border/80 font-mono text-xs sm:text-sm text-foreground">
                  {architectureNodes.map((node, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="px-3.5 py-2 rounded-lg bg-card border border-border/80 shadow-sm font-semibold">
                        {node}
                      </div>
                      {i < architectureNodes.length - 1 && (
                        <span className="text-primary font-bold text-base">↓</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Product Owner & PBL Sprint Backlog Summary */}
            {project.pblSummary && (
              <div className="p-6 rounded-2xl bg-card border-2 border-primary/30 shadow-glow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-lg text-foreground">
                        {project.pblSummary.headerTitle || "Project-Based Learning (@pens-pbl) Product Owner Summary"}
                      </h4>
                      <p className="font-mono text-xs text-primary font-semibold">
                        {project.pblSummary.role}
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground border border-border self-start sm:self-auto">
                    {project.pblSummary.badge || "Sprint 1 & Sprint 2 Backlogs"}
                  </span>
                </div>

                {/* Indra's Hands-on Sprint Backlogs */}
                {project.pblSummary.sprintBacklogsByIndra && (
                  <div>
                    <h5 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-primary" />
                      <span>{project.pblSummary.deliverablesTitle || "Indra's Direct Technical & PO Deliverables (Sprint Backlog)"}</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.pblSummary.sprintBacklogsByIndra.map((sb) => (
                        <div key={sb.id} className="p-3.5 rounded-xl bg-secondary/60 border border-border/80 text-xs font-sans space-y-1">
                          <div className="flex items-center justify-between font-mono font-bold text-foreground">
                            <span className="text-primary">{sb.id} // {sb.domain}</span>
                          </div>
                          <div className="font-semibold text-foreground text-sm">{sb.title}</div>
                          <p className="text-muted-foreground leading-relaxed">{sb.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Team Allocation Grid */}
                {project.pblSummary.team && (
                  <div>
                    <h5 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-primary" />
                      <span>{project.pblSummary.teamTitle || "@pens-pbl Engineering & Design Team Collaboration"}</span>
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                      {project.pblSummary.team.map((member, idx) => (
                        <div key={idx} className="p-2.5 rounded-lg bg-secondary/40 border border-border/60 text-xs font-sans">
                          <div className="font-bold text-foreground">{member.name}</div>
                          <div className="text-muted-foreground font-mono text-[11px] mt-0.5">{member.role}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Backlogs List */}
                {project.pblSummary.productBacklogs && (
                  <div>
                    <h5 className="text-xs font-mono font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
                      <ClipboardList className="w-3.5 h-3.5 text-primary" />
                      <span>{project.pblSummary.backlogTitle || "Core Product Backlog (PB) & Stakeholder Feedback Audit"}</span>
                    </h5>
                    <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                      {project.pblSummary.productBacklogs.map((pb) => (
                        <div key={pb.id} className="p-3 rounded-lg bg-secondary/40 border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-sans">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2 font-mono font-bold text-foreground">
                              <span className="text-primary">{pb.id}</span>
                              <span className="px-1.5 py-0.5 rounded bg-card border border-border/80 text-[10px] text-muted-foreground">
                                {pb.domain}
                              </span>
                            </div>
                            <div className="font-semibold text-foreground text-sm">{pb.title}</div>
                            <div className="text-muted-foreground">{pb.notes}</div>
                          </div>
                          <div className="flex items-center gap-2 self-start sm:self-center shrink-0 font-mono">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                              pb.priority.includes('Must') ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                            }`}>
                              {pb.priority}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[11px] font-bold">
                              {pb.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-secondary/80 border border-border text-muted-foreground font-mono text-xs select-none">
                    🔒 Repository Private (@pens-pbl)
                  </span>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.demo.includes('play.google.com') ? 'Google Play Store' : 'Live Demo'}</span>
                  </a>
                )}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 border border-border text-foreground font-medium text-sm transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Documentation</span>
                  </a>
                )}
              </div>

              <div className="text-xs font-mono text-muted-foreground hidden sm:block">
                Press <kbd className="px-1.5 py-0.5 rounded bg-secondary border border-border font-mono text-[10px]">ESC</kbd> to close
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
