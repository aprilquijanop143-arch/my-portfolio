import { Section } from "./ui/Section";
import { CheckCircle2 } from "lucide-react";

export function ExecutiveSummary() {
    return (
        <Section className="bg-gray-50 dark:bg-zinc-900/50 rounded-3xl my-10">
            <h2 className="text-3xl font-bold mb-6">Why Clients Should Hire Me</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                I am a highly detail-oriented Quality Assurance Engineer with 3 years of hands-on experience ensuring the reliability, performance, and usability of Web, Mobile, and API applications.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-semibold text-xl mb-4">I help companies:</h3>
                    <ul className="space-y-3">
                        {[
                            "Reduce production bugs",
                            "Improve user experience",
                            "Speed up release cycles",
                            "Deliver stable, high-quality products"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-green-500 flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                    <p className="italic text-gray-600 dark:text-gray-400">
                        &quot;I combine deep manual testing expertise, API testing, and lightweight automation to create a complete QA service that fits startups, enterprise teams, and freelance clients. I don’t just test — I protect your product.&quot;
                    </p>
                </div>
            </div>
        </Section>
    );
}
