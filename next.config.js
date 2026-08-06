/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/_next/image",
        has: [
          {
            type: "query",
            key: "url",
            value: ".*(profile-img|ogImage\\.png).*",
          },
        ],
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex, noarchive" },
        ],
      },
      {
        source: "/profile-img.jpeg",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex, noarchive" },
        ],
      },
      {
        source: "/ogImage.png",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noimageindex, noarchive" },
        ],
      },
      {
        source: "/api/sb-contact",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
