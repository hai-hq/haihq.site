import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/haifhir",
        destination: "/refhir",
        permanent: true,
      },
      {
        source: "/fhirstate",
        destination: "/refhir",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
