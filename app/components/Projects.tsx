"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ExternalLink, X } from "lucide-react";

const projects = [
    {
        title: "E2E Web Automation Framework",
        role: "QA Automation Engineer",
        tech: "Playwright, TypeScript, GitHub Actions",
        url: "https://github.com/aprilquijanop143-arch/Full-Web-App-Test-Automation-Framework-using-Playwright",
        additionalLinks: [
            { label: "View CI Pipeline", url: "https://github.com/aprilquijanop143-arch/Full-Web-App-Test-Automation-Framework-using-Playwright/actions" }
        ],
        scope: [
            "Modern UI automation with Page Object Model (POM)",
            "Robust test suites (Smoke + Regression)",
            "Multi-browser execution (Chromium, Firefox, WebKit)",
            "CI/CD pipeline integrated using GitHub Actions"
        ],
        impact: [
            "Built scalable Playwright framework from scratch",
            "Automated UI test suites for SauceDemo",
            "Added Allure reporting with screenshots & videos"
        ],
        assets: ["GitHub Repo", "CI Pipeline", "Allure Report"],
        images: [
            "/pictures/Allure report dashboard.png",
            "/pictures/testing running on terminal.png",
            "/pictures/CI pipeline “Passed” result.png",
            "/pictures/folder structure.png",
            "/pictures/clean code pom style.png"
        ]
    },
    {
        title: "Full QA Cycle for an E-Commerce Platform",
        role: "QA Engineer",
        duration: "8 months",
        tech: "Web, API, SQL, Mobile",
        scope: [
            "Full feature testing: login → product → cart → checkout → order",
            "End-to-end mobile + web testing",
            "API verification for products, login & payments",
        ],
        impact: [
            "Prevented 3 critical checkout defects",
            "Improved customer success flow by 32%",
        ],
        assets: ["45 Test Cases", "8 Bug Reports", "Test Plan"]
    },
    {
        title: "Finance Mobile App (Android/iOS)",
        role: "Mobile QA Tester",
        duration: "6 months",
        tech: "Appium, API",
        scope: [
            "Login, biometrics, transaction validation",
            "Security testing basics (permissions, data leaks)",
        ],
        impact: [
            "Detected security bypass: fingerprint login skipping PIN",
            "Fixed crash affecting >20% of beta testers",
        ],
        assets: ["Mobile Test Cases", "Bug Video + Logs"]
    },
    {
        title: "API Testing Automation (Postman)",
        role: "QA Automation",
        tech: "Postman, JS",
        description: "Complete automation of login, profile, and payments API",
        codeSnippet: `pm.test("Status code OK", () => {
    pm.response.to.have.status(200);
});`,
        assets: ["Postman Collection", "Runner Report"]
    },
    {
        title: "UI Automation (Selenium)",
        tech: "Java + Selenium",
        description: "Example Flow Automated: Login → Dashboard → Profile Update",
        assets: ["POM structure", "Test Execution Report"]
    }
];

export function Projects() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="projects">
            <h2 className="text-3xl font-bold mb-8 text-white flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-500 rounded-full"></span>
                Flagship Projects
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project: any, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className={`group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-colors ${project.images ? 'col-span-full' : ''}`}
                    >
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                    <p className="text-sm text-zinc-500 mt-1">{project.role} {project.tech && `• ${project.tech}`}</p>
                                </div>
                                <div className="flex gap-2">
                                    {project.additionalLinks && project.additionalLinks.map((link: any, l: number) => (
                                        <a
                                            key={l}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-white group-hover:bg-blue-600 transition-all flex items-center gap-2"
                                            title={link.label}
                                        >
                                            <ExternalLink size={18} />
                                            <span className="text-xs hidden md:inline">{link.label}</span>
                                        </a>
                                    ))}
                                    {project.url ? (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-white group-hover:bg-blue-600 transition-all"
                                            title="View Source"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    ) : (
                                        <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400 group-hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                {project.scope && (
                                    <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                                        {project.scope.slice(0, 4).map((item: string, j: number) => <li key={j}>{item}</li>)}
                                    </ul>
                                )}
                                {project.description && <p className="text-sm text-zinc-400">{project.description}</p>}
                            </div>

                            {project.images && (
                                <div className="flex gap-4 overflow-x-auto pb-4 mb-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent snap-x">
                                    {project.images.map((img: string, k: number) => (
                                        <div
                                            key={k}
                                            className="flex-shrink-0 w-80 h-48 relative rounded-lg overflow-hidden border border-zinc-800 snap-center cursor-pointer"
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <img src={img} alt={`${project.title} screenshot ${k + 1}`} className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500" />
                                            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors flex items-center justify-center group/img">
                                                <ExternalLink className="text-white opacity-0 group-hover/img:opacity-100 transition-opacity" size={24} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {project.codeSnippet && (
                                <div className="bg-black/50 rounded-lg p-3 mb-4 border border-zinc-800 font-mono text-xs text-zinc-300 overflow-x-auto">
                                    <pre>{project.codeSnippet}</pre>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.assets.map((asset: string, j: number) => (
                                    <span key={j} className="px-2 py-1 bg-zinc-800 rounded text-xs text-zinc-400 border border-zinc-700">
                                        {asset}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[90vh] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors z-10"
                            >
                                <X size={24} />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Project Screenshot"
                                className="w-full h-full object-contain max-h-[85vh]"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
