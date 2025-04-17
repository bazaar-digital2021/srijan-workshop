"use server"
import Razorpay from "razorpay";
// import dotenv from "dotenv"
// dotenv.config()

export const initiate = async (amount: number) => {
    console.log("KEY_ID:", process.env.NEXT_PUBLIC_KEY_ID);
    console.log("KEY_SECRET:", process.env.KEY_SECRET);
    try {
        // const keyId = process.env.KEY_ID.trim();
        // const keySecret = process.env.KEY_SECRET.trim();


        var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET });

        let options = {
            amount: amount * 100,
            currency: 'INR'
        };
        console.log("options", options)

        let x = await instance.orders.create(options);
        return x;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};
