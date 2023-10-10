/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'resources.pulse.icc-cricket.com'
            }
        ]
    }
}

module.exports = nextConfig
