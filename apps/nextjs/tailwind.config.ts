import sharedConfig from 'ai-tailwinds'
import { type Config } from 'tailwindcss'

const config: Pick<Config, 'presets' | 'content' | 'darkMode' | 'theme'> = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    '../../packages/uis/src/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [sharedConfig],
  theme: {
    
  }
}

export default config
