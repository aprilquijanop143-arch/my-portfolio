import { Section } from "./ui/Section";
import { Check } from "lucide-react";

const skills = {
    "Manual Testing": ["Functional", "Regression", "Smoke", "Exploratory", "UI", "API"],
    "Automation": ["Selenium", "Playwright", "Cypress", "POM", "TestNG/JUnit", "Java/Python/JS"],
    "API Testing": ["Postman", "REST Assured"],
    "Performance": ["JMeter basics"],
    "Tools": ["Jira", "TestRail", "Git", "Jenkins"],
    "Databases": ["SQL", "MySQL/PostgreSQL"],
    "CI/CD": ["GitHub Actions", "GitLab CI"],
    "Soft Skills": ["Communication", "Detail-oriented", "Analytical", "Problem-solving"]
};

export function Skills() {
    return (
        <Section id="skills" className="bg-gray-50 dark:bg-zinc-900/50 rounded-3xl my-10">
            <h2 className="text-3xl font-bold mb-10 text-center">Core Skills</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, items], i) => (
                    <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-800">
                        <h3 className="font-semibold text-lg mb-4 text-blue-600 dark:text-blue-400">{category}</h3>
                        <ul className="space-y-2">
                            {items.map((skill, j) => (
                                <li key={j} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                                    <Check size={16} className="text-green-500" />
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}
