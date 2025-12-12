import { CheckCircle } from "lucide-react";

export function Services() {
    return (
        <section className="relative overflow-hidden rounded-3xl bg-blue-600 p-8 md:p-12">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-8 text-white">Services I Offer</h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        "Full Web & Mobile App Testing",
                        "API Testing + Integration",
                        "Test Documentation",
                        "QA Status Reports",
                        "Regression Suites",
                        "Automation Setup",
                        "MVP Launch QA",
                        "Startup QA Support"
                    ].map((service, i) => (
                        <div key={i} className="bg-blue-700/50 p-4 rounded-xl backdrop-blur-sm border border-blue-500/30 flex items-center gap-3">
                            <CheckCircle size={18} className="text-blue-200 shrink-0" />
                            <p className="font-medium text-white text-sm">{service}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </section>
    );
}
