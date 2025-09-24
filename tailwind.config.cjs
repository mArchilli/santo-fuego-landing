module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Geist Sans',
          'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'Noto Sans', 'Liberation Sans', 'Helvetica Neue', 'sans-serif'
        ],
        mono: [
          'Geist Mono',
          'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'
        ]
      },
      colors: {
        primary: '#000000',
        accent: '#b91c1c',
        gold: '#d4af37'
      }
    }
  }
}