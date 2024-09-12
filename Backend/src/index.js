const express = require('express');
const app = express();
const routes = require('./routes/countryRoutes');
app.use(express.json());

app.use('/api', routes); 

// Manejo de errores
app.use((req, res, next) => {
  res.status(404).json({ message: 'Recurso no encontrado' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});