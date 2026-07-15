-- Ejecutar en PostgreSQL (psql -U postgres)

CREATE DATABASE clientes_db;

\c clientes_db;

CREATE TABLE clientes (
    codigo_cliente    SERIAL PRIMARY KEY,
    nombre_cliente    VARCHAR(100) NOT NULL,
    direccion_cliente VARCHAR(150) NOT NULL,
    telefono          VARCHAR(20) NOT NULL
);

-- Datos de prueba (los mismos que están en data/clientes.json, como respaldo)
INSERT INTO clientes (nombre_cliente, direccion_cliente, telefono) VALUES
('Juan Pérez', '5ta avenida 10-20, Zona 1', '55512345'),
('María López', '3ra calle 4-56, Zona 10', '55598765');
