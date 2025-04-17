"use client"
import { ChevronsDown, MenuIcon, X } from "lucide-react"
import React, { useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "./ui/button"
import Link from "next/link"
import { generateSlug } from "../utils/generateSlug"


type NavType = {
    _id?: string
    title: string
    navMenu: string[]
}

const MobileMenu = ({ menus }: { menus: NavType[] }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // Check if the click was outside both the menu and the toggle button
            if (
                isOpen &&
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false)
            }
        }

        // Add event listener when menu is open
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen])

    return (
        <div ref={buttonRef}>
            {isOpen ? (
                <X
                    className="h-8 w-8 text-red-500 font-bold rounded-md cursor-pointer transition-all duration-500 border"
                    onClick={() => setIsOpen(false)}
                />
            ) : (
                <MenuIcon
                    className="h-8 w-8 rounded-md text-black/50 cursor-pointer transition-all duration-500 border"
                    onClick={() => setIsOpen(true)}
                />
            )}

            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        key="mobile-menu"
                        ref={menuRef}
                        initial={{ opacity: 0, x: -600 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -600 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute right-0 top-[53px] w-full bg-gray-600 flex flex-col items-center justify-start z-10 gap-2 py-4 text-white/60 font-semibold"
                    >
                        {menus.map((menu, index) => (
                            <Collapsible className="w-full space-y-2 group/collapsible" key={menu._id || index}>
                                <div className="flex items-center justify-between space-x-4">
                                    <CollapsibleTrigger asChild>
                                        <Button variant="ghost" className="w-full hover:bg-muted-foreground" size="sm" >
                                            <h4 className="text-sm font-semibold">{menu.title}</h4>
                                            <ChevronsDown className="h-4 w-4 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            <span className="sr-only">Toggle</span>
                                        </Button>
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="space-y-1 flex flex-col">
                                    {menu.navMenu.map((item, itemIndex) => (
                                        <Link
                                            key={`${menu._id || index}-${itemIndex}`}
                                            href={generateSlug(item)}
                                            className="px-8 py-2 font-mono text-sm shadow-sm"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default MobileMenu

