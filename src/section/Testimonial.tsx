
import RegisterButton from "@/components/register-button";
import Image from "next/image";

const testimonials = [
    '/review/1.jpg',
    '/review/2.jpg',
    '/review/3.jpg',
    '/review/4.jpg',
    '/review/5.jpg',
    '/review/6.jpg',
    '/review/7.jpg',
    '/review/8.jpg',
    '/review/9.jpg',
    '/review/10.jpg'
]

export default function Testimonial() {
    return (
        <div className="relative w-full min-h-screen ">
            {/* Background Image */}
            <Image
                src="/section-3.jpg"
                alt="Madhubani Art Background"
                fill
                priority
                className="object-cover -z-10"
            />
            <div className="mx-auto px-4 md:px-0 max-w-5xl py-8 md:py-16">
                <h1 className="text-2xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16">
                    See feelings of Our Previous Students
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full">
                    {testimonials.map((testimonial, index) => (
                        <div key={testimonial} className="relative w-full h-full">

                            <Image src={testimonial} alt="Testimonial" height={600} width={600} className="rounded-lg object-cover" />
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
