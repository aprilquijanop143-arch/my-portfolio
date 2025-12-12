"use client";

import { MapPin, Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export function HeroBento() {
    return (
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-zinc-400 text-sm border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for Work
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500 text-sm">
                        <MapPin size={14} /> Philippines
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border-2 border-zinc-800">
                        <Image
                            src="/pictures/april-quijano-dp.jpg"
                            alt="April Quijano"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-2">
                            April Quijano
                        </h1>
                        <h2 className="text-xl md:text-2xl text-zinc-400 font-medium">
                            QA Engineer
                        </h2>
                    </div>
                </div>

                <p className="mt-4 text-zinc-400 leading-relaxed max-w-lg">
                    Specializing in <span className="text-blue-400">Web, Mobile, API, and Automation Testing</span>.
                    I help companies reduce bugs and speed up release cycles.
                </p>
            </div>

            <div className="mt-8 flex gap-4">
                <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors">
                    Hire Me
                </a>
                <div className="flex gap-2">
                    <a href="https://linkedin.com/in/yourname" target="_blank" className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/aprilquijanop143-arch" target="_blank" className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:aprilquijanop143@gmail.com" className="p-3 bg-zinc-800 hover:bg-zinc-700 rounded-xl text-white transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}
