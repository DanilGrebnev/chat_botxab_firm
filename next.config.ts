import type { NextConfig } from "next"
// import { svgrWebpackConfig } from "./svgrWebpackConfig"

const nextConfig: NextConfig = {
    experimental: {
        turbo: {
            rules: {
                "*.svg": {
                    loaders: ["@svgr/webpack"],
                    as: "*.js",
                },
            },
        },
    },

    /* config options here */
}

export default nextConfig
