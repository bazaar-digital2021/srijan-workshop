"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import Image from "next/image"

import { usePathname } from "next/navigation"

interface FooterSectionProps {
    title: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const FooterSection = ({ title, children, defaultOpen = false }: FooterSectionProps) => {
    const [isOpen, setIsOpen] = useState(defaultOpen)

    return (
        <div className="border-b border-gray-200 py-4 md:border-none">
            <div
                className="flex items-center justify-between cursor-pointer md:cursor-default"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="text-lg font-medium text-gray-600">{title}</h3>
                <div className="md:hidden">
                    {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
                </div>
            </div>
            <div className={`mt-3 space-y-2 ${isOpen ? "block" : "hidden"} md:block`}>{children}</div>
        </div>
    )
}

export default function Footer({ footerData }: { footerData: FooterSectionSchemaType }) {
    if (usePathname() === '/sign-in') return null
    return (
        <footer className="bg-gray-100 relative">
            {/* Torn paper effect top edge */}
            <div className="absolute top-0 left-0 w-full h-8 overflow-hidden">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-8 text-white">
                    <path
                        d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                        fill="currentColor"
                        opacity=".25"
                    ></path>
                    <path
                        d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        fill="currentColor"
                        opacity=".5"
                    ></path>
                    <path
                        d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 pt-16 pb-8">
                {/* Newsletter signup */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-medium text-gray-700 mb-6">Stay in touch with us</h2>
                    <div className="max-w-md mx-auto">
                        <div className="flex gap-2 justify-center items-center">
                            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                                Sign Up
                                <span className="ml-2">→</span>
                            </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-2">Sign up to receive updates and exclusive offers</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Information */}
                    <div className="md:col-span-1">
                        <FooterSection title="Explore" defaultOpen={true}>
                            <div className="flex flex-col space-y-3">
                                {footerData.expolore?.map((item) => (
                                    <Link href={item.slug} key={item.slug} className="text-gray-500 hover:text-amber-500">
                                        {item.title}
                                    </Link>

                                ))}
                            </div>
                        </FooterSection>
                    </div>

                    {/* Help & Support */}
                    <div className="md:col-span-1">
                        <FooterSection title="Help">
                            <div className="flex flex-col space-y-3">
                                {footerData.help?.map((item) => (
                                    <Link href={item.slug} key={item.slug} className="text-gray-500 hover:text-amber-500">
                                        {item.title}
                                    </Link>

                                ))}
                            </div>
                        </FooterSection>
                    </div>

                    {/* Shop */}
                    <div className="md:col-span-1">
                        <FooterSection title="Categories">
                            <div className="flex flex-col space-y-3">
                                {footerData.categories?.map((item) => (
                                    <Link href={item.slug} key={item.slug} className="text-gray-500 hover:text-amber-500">
                                        {item.title}
                                    </Link>

                                ))}
                            </div>
                        </FooterSection>
                    </div>

                    {/* Connect with us */}
                    <div className="md:col-span-1">
                        <FooterSection title="Connect with us">
                            <div className="flex flex-col space-y-3">
                                <div className="flex space-x-4 mb-4">
                                    <Link href="#" className="text-gray-500 hover:text-amber-500">
                                        <Facebook className="h-5 w-5" />
                                        <span className="sr-only">Facebook</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-amber-500">
                                        <Instagram className="h-5 w-5" />
                                        <span className="sr-only">Instagram</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-amber-500">
                                        <Twitter className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link href="#" className="text-gray-500 hover:text-amber-500">
                                        <Youtube className="h-5 w-5" />
                                        <span className="sr-only">YouTube</span>
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4 text-gray-500" />
                                    <a href="mailto:contact@example.com" className="text-gray-500 hover:text-amber-500">
                                        contact@example.com
                                    </a>
                                </div>
                                <p className="text-gray-500">
                                    123 Srijan Way
                                    <br />
                                    Craftsville, CR 12345
                                </p>
                            </div>
                        </FooterSection>
                    </div>
                </div>

                {/* Bottom section with logo and copyright */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <Link href="/" className="flex items-center relative rounded-full overflow-hidden">

                                <Image src='https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208' alt='logo' height={40} width={40} className='object-contain' />

                                <span className="ml-2 text-gray-600">| TRIBAL | UNIQUE</span>
                            </Link>
                        </div>
                        <div className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Srijan Mithila Collective. All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

