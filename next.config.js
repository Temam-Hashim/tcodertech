/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  publicRuntimeConfig: {
    publicUrl: "public/file/",
  },
};

module.exports = nextConfig;

const withVideos = require("next-videos");
module.exports = withVideos();
