import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${path.join(
      process.cwd(),
      "_mantine"
    )}" as mantine;`,
  },
};

export default nextConfig;
