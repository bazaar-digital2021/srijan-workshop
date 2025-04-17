"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Lock, MapPin, ShoppingBag, Sparkle, Zap, CreditCard } from "lucide-react";
import Link from "next/link";
import { initiate } from "@/action/payment-create";
import Script from "next/script";
import { toast } from "sonner";
import LoadingScreen from "@/components/LoadingScreen";

// Adding the Window interface extension for TypeScript
declare global {
    interface Window {
        Razorpay: any;
    }
}

export default function CheckoutPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await pay(99)
            toast("Payment is initiated. Please wait for the payment to be completed.")
            setIsSubmitting(false);
        } catch (error) {
            console.log("error in handleSubmit", error)
            toast.error("Payment failed. Please try again.")
        }

    };

    const pay = async (amount: number) => {
        // console.log('hello ',amount)
        setIsLoading(true);
        try {
            console.log("KEY_ID in client:", process.env.NEXT_PUBLIC_KEY_ID);
            const orderId = await initiate(amount)

            console.log("orderId is ", orderId)
            if (!process.env.NEXT_PUBLIC_KEY_ID) {
                console.log("KEY_ID is not defined");
                alert("KEY_ID is not defined");
                return;
            }
            var options = {
                "key": process.env.NEXT_PUBLIC_KEY_ID!, // Enter the Key ID generated from the Dashboard
                "amount": amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Srijan Mithila ", //your business name
                "description": "Workshop",
                "image": 'https://ik.imagekit.io/coit5wp1g/Logo_Srijan%20Mithila%20copy.png?updatedAt=1742932260208',
                "order_id": orderId.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response: any) {
                    // Create a form to submit payment data along with user form data
                    const form = document.createElement('form');
                    form.method = 'POST';
                    form.action = `${process.env.NEXT_PUBLIC_API_URL}/api/razorpay`;

                    // Add Razorpay response data
                    const razorpayFields = ['razorpay_payment_id', 'razorpay_order_id', 'razorpay_signature'];
                    razorpayFields.forEach(field => {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = field;
                        input.value = response[field];
                        form.appendChild(input);
                    });

                    // Add user form data
                    Object.entries(formData).forEach(([key, value]) => {
                        const input = document.createElement('input');
                        input.type = 'hidden';
                        input.name = key;
                        input.value = value as string;
                        form.appendChild(input);
                    });

                    // Submit the form
                    document.body.appendChild(form);
                    form.submit();
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                    "name": formData.name, //your customer's name
                    "message": formData.email,
                    "contact": formData.whatsapp //Provide the customer's phone number for better conversion rates 
                },
                "notes": {
                    "address": "Saurabh Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            }
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.log('error is caught', error)
            setIsLoading(false);
        }

    }

    return (
        <>
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
            <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 text-black">
                {isLoading && <LoadingScreen />}
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-2">
                        Secure Checkout
                    </h1>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        You're just one step away from unlocking the traditional art of Madhubani Painting
                    </p>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left section - Form */}
                        <div className="w-full lg:w-3/5 bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="bg-red-800 p-4 text-white">
                                <h2 className="text-xl font-bold">Complete Your Registration</h2>
                                <p className="text-sm">Fill in your details to secure your spot</p>
                            </div>

                            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                                <div className="space-y-4">
                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Full Name</span>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Name"
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-gray-700 font-medium">Email ID</span>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email ID"
                                            required
                                            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                        />
                                    </label>

                                    <label className="block">
                                        <span className="text-gray-700 font-medium">WhatsApp Number</span>
                                        <div className="mt-1 relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <div className="w-6 h-4 mr-2">
                                                    <svg viewBox="0 0 36 24" className="h-full w-full">
                                                        <rect width="36" height="8" fill="#FF9933" />
                                                        <rect width="36" height="8" y="8" fill="#FFFFFF" />
                                                        <rect width="36" height="8" y="16" fill="#138808" />
                                                        <circle cx="18" cy="12" r="2" fill="#000080" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="tel"
                                                name="whatsapp"
                                                value={formData.whatsapp}
                                                onChange={handleChange}
                                                placeholder="Whatsapp Number"
                                                required
                                                className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                                            />
                                        </div>
                                    </label>
                                </div>

                                <div className="border-t border-gray-200 pt-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-medium">Item</span>
                                        <span className="text-lg font-medium">Price</span>
                                    </div>

                                    <div className="bg-red-50 p-4 rounded-lg flex justify-between items-center mb-6">
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="radio"
                                                id="workshop"
                                                name="item"
                                                checked
                                                readOnly
                                                className="mt-1"
                                            />
                                            <div>
                                                <label htmlFor="workshop" className="font-medium text-gray-900 block">
                                                    Madhubani Painting Workshop
                                                </label>
                                                <span className="text-gray-600 text-sm">Limited Offer Price</span>
                                            </div>
                                        </div>
                                        <span className="text-xl font-semibold">INR 99</span>
                                    </div>

                                    <div className="bg-gray-50 p-5 rounded-lg mb-6 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Total</span>
                                            <span className="font-semibold">INR 99</span>
                                        </div>
                                        <div className="flex justify-between items-center border-t border-gray-200 pt-3">
                                            <span className="font-medium">Order Total</span>
                                            <span className="text-xl font-bold text-red-800">INR 99.00</span>
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="font-medium mb-3">Pay via</h3>
                                        <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg border border-gray-200">
                                            <input
                                                type="radio"
                                                id="razorpay"
                                                name="payment"
                                                checked
                                                readOnly
                                            />
                                            <label htmlFor="razorpay" className="font-medium">Razorpay</label>
                                        </div>
                                    </div>

                                    <div className="text-center p-4 bg-gray-50 rounded-lg mb-6">
                                        <div className="flex justify-center mb-2">
                                            <div className="h-10 flex items-center justify-center">
                                                <div className="bg-blue-900 text-white py-1 px-4 rounded flex items-center">
                                                    <CreditCard className="h-5 w-5 mr-2" />
                                                    <span className="font-bold">razorpay</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-sm text-gray-600">Completing payment with</p>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 px-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            "Processing..."
                                        ) : (
                                            <>
                                                Complete Order <ArrowRight size={18} />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Right section - Order summary and benefits */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            {/* Order benefits */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                    <Sparkle className="text-yellow-500" /> Why Join This Workshop?
                                </h3>

                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <Check className="text-green-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Learn Authentic Techniques</h4>
                                            <p className="text-gray-600 text-sm">Direct from an artist from Madhubani itself</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="text-green-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Live Interactive Session</h4>
                                            <p className="text-gray-600 text-sm">Personalized guidance during the 3-hour workshop</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="text-green-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">No Experience Needed</h4>
                                            <p className="text-gray-600 text-sm">Perfect for beginners and art enthusiasts alike</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-3">
                                        <Check className="text-green-500 h-6 w-6 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold">Cultural Enrichment</h4>
                                            <p className="text-gray-600 text-sm">Discover the rich history and traditions behind the art</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Special offer */}
                            <div className="bg-gradient-to-r from-red-800 to-red-600 text-white rounded-2xl shadow-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold">Special Offer</h3>
                                    <span className="bg-yellow-400 text-red-900 text-xs font-bold px-3 py-1 rounded-full">80% OFF</span>
                                </div>

                                <div className="mb-4 flex items-center gap-3">
                                    <span className="text-3xl font-bold">₹99</span>
                                    <span className="text-lg line-through opacity-70">₹499</span>
                                </div>

                                <div className="bg-white/10 rounded-lg p-3 mb-4">
                                    <div className="flex items-center gap-2">
                                        <Zap className="text-yellow-300" />
                                        <p className="text-sm font-medium">Limited time offer! Seats filling fast</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-sm">
                                    <Lock size={16} />
                                    <span>Secure payment with Razorpay</span>
                                </div>
                            </div>

                            {/* Workshop details */}
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-4">Workshop Details</h3>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                                            <ShoppingBag className="h-5 w-5 text-red-800" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Date & Time</p>
                                            <p className="font-semibold">April 18th, 2025 • 6 PM to 9 PM</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="h-10 w-10 bg-red-100 rounded-full flex items-center justify-center">
                                            <MapPin className="h-5 w-5 text-red-800" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500">Location</p>
                                            <p className="font-semibold">Zoom (Link will be shared after registration)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-600">
                            By completing your order, you agree to our{" "}
                            <Link href="#" className="text-red-800 underline hover:text-red-900">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="#" className="text-red-800 underline hover:text-red-900">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
