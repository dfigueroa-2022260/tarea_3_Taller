import { Request, Response } from 'express';
import { obtenerClientes, insertarCliente } from '../persistence/cliente.persistence';
import { Cliente } from '../models/cliente.model';

// Listar todos los clientes
export const listarClientes = async (_req: Request, res: Response): Promise<void> => {
  try {
    const clientes = await obtenerClientes();
    res.status(200).json(clientes);
  } catch (error) {
    console.error('Error al listar clientes:', error);
    res.status(500).json({ mensaje: 'Error al obtener los clientes' });
  }
};

// Agregar un nuevo cliente
export const agregarCliente = async (req: Request, res: Response): Promise<void> => {
  const { nombre_cliente, direccion_cliente, telefono }: Cliente = req.body;

  if (!nombre_cliente || !direccion_cliente || !telefono) {
    res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    return;
  }

  try {
    const nuevoCliente = await insertarCliente({ nombre_cliente, direccion_cliente, telefono });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error('Error al agregar cliente:', error);
    res.status(500).json({ mensaje: 'Error al agregar el cliente' });
  }
};
