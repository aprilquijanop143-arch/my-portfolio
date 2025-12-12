"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoCardProps {
    children: ReactNode;
    className?: string;
    colSpan?: number; // 1 to 4
    rowSpan?: number; // 1 to 4
    delay?: number;
}

export function BentoCard({ children, className, colSpan = 1, rowSpan = 1, delay = 0 }: BentoCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "bg-card text-card-foreground rounded-3xl p-6 border border-border shadow-sm hover:shadow-md transition-all hover:border-zinc-700 relative overflow-hidden group",
                className
            )}
            style={{
                gridColumn: `span ${colSpan}`,
                gridRow: `span ${rowSpan}`,
            }}
        >
            {/* Subtle hover gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {children}
        </motion.div>
    );
}
