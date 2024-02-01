module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.ts" },
    autoprefixer: {
      browsers: ["last 2 versions", "> 1%"],
      cascade: false
    },
  },
};
