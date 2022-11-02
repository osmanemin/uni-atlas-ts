/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
      {
        source: '/universiteler',
        destination: '/universities',
      },
      {
        source: '/piyasa-raporu',
        destination: '/report',
      },
      {
        source: '/sehirler',
        destination: '/cities',
      },
      {
        source: '/bolumler',
        destination: '/departments',
      },
      {
        source: '/tercih-robotu',
        destination: '/choiceRobot',
      },
      {
        source: '/universiteler/:slug*',
        destination: '/universityDetail/:slug*',
      },
    ]
  },
}

module.exports = nextConfig
