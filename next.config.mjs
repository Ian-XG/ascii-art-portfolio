import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Only apply the GitHub Pages base path for the Pages build, so local
// `next dev` keeps serving cleanly at http://localhost:3000/.
const isPages = process.env.GITHUB_PAGES === 'true'
const repo = '/ascii-art-portfolio'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isPages ? repo : undefined,
  assetPrefix: isPages ? repo : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isPages ? repo : '',
  },
  turbopack: {
    root: __dirname,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
