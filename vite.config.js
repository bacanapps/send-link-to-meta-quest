export default defineConfig({
  base: '/send-link-to-meta-quest/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
