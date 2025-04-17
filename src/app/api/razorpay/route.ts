import { InsertDataIntoSheet } from "@/action/sheet";
import { NextRequest, NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export const POST = async (req: NextRequest) => {
    try {
        const formData = await req.formData();
        // console.log('Form data is ', formData)
        const bodyData = Object.fromEntries(formData);
        // console.log("bodyData", bodyData)

        const { razorpay_payment_id, razorpay_order_id, razorpay_signature, name, email, whatsapp } = bodyData as {
            razorpay_payment_id: string;
            razorpay_order_id: string;
            razorpay_signature: string;
            name: string;
            email: string;
            whatsapp: string;
        };

        if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
            throw new Error('Missing required parameters');
        }

        const razorpaySecret = process.env.KEY_SECRET;
        console.log(razorpaySecret)
        if (!razorpaySecret) {
            throw new Error('KEY_SECRET is not defined');
        }

        let isVerified = validatePaymentVerification({
            "order_id": razorpay_order_id,
            "payment_id": razorpay_payment_id
        },
            razorpay_signature, razorpaySecret);

        if (isVerified) {
            await InsertDataIntoSheet(name, email, whatsapp, razorpay_payment_id)
            const url = req.nextUrl.clone();
            url.pathname = '/workshop/checkout/payment-success';
            url.searchParams.set('payment_id', 'e68578c450f6a12ef11d37e5ecf913d7148ec720c482682fc8377e80ee7b4309');
            return NextResponse.redirect(url);
        } else {
            console.log("Payment verification failed");
            return NextResponse.json({ message: "Payment verification failed" }, { status: 400 });
        }

    } catch (error) {
        console.log("Error during payment verification:", error);
        return NextResponse.json({ error: "An error occurred during payment verification" }, { status: 500 });
    }
};
