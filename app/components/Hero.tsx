"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm dark:bg-blue-900 dark:text-blue-300">
                        Available for Work
                    </span>
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin size={14} /> Philippines (Remote Ready)
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
                    April Quijano
                </h1>

                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                    QA Engineer specializing in <span className="text-blue-600 dark:text-blue-400">Web, Mobile, API, and Automation Testing</span>
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-10 leading-relaxed">
                    I help companies reduce production bugs, improve user experience, and speed up release cycles with 3 years of hands-on experience.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href="#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Hire Me
                    </a>
                    <a href="#projects" className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white rounded-lg font-medium transition-colors">
                        View Projects
                    </a>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8">
                    <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">3+</p>
                        <p className="text-sm text-gray-500">Years Experience</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">Web/Mobile</p>
                        <p className="text-sm text-gray-500">Testing Focus</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">API</p>
                        <p className="text-sm text-gray-500">Automation</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
                        <p className="text-sm text-gray-500">Client Satisfaction</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
