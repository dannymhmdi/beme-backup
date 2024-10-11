/** @type {import('next').NextConfig} */
const nextConfig = {
//   experimental: {
//     modern: true,
//     polyfillsOptimization: true,
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.optimization.splitChunks.cacheGroups = {
//         default: false,
//       };
//     }
//     return config;
//   },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },

  // publicRuntimeConfig: {
  //     staticFolder: '/public',
  //   },
};

module.exports = nextConfig;






// module.exports = {
//   experimental: {
//     modern: true,
//     polyfillsOptimization: true,
//   },
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.optimization.splitChunks.cacheGroups = {
//         default: false,
//       };
//     }
//     return config;
//   },
// };
