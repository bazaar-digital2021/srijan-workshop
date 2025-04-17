"use client"
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

function ExclusiveDeal({ cards }: { cards: HeroSchemaType[] }) {

    return (
        <div className='flex gap-10 flex-1 w-full'>

            {/* 
            * Generates an array of 4 div elements with specific classes and styles.
            * Each div is assigned a unique key based on its index.
            * THIS IS FOR DESKTOP
            */ }
            {cards.map((card, index) => (
                <div key={card.title} className='hidden relative md:block bg-red-400 rounded-md flex-1'>
                    <Image src={`${card.imageUrl}`} className='rounded-md' height={400} width={400} alt="" />
                </div>
            ))}
            {/* THIS EXCLUSIVE DEAL FORM MOBILE */}
            <div className=' flex flex-wrap gap-2 justify-center items-center  rounded-md  flex-1 md:hidden'>
                {cards.map((card, index) => (
                    <Card key={card.title} className="p-0 flex-shrink-0">
                        <CardContent className="p-0 w-40 h-40 relative flex items-center justify-center rounded-md overflow-hidden group">
                            <div className='inset-0 absolute bg-black opacity-0 hover:opacity-40 transition-all duration-500 ease-in-out' />
                            <Image src={`${card.imageUrl}`} className='object-cover object-top h-full w-full' height={300} width={300} alt="" />
                            <p className='absolute text-white z-10 text-sm font-bold top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-nowrap group-hover:top-1/2 group-hover:text-xl transition-all duration-500 ease-in-out'>
                                {card.title}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ExclusiveDeal
