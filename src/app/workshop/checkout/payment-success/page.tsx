"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";

export default function PaymentSuccessPage() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const paymentId = searchParams.get('payment_id');
    if (paymentId !== 'e68578c450f6a12ef11d37e5ecf913d7148ec720c482682fc8377e80ee7b4309') {
        redirect('/workshop')
    }

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    // Set your WhatsApp group link here
    const whatsappGroupLink = "https://chat.whatsapp.com/E2cTrzWnco4IMdBxWb1WnY";

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            <div className="max-w-lg w-full bg-white shadow-lg rounded-lg overflow-hidden my-8">
                <div className="bg-black text-white p-4 text-center flex flex-col justify-between items-center">
                    <Link href="/workshop" className='block relative h-10 w-10 rounded-full overflow-hidden'>
                        <Image src='https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208' alt='logo' height={50} width={150} className='object-contain' />
                    </Link>
                    <p className="text-gray-400 text-sm">Srijan Mithila</p>
                </div>

                <div className="p-6 text-center text-black">
                    <h2 className="text-4xl font-bold mb-6">CONGRATS!!!</h2>

                    <p className="mb-4 font-medium text-lg">
                        You have successfully registered for – Madhubani Painting Workshop
                    </p>

                    <p className="mb-4">
                        I am super excited to have you as a part of it.
                    </p>

                    <p className="mb-4">
                        Please Join the exclusive WhatsApp group by clicking the button below.
                    </p>

                    <p className="mb-8">
                        All further communication will happen on the group 2 days before the workshop.
                    </p>

                    <div className="border-t border-gray-200 my-6"></div>

                    <a
                        href={whatsappGroupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg text-center transition-colors"
                    >
                        Join The WhatsApp Group Now!
                    </a>



                </div>
            </div>
        </div>
    );
}
