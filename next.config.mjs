/** A static export for GitHub Pages: every page is an index.html in its own
 *  folder (`trailingSlash`), so /product/ and /cv/ resolve without rewrites. */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
