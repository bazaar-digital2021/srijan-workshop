'use client'
import { motion } from "framer-motion";
export default function RegisterButton({ className }: { className?: string }) {
    return (
        <motion.a
            animate={{
                scale: [1, 1.1, 1],
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            href="/workshop/checkout" className={`w-full block bg-gradient-to-b from-[#d63628] to-[#901A19] text-white px-8 py-4 rounded-lg text-center mb-8 hover:from-[#901A19] hover:to-[#d63628]  shadow-lg shadow-black/20 transition-all duration-300 ${className}`}>

            <h3 className="text-2xl md:text-[28px] font-bold mb-2">अभी रजिस्टर करें – अपने लिए कुछ करें</h3>
            <p className="text-xl text-white/70">For Just ₹ 99 <span className="line-through">₹499</span></p>

        </motion.a>
    )
}


