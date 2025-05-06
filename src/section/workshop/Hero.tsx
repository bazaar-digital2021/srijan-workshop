"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AlarmClockCheck, CalendarDays, Clock, Languages } from 'lucide-react';
import RegisterButton from "@/components/register-button";


const workShopDetails = [
    {
        title: 'Date (Fri)',
        desc: '18th April 25',
        icon: CalendarDays
    },
    {
        title: 'Time ',
        desc: '6 PM To 9 PM',
        icon: Clock
    },
    {
        title: 'Duration',
        desc: '3 Hours',
        icon: AlarmClockCheck
    },
    {
        title: 'Language',
        desc: 'Hindi',
        icon: Languages
    }
]

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        hours: 0,
        minutes: 15,
        seconds: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const totalSeconds = prevTime.hours * 3600 + prevTime.minutes * 60 + prevTime.seconds - 1;

                if (totalSeconds <= 0) {
                    clearInterval(timer);
                    return { hours: 0, minutes: 0, seconds: 0 };
                }

                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full min-h-screen ">
            {/* Background Image */}
            <Image
                src="/hero-img1.jpeg"
                alt="Madhubani Art Background"
                fill
                priority
                className="object-cover -z-20"
            />
            <div className="inset-0 absolute  -z-10 bg-gradient-to-b from-teal-500/30 to-teal-600/30" />
            <div className="text-center w-full flex justify-center items-center">
                <h3 className="text-black text-base md:text-xl font-semibold text-center w-max px-4 py-2 bg-[#FFEB3B] rounded-b-2xl border border-white">
                    Madhubani Painting Workshop -Live on Zoom
                </h3>

            </div>
            <div className="flex text-white flex-col items-center justify-center mt-4 md:mt-7 max-w-6xl mx-auto ">

                <h1 className="text-[32px] md:text-[50px] font-bold text-center">
                    अपने रचनात्मक रंगों को पहचानिए
                </h1>
                <h2 className="text-2xl md:text-[40px] font-semibold text-center mt-1">
                    मधुबनी की पारंपरिक कला से जुड़िए!
                </h2>
                <p className="text-center font-sans text-base md:text-[21px] mt-2 md:mt-3">चिंता न करें अगर आपने पहले कभी ब्रश नहीं उठाया—इस 3 घंटे की इंटरैक्टिव वर्कशॉप में हम आपको सिखाएंगे वो लोककला, जिसने पीढ़ियों से संस्कृति को सजाया है।</p>
                <div className="flex flex-col md:flex-row gap-4 md:gap-14 mt-4 justify-between items-center ">
                    <div className="relative flex flex-col items-center justify-center ">
                        <Image src="/putul.webp" alt="Madhubani Art Background" width={370} height={370}
                            priority
                            className="object-cover " />
                    </div>

                    <div className="mt-4 md:mt-8">
                        <div className="grid grid-cols-2 gap-4">
                            {workShopDetails.map((item, index) => (
                                <div key={index} className="flex  gap-2 md:gap-6 py-2  md:px-6 px-4 bg-white rounded-lg shadow-2xl shadow-white">
                                    <item.icon className="w-8 h-8 text-[#d63628] font-extrabold" />
                                    <div className="text-black flex flex-col gap-1">
                                        <p className=" text-lg font-semibold ">{item.title}</p>
                                        <p className="text-xl font-bold">{item.desc} </p>
                                    </div>

                                </div>
                            ))}
                            <div className='col-span-2 mt-4'>
                                <RegisterButton className="w-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Countdown Timer Section */}
            <div className="w-full text-center py-10 mt-8">
                <h2 className="text-xl md:text-3xl font-normal text-white/70 mb-3 font-pt-serif">Be Quick Offer is Ending in</h2>
                <div className="flex justify-center gap-4">
                    <div className=" flex flex-col items-center justify-center">
                        <span className="text-3xl flex items-center justify-center md:text-6xl font-bold text-black bg-white rounded-full h-24 w-24 font-pt-serif">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-white">Hours</span>
                    </div>

                    <div className=" flex flex-col items-center justify-center">
                        <span className="text-3xl flex items-center justify-center md:text-6xl font-bold text-black bg-white rounded-full h-24 w-24 font-serif">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-white">Minutes</span>
                    </div>

                    <div className=" flex flex-col items-center justify-center">
                        <span className="text-3xl flex items-center justify-center md:text-6xl font-bold text-black bg-white rounded-full h-24 w-24 font-pt-serif">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                        <span className="text-lg font-medium text-white">Seconds</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
