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
            href="/checkout" className={`w-full block bg-gradient-to-b from-primary to-tertiary text-white px-8 py-4 rounded-lg text-center mb-8 hover:from-tertiary hover:to-primary transition-transform shadow-lg shadow-black/20 transition-all duration-300 ${className}`}>

            <h3 className="text-2xl md:text-[28px] font-bold mb-2">अभी रजिस्टर करें – अपने लिए कुछ करें</h3>
            <p className="text-xl text-white/70">For Just ₹ 99 <span className="line-through">₹499</span></p>

        </motion.a>
    )
}


