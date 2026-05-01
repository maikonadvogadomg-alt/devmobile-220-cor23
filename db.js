const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // Ou configure individualmente:
  // host: 'localhost',
  // port: 5432,
  // database: 'meu_banco',
  // user: 'postgres',
  // password: 'senha',
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Testar conexao
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('Erro ao conectar:', err);
  else console.log('PostgreSQL conectado:', res.rows[0].now);
});

// Criar tabelas
async function createTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `);
  console.log('Tabelas criadas!');
}

createTables();
module.exports = pool;
