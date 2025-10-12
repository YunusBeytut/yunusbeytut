"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, ChevronLeft, ChevronRight, Grid } from "lucide-react"
import Link from "next/link"
import "../styles/Projects.css"
import { projects } from "@/data/Projects"

const CAROUSEL_COUNT = 3

export function Projects() {
    const [showAll, setShowAll] = useState(false)
    const [startIndex, setStartIndex] = useState(0)

    const canGoLeft = startIndex > 0
    const canGoRight = startIndex + CAROUSEL_COUNT < projects.length

    // Sadece gösterilecek projeleri hesapla
    const visibleProjects = projects.slice(startIndex, startIndex + CAROUSEL_COUNT)

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Projelerim</h2>
                    <p className="section-description">
                        Geliştirdiğim projeler ve kullanılan teknolojiler
                    </p>
                    {/* Altına gradient çizgi */}
                    <div className="projects-divider"></div>
                </motion.div>

                {/* Tümünü Gör & Kapat butonu */}
                <div style={{
                    display: "flex", justifyContent: "flex-end", alignItems: "center",
                    marginBottom: "1rem", gap: "1rem"
                }}>
                    {!showAll &&
                        <button
                            className="btn-project"
                            style={{ width: "auto", fontWeight: 600, padding: "0.7rem 1.5rem", background: "#1e293b", color: "#3b82f6", border: "2px solid #3b82f6" }}
                            onClick={() => setShowAll(true)}
                        >
                            <Grid style={{ marginRight: 6 }} />
                            Tüm Projeleri Gör
                        </button>
                    }
                    {showAll &&
                        <button
                            className="btn-project"
                            style={{ width: "auto", fontWeight: 600, padding: "0.7rem 1.5rem", background: "#1e293b", color: "#3b82f6", border: "2px solid #3b82f6" }}
                            onClick={() => setShowAll(false)}
                        >
                            Geri Dön
                        </button>
                    }
                </div>

                {/* Eğer "Tümünü Gör" modunda ise tüm projeleri grid olarak göster */}
                {showAll ? (
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} className="project-main-img" />
                                    <div className="project-overlay"></div>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>
                                    <div className="project-technologies">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="tech-tag">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                    <Link href={`/projects/${project.id}`} className="btn-project">
                                        <Eye className="w-5 h-5 mr-2" />
                                        Detayları Görüntüle
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (

                    // Carousel görünümü: grid ile aynısı, sadece slice edilmiş datayla
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        {/* Sola kaydır butonu */}
                        <button
                            className="carousel-arrow"
                            onClick={() => setStartIndex((prev) => Math.max(prev - CAROUSEL_COUNT, 0))}
                            disabled={!canGoLeft}
                            aria-label="Sola Kaydır"
                        >
                            <ChevronLeft size={36} style={{ color: "#3b82f6" }} />
                        </button>

                        {/* 3'lük proje grubu */}
                        <div style={{ flex: 1 }}>
                            <div className="projects-grid">
                                {visibleProjects.map((project, index) => (
                                    <motion.div
                                        key={project.id}
                                        className="project-card"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="project-image">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="project-main-img"
                                            />
                                            <div className="project-overlay"></div>
                                        </div>

                                        <div className="project-content">
                                            <h3 className="project-title">{project.title}</h3>
                                            <p className="project-description">{project.description}</p>

                                            <div className="project-technologies">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span key={tech} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="tech-tag">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            <Link
                                                href={`/projects/${project.id}`}
                                                className="btn-project"
                                            >
                                                <Eye className="w-5 h-5 mr-2" />
                                                Detayları Görüntüle
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Sağa kaydır butonu */}
                        <button
                            className="carousel-arrow"
                            onClick={() => setStartIndex((prev) => Math.min(prev + CAROUSEL_COUNT, projects.length - CAROUSEL_COUNT))}
                            disabled={!canGoRight}
                            aria-label="Sağa Kaydır"
                        >
                            <ChevronRight size={36} style={{ color: "#3b82f6" }} />
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}