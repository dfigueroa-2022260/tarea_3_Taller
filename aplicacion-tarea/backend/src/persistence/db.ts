import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'admin',
  database: process.env.DB_NAME || 'clientes_db',
});

// Verificar conexión al iniciar
pool.connect()
  .then((client) => {
    console.log('✅ Conexión a PostgreSQL establecida correctamente');
    client.release();
  })
  .catch((err) => {
    console.error('❌ Error al conectar con PostgreSQL:', err.message);
  });
