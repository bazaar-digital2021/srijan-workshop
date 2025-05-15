"use client";

import { Bird, Brush, Fish, Flower, History, LayoutDashboard, PenTool, SquareRoundCorner, User } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: LayoutDashboard,
        title: "Basic Shapes",
        description: "",
        iconColor: "text-red-600",
        image: '/workshop/tringular.jpeg'
    },
    {
        icon: History,
        title: "History Of Madhubani",
        description: "",
        iconColor: "text-indigo-600"
    },
    {
        icon: Brush,
        title: "Traditional Tools, Materials & Themes",
        description: "",
        iconColor: "text-green-600"
    },
    {
        icon: PenTool,
        title: "Use Of Nib",
        description: "& Ink Usage",
        iconColor: "text-purple-600"
    },
    {
        icon: SquareRoundCorner,
        title: "Borders",
        description: "",
        iconColor: "text-purple-600"
    },
    {
        icon: Fish,
        title: "Fish",
        description: "& Traditional Importance",
        iconColor: "text-teal-500"
    },
    {
        icon: User,
        title: "Human Face",
        description: "& Traditional Importance",
        iconColor: "text-purple-600"
    },
    {
        icon: Bird,
        title: "Peacock",
        description: "& Traditional Importance",
        iconColor: "text-green-600"
    },
    {
        icon: Flower,
        title: "Lotus",
        description: "& Traditional Importance",
        iconColor: "text-blue-600"
    }
];

export default function Features() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-950 mb-16 font-devanagari">
                    इसमें आप क्या सीखोगे ?
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 container mx-auto max-w-5xl">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="rounded-lg border border-gray-200 px-4 py-2 flex flex-col items-center text-center"
                        >
                            <div className=" mb-4 flex items-center justify-center">


                                <div className={`text-5xl ${feature.iconColor}`}>
                                    {index === 0 && (
                                        <div className="flex flex-col">
                                            <div className="w-12 h-10 bg-red-600 mx-auto triangle-up mb-1"></div>
                                            <div className="flex justify-center gap-1">
                                                <div className="w-10 h-10 bg-red-600 rounded-full"></div>
                                                <div className="w-10 h-10 bg-red-600"></div>
                                            </div>
                                        </div>
                                    )}
                                    {index === 1 && "⏱️"}
                                    {index === 2 && "🖌️"}
                                    {index === 3 && "✒️"}
                                    {index === 4 && "▫️"}
                                    {index === 5 && "🐟"}
                                    {index === 6 && "👤"}
                                    {index === 7 && "🦚"}
                                    {index === 8 && "❄️"}
                                </div>

                            </div>

                            <h3 className="text-xl font-bold mb-2 text-black">{feature.title}</h3>
                            {feature.description && (
                                <p className="text-gray-600">{feature.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 