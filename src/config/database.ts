interface ConnectionConfig {
  host: String,
  user: String,
  password: String,
  database: String,
  charset: String,
  nestTables: boolean
}

interface DatabaseConfig {
  client: String,
  connection: ConnectionConfig
}

export default {
  client: process.env.DATABASE_CLIENT,
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    charset: 'utf8',
    nestTables: true
  }
} as DatabaseConfig
