import RegisterButton from "@/components/register-button";
import Image from "next/image";

export default function Certificate() {
    return (
        <section className="bg-white py-8">
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-indigo-950">Honor your art with this special certificate</h1>
                <h3 className="text-center text-indigo-950 text-lg md:text-xl mt-4 mb-4">You will get this after complete workshop</h3>

                <div className="relative ">
                    <Image src="/workshop/certificate.png" alt="certificate" height={1000} width={1000} className="object-cover" />
                </div>
                <div className="flex justify-center items-center mt-4 md:mt-8 ">
                    <RegisterButton className="w-full max-w-2xl" />
                </div>
            </div>
        </section>
    )
}
