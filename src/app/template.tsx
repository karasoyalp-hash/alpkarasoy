"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
    // We use pathname as a key so that Framer Motion knows when the route has changed
    // In Next.js App Router, `template.tsx` automatically creates a new instance on navigation,
    // which pairs perfectly with framer-motion entry animations without needing AnimatePresence context hacks.

    return (
        <motion.div
            initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 0.6
            }}
            className="flex-1 flex flex-col w-full"
        >
            {children}
        </motion.div>
    );
}
