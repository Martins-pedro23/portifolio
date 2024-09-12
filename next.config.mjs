import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '',
            },
        ],
    },
};

export default withNextVideo(nextConfig, {
    provider: "vercel-blob",
    token: process.env.BLOB_READ_WRITE_TOKEN,
});