"use client";
import { cn } from "@/lib/utils";

export function Logo({
    isScrolled = false,
    menuOpen,
    className = "",
}: {
    isScrolled?: boolean;
    menuOpen?: boolean;
    className?: string;

}) {
    return (
        <div className={cn("relative flex items-center", className)}>
            <div
                className={cn(
                    "flex items-center justify-center rounded-[1.8rem] border border-amber-300/70 bg-[#fff8ea] px-4 py-2 shadow-[0_8px_22px_-18px_rgba(74,44,15,0.35)] transition-all duration-300 mx-3",
                    // isScrolled ? "h-14 w-40" : "h-14 w-40"
                )}
            >
                <img
                    src="/images/logo.png"
                    alt="Green Agriculture Corp Logo"
                    className={cn(
                        "w-auto object-contain transition-all duration-300 mx-4 max-h-14",
                        // isScrolled ? "h-10" : "h-10"
                    )}
                />
            </div>
        </div>
    );
}

function FooterLogo() {
    return (
        <div
            className="relative flex flex-col items-start space-y-4 mb-6 text-start"
        >
            <img
                src="/images/logo.png"
                alt="Green Agriculture Corp Logo"
                className="h-16 w-auto object-contain"
            />
            <p className="text-[#5a2f12] text-sm font-semibold uppercase tracking-[0.18em]">
                Premium Rice Exporters
            </p>
            <p className="text-[#6b4a2f] text-base leading-relaxed max-w-2xl">
                Since 2016, we have been a leading manufacturer and exporter of premium Indian non-basmati rice. 
                Our ISO-certified facility in Raipur processes over 10,000 MT annually, serving 50+ countries with 
                consistent quality and reliable supply chain solutions.
            </p>
        </div>
    );
}
export { FooterLogo };