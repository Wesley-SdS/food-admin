import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        app: 'minmax(18rem, 20rem) 1fr',
        profile: 'min-content 1fr min-content'
      },
      maxWidth:{
        app: '700px',
      },

      colors:{
        wess:'#333',
      },
     
    },
  },
  plugins: [],
}
export default config
