# aplicacion-tarea

Aplicación full-stack para listar y agregar clientes.

**Tecnologías:** TypeScript, Angular, Node.js (Express), PostgreSQL

**Entidad:** `clientes` — código cliente, nombre cliente, dirección cliente, teléfono

---

## Estructura

```
aplicacion-tarea/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── cliente.controller.ts
│   │   ├── models/
│   │   │   └── cliente.model.ts
│   │   ├── persistence/          → capa que conecta y consulta la BD
│   │   │   ├── db.ts             → conexión a PostgreSQL (contraseña: admin)
│   │   │   └── cliente.persistence.ts
│   │   ├── routes/
│   │   │   └── cliente.routes.ts
│   │   └── app.ts                → arranca el servidor Express
│   ├── data/
│   │   ├── clientes.json         → datos de referencia/respaldo (NO es la fuente real)
│   │   └── schema.sql            → script para crear la BD y tabla en Postgres
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── cliente-form/     → formulario para agregar clientes
    │   │   └── cliente-list/     → tabla donde se muestran los clientes
    │   ├── models/                → espejo del modelo del backend
    │   ├── services/              → ClienteService, conecta con la API vía HttpClient
    │   ├── app.components.ts      → componente raíz, une form + list
    │   ├── app.config.ts
    │   └── styles.css
    ├── main.ts
    ├── angular.json
    ├── package.json
    └── tsconfig.json
```

> **Nota sobre `data/clientes.json`:** la app SIEMPRE lee y escribe contra PostgreSQL a través de `persistence/`. El archivo `clientes.json` es solo un respaldo/semilla de referencia; los mismos datos están cargados en `data/schema.sql` para poblar la base real.

---

## 1. Base de datos (PostgreSQL)

Contraseña usada por la app: **admin**

```
psql -U postgres -f backend/data/schema.sql
```

Esto crea la base `clientes_db`, la tabla `clientes` y carga los mismos clientes de ejemplo que están en `clientes.json`.

Si tu contraseña real de PostgreSQL no es `admin`, edita `backend/.env` (`DB_PASSWORD`).

## 2. Backend

```
cd backend
npm install
npm run dev
```

Servidor en `http://localhost:3000`.

Endpoints:
- `GET /api/clientes` → lista todos los clientes (desde Postgres)
- `POST /api/clientes` → agrega un cliente (`nombre_cliente`, `direccion_cliente`, `telefono`)

## 3. Frontend (Angular)

```
cd frontend
npm install
npm start
```

Abre `http://localhost:4200`.
