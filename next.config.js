/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // ...
    NEXT_PUBLIC_SERVER_URL: 'https://fpt-smarthome.vn', // Thay thế 'your-domain.com' bằng tên miền của bạn
  },
  eactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  
};

module.exports = nextConfig;
