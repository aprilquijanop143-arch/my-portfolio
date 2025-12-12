"use client";

import { Star } from "lucide-react";

export function ValueBento() {
    return (
        <div className="h-full flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-white mb-2">Why Me?</h3>
            <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <Star size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                    <span>Full QA Coverage (Web + Mobile + API)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <Star size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                    <span>Detailed Bug Reports & Videos</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-zinc-400">
                    <Star size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                    <span>User-Centric Testing Approach</span>
                </li>
            </ul>
        </div>
    );
}
