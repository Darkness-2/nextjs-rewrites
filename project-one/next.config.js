const PROJECT_TWO_URL = "http://localhost:3001";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      // Using fallback here as the offical Next example (https://github.com/vercel/next.js/tree/canary/examples/with-zones)
      // is expecting you to add a rewrite for each page or sub-folder you want to redirect for.
      // That works fine, but in our case we use fallback as we want project-one to redirect to
      // project-two for anything not existing on project-one.
      fallback: [
        // Ok so this is kind of confusing
        // In project-two, we set a basePath of /two; therefore, all files in project-two are at /two/:some-path
        // That includes static files and all _next stuff
        // Therefore, we need two redirect rules
        // This order is mandatory
        // This first one is taking in requests project-two is firing for its own content which it expects at /two/:whatever
        // Therefore, this first redirect rule directs it to the right place
        {
          source: "/two/:path*",
          destination: `${PROJECT_TWO_URL}/two/:path*`
        },
        // Then, this rule is reading for any /:path* that does not exist on project-one and redirecting the user to project-two
        // If this rule is put first or the first rule is omitted, it breaks because this rule would redirect from /two/:whatever to /two/two/:whatever
        {
          source: "/:path*",
          destination: `${PROJECT_TWO_URL}/two/:path*`
        }
      ]
    };
  }
};

module.exports = nextConfig;
