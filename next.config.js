/** @type {import('next').NextConfig} */
const nextConfig = {
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
