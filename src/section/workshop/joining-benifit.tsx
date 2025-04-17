import RegisterButton from "@/components/register-button";
import Image from "next/image";


const benifits = [
    {
        img: '/benifit/1.png',
        title: 'Workshop Recording',
    },
    {
        img: '/benifit/2.jpg',
        title: '3 Advance videos of Madhubani',
    },
    {
        img: '/benifit/3.png',
        title: 'Madhubani Painting Checklist'
    },
    {
        img: '/benifit/4.webp',
        title: 'Facebook Community Lifetime Access'
    },
    {
        img: '/benifit/5.jpg',
        title: 'Painting Support & Guidance'
    },
    {
        img: '/benifit/6.png',
        title: 'Live Q & A'
    }
]

export default function JoiningBenifit() {
    return (
        <div className="relative w-full min-h-screen ">
            {/* Background Image */}
            <Image
                src="/benifit.jpg"
                alt="Madhubani Art Background"
                fill
                priority
                className="object-cover -z-10"
            />
            <div className="mx-auto px-4 md:px-0 max-w-5xl py-8 md:py-16">
                <h1 className="text-2xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16">
                    Get Bonuses after Joining this Workshop
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benifits.map((benifit, index) => (
                        <div key={benifit.title} className="relative bg-indigo-950 rounded-lg p-4 flex flex-col items-center justify-center w-full h-full gap-4 md:gap-8">
                            <Image src={benifit.img} alt={benifit.title} width={250} height={250} className=" rounded-lg top-0 " />
                            <div className="px-4 py-2 bg-[#5352ED] text-white rounded-full w-max font-bold"> Bonus #{index + 1} </div>
                            <h2 className="text-xl md:text-2xl font-bold text-white">{benifit.title}</h2>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-8 md:mt-16">
                    <RegisterButton className="max-w-md md:max-w-2xl" />

                </div>
            </div>
        </div>
    )
}
