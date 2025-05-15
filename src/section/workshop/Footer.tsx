import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-amber-200 text-black py-8 md:py-16">
            <div className="container mx-auto max-w-5xl flex flex-col gap-6">
                <p className="px-4 md:px-0">
                    NOTE: This website in no way is affiliated with Facebook™ or any Facebook™ entities. Once you leave Facebook™ the responsibility no longer is on their site. We make every attempt to clearly state and show all proof. We do not sell your email or any information. Can-Spam compliant.
                </p>
                <hr className="bg-black " />
                <p className="text-center  text-xl md:text-2xl">&copy; 2025 Srijan Mithila. All rights reserved.</p>
            </div>
        </footer>
    );
}