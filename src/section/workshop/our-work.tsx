import RegisterButton from "@/components/register-button";
import Image from "next/image";

const arts = [
    '/student/1.jpg',
    '/student/2.jpg',
    '/student/3.jpg',
    '/student/4.jpg'
]

export default function OurWork() {
    return (
        <div className="relative w-full min-h-screen ">
            {/* Background Image */}
            <Image
                src="/section-4.png"
                alt="Madhubani Art Background"
                fill
                priority
                className="object-cover -z-10"
            />
            <div className="mx-auto px-4 md:px-0 max-w-5xl py-8 md:py-16">
                <h1 className="text-2xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16">
                    Few Paintings done by our Students
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {arts.map((art, index) => (
                        <div key={art} className="relative w-full h-full">

                            <Image src={art} alt="art" height={600} width={600} className="rounded-lg object-cover" />
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