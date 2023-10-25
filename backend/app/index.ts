import express from 'express';
import cors from 'cors';
import db from './models';

// Importación de las rutas
import funcionarioRouter from './routes/funcionario.routes';
import movilRouter from './routes/movil.routes';
import comunicacionRouter from './routes/comunicacion.routes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // middleware que transforma el req.body a JSON

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Se escucha en el puerto ${PORT}`);
  });
}).catch((err: Error) => console.error('Error al sincronizar la base de datos:', err));



app.get('/', (_req, res) => {
  res.json({ message: 'FELICIDADES LOGRASTE SER FELIZ' });
});

app.use("/funcionario", funcionarioRouter);
app.use("/movil", movilRouter);
app.use("/comunicacion", comunicacionRouter);

export default app;
