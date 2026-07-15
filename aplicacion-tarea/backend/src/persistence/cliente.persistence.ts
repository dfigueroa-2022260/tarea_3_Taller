import { pool } from './db';
import { Cliente } from '../models/cliente.model';

// Consultas SQL centralizadas: los controladores no hablan directo con la BD.

export const obtenerClientes = async (): Promise<Cliente[]> => {
  const resultado = await pool.query(
    'SELECT codigo_cliente, nombre_cliente, direccion_cliente, telefono FROM clientes ORDER BY codigo_cliente ASC'
  );
  return resultado.rows;
};

export const insertarCliente = async (cliente: Cliente): Promise<Cliente> => {
  const { nombre_cliente, direccion_cliente, telefono } = cliente;

  const resultado = await pool.query(
    `INSERT INTO clientes (nombre_cliente, direccion_cliente, telefono)
     VALUES ($1, $2, $3)
     RETURNING codigo_cliente, nombre_cliente, direccion_cliente, telefono`,
    [nombre_cliente, direccion_cliente, telefono]
  );

  return resultado.rows[0];
};
