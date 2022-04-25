// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  ...nextConfig,
  pwa: {
    dest: 'public',
    disable: !isProd,
  },
})
