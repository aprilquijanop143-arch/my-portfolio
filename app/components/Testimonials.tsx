import { Section } from "./ui/Section";
import { Quote } from "lucide-react";

export function Testimonials() {
    return (
        <Section className="bg-gray-50 dark:bg-zinc-900/50 rounded-3xl my-10">
            <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    "Incredible attention to detail — caught issues our team completely missed.",
                    "Professional, fast, and communicates clearly. Highly recommended.",
                    "We improved our release quality immediately after bringing them into the team."
                ].map((quote, i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800 relative">
                        <Quote className="text-blue-100 dark:text-blue-900 absolute top-6 left-6" size={48} />
                        <p className="relative z-10 text-gray-700 dark:text-gray-300 italic mb-4">&quot;{quote}&quot;</p>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                            <div>
                                <p className="font-semibold text-sm">Client Name</p>
                                <p className="text-xs text-gray-500">Company</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}
