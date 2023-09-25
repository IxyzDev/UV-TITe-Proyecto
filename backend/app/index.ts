import express from 'express';
import cors from 'cors';
import db from './models';

// Importación de las rutas

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // middleware que transforma el req.body a JSON

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha en el puerto ${PORT}`);
  });
}).catch((err: Error) => console.error('Error al sincronizar la base de datos:', err));



app.get('/', (_req, res) => {
  res.json({ message: 'FELICIDADES LOGRASTE SER FELIZ' });
});

export default app;
