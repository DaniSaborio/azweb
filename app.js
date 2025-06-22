const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Desplegado automáticamente con GitHub Actions! 🚀');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

//qq
//8// Para ejecutar la aplicación, usa el comando:
// node app.js
// Asegúrate de tener Node.js y Express instalados en tu entorno.
// Puedes instalar Express con el comando: