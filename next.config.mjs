/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
        TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID,
        TWILIO_AUTH_TOKEN:process.env.TWILIO_AUTH_TOKEN,
     },
};

export default nextConfig;
