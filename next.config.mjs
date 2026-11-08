/** @type {import('next').NextConfig} */
const nextConfig = {
  /* The webpack dev server truncates gzipped responses above ~1MB on this
     machine, so large client chunks arrive as invalid JavaScript and the whole
     page fails to hydrate. Dev gets plain responses; production still
     compresses. */
  compress: process.env.NODE_ENV !== "development",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/team/jboy",
        destination: "/team/victor",
        permanent: true,
      },
      {
        source: "/team/johnette-talkpa",
        destination: "/team/johnett-s-talkpa",
        permanent: true,
      },
      {
        source: "/products/monrovia-hustle-independence-day",
        destination: "/products/monrovia-hustle/prototype#independence-day",
        permanent: true,
      },
      // The Independence Day Edition is now a section of the experiment prototypes page.
      {
        source: "/products/monrovia-hustle/prototype/independence-day",
        destination: "/products/monrovia-hustle/prototype#independence-day",
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
