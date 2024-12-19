const pool = require('../index'); // Importa el pool configurado en el index.js

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users'); // Consulta para obtener todos los usuarios
    res.status(200).json(result.rows); // Devuelve los usuarios en formato JSON
  } catch (err) {
    console.error('Error al obtener usuarios:', err.message);
    res.status(400).json({ message: err.message });
  }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const { name, email } = req.body; // Extrae los datos del cuerpo de la solicitud

  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', // Consulta parametrizada
      [name, email]
    );
    res.status(201).json(result.rows[0]); // Devuelve el usuario recién creado
  } catch (err) {
    console.error('Error al crear usuario:', err.message);
    res.status(400).json({ message: err.message });
  }
};
