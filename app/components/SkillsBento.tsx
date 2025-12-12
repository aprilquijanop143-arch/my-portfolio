"use client";

const skills = [
    "Manual Testing", "Selenium", "Playwright", "Cypress",
    "Postman", "REST Assured", "Jira", "Git", "SQL", "CI/CD"
];

export function SkillsBento() {
    return (
        <div className="h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <span
                        key={i}
                        className="px-3 py-1.5 bg-zinc-800/50 border border-zinc-700/50 rounded-lg text-sm text-zinc-300 hover:bg-zinc-800 hover:text-white transition-colors cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
}
