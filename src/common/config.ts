const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../../.env')
});

const {
  PORT,
  NODE_ENV,
  JWT_SECRET_KEY,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
} = process.env;

const config = {
  PORT: PORT ?? 3000,
  NODE_ENV: NODE_ENV,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
  POSTGRES_USER,
  POSTGRES_PORT,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_HOST,
}

export default config;
