'use client'
import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
function HeroSlideSection({ images }: { images: string[] }) {

    const style = {
        textAlign: 'center',
        background: '#bbbaba',
        fontSize: '30px',
        borderRadius: '5px'
        // marginRight:'10px'
    }
    const styleNomargin = {
        textAlign: 'center',
        background: '#bbbaba',
        padding: '200px 0',
        fontSize: '30px',
        borderRadius: '5px',
        marginRight: '0'
    }
    return (
        <>
            <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={true} duration={1000} infinite={true} easing='ease-out' transitionDuration={2000} responsive={[{
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]}>
                {images.map((image, i) => {
                    return (
                        <div className='pl-3 md:p-4' key={`${image}-${i}`}>
                            <div className='bg-cover h-[25rem] w-80 rounded-md ' style={{ backgroundImage: `url(${image})` }}></div>

                        </div>
                    )
                })}
            </Slide>

        </>
    )
}

export default HeroSlideSection

