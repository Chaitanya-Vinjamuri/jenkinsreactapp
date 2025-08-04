import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'jenkinserp' // this is as for deployment folder name. it is not meant a repo name
})
