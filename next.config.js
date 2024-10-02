/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    remotePatterns:[
        {
            protocol:'https',
            hostname:'raw.githubusercontent.com'
        }
    ]
},

// publicRuntimeConfig: {
//     staticFolder: '/public',
//   },
}

module.exports = nextConfig
