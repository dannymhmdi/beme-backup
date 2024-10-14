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
  
  // assetPrefix: "https://lottie.host/embed/6acfe459-93a9-4e3f-a772-f6c3938c02ec/Y6SYk5vODN.json",
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
