export const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://api.hildhome.com'
    : 'http://127.0.0.1:3000';
