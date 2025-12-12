import { Section } from "./ui/Section";
import { Star } from "lucide-react";

export function ValueProposition() {
    return (
        <Section>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">My Value Proposition</h2>
                <p className="text-gray-600 dark:text-gray-400">Why I Stand Out Among Other QA Testers</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    "I test Web + Mobile + API + Database — full QA coverage",
                    "I give video evidence, console logs, network traces",
                    "I provide daily QA updates (clients love this)",
                    "I always include clear test documentation",
                    "I catch issues others miss (UI inconsistencies, UX gaps)",
                    "I study the business logic, not just the UI",
                    "I test like a real user + like a developer at the same time"
                ].map((item, i) => (
                    <div key={i} className="p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl hover:shadow-lg transition-shadow">
                        <Star className="text-yellow-500 mb-4" />
                        <p className="font-medium">{item}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
