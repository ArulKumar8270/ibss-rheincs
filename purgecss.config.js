// PurgeCSS configuration to analyze custom.css
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // All Next.js app directory files
    './public/**/*.{html,js}',   // Public HTML/JS files
  ],
  css: ['./public/css/custom.css'],
  output: './public/css',
  // Optional: Add any classes/selectors that are dynamically added
  safelist: {
    standard: [],
    deep: [],
    greedy: [],
    keyframes: [],
    variables: []
  }
};
