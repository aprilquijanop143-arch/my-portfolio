"use client";

import { Mail, Linkedin, Github, Clock, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="pb-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-12 overflow-hidden relative">
                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to improve your product quality?</h2>
                        <p className="text-zinc-400 mb-8 text-lg">
                            I am currently available for freelance projects and full-time roles. Let&apos;s discuss how I can help you deliver a bug-free experience.
                        </p>

                        <div className="space-y-4">
                            <a href="mailto:aprilquijanop143@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group">
                                <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Mail size={18} />
                                </div>
                                aprilquijanop143@gmail.com
                            </a>
                            <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group">
                                <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Linkedin size={18} />
                                </div>
                                linkedin.com/in/yourname
                            </a>
                            <a href="https://github.com/aprilquijanop143-arch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors group">
                                <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                                    <Github size={18} />
                                </div>
                                github.com/aprilquijanop143-arch
                            </a>
                            <div className="flex items-center gap-3 text-zinc-400 mt-6 pt-6 border-t border-zinc-800">
                                <Clock size={18} className="text-blue-500" />
                                <span>Availability: Immediate • Timezone: GMT+8</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/20 backdrop-blur-sm p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-semibold mb-6 text-white">Send a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Name</label>
                                <input type="text" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Your Name" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Email</label>
                                <input type="email" className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="your@email.com" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wider mb-1.5">Message</label>
                                <textarea rows={4} className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                <Send size={18} />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
