import { Router } from 'express';
import { listarClientes, agregarCliente } from '../controllers/cliente.controller';

const router = Router();

router.get('/', listarClientes);
router.post('/', agregarCliente);

export default router;
