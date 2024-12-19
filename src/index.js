const express = require('express');
const { Pool } = require('pg'); // Importar el cliente de PostgreSQL
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

dotenv.config();
const app = express();

// Configuración de conexión a PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(() => console.log('PostgreSQL conectado'))
  .catch(err => console.error('Error al conectar a PostgreSQL:', err));

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Usuarios',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar usuarios',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Cambia esto si usas otro puerto
      },
    ],
  },
  apis: ['./src/routes/*.js'], // Ruta a tus archivos de rutas
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Usar las rutas de usuario
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Exportar el pool para usarlo en otras partes de la app (como en las rutas)
module.exports = pool;
