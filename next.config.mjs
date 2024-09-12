import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
};

export default withNextVideo(nextConfig, {
    provider: "vercel-blob",
    token: process.env.BLOB_READ_WRITE_TOKEN,
});