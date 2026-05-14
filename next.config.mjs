/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/team/johnette-talkpa",
        destination: "/team/johnett-s-talkpa",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/products/huixor/Huixor.exe",
        headers: [
          { key: "Content-Type", value: "application/octet-stream" },
          { key: "Content-Disposition", value: 'attachment; filename="Huixor.exe"' },
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ]
  },
}

export default nextConfig
