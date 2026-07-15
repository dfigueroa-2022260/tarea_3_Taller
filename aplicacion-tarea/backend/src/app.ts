import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import clienteRoutes from './routes/cliente.routes';
import './persistence/db';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

export default app;
