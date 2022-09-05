// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }
//
// module.exports = {
//     basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//     assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH
// }
//
// module.exports = nextConfig

/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: './',
};

export default   nextConfig;