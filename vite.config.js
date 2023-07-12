const mode = process.env.NODE_ENV === "production" ? "production" : "development";

export default {
  root: "src",
  base: "/spotify-premium-landing-clone/",
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};