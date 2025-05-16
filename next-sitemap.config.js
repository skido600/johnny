/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://johnny-tech-academy.vercel.app/",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  changefreq: "daily",
  priority: 0.8,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/*"] },
    ],
  },
};

export default config;
