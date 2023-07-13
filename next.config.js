/** @type {import('next').NextConfig} */
// const withPlugins = require('next-compose-plugins');
// import withImages from 'next-images';

const nextConfig = {
    reactStrictMode: false,
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/home',
            },
        ]
    },
    experimental: {
        appDir: true,
    },
}


module.exports = nextConfig
