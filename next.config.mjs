/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                // hostname: '**',
                hostname: 'firebasestorage.googleapis.com',
            },
        ],
    },
};

export default nextConfig;
