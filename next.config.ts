import type { NextConfig } from "next"
import { svgrWebpackConfig } from "./webpackConfig/svgrWebpackConfig"

const nextConfig: NextConfig = {
    eslint: {
        // ignoreDuringBuilds: true,
    },
    typescript: {
        // ignoreBuildErrors: true,
    },
    reactStrictMode: false,
    webpack(config) {
        return svgrWebpackConfig(config)
    },

    /* config options here */
}

export default nextConfig
