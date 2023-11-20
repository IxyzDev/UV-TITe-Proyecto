import express from "express";
import cors from "cors";
import db from "./models";

// Importación de las rutas CRUD

import comunicacionRouter from "./routes/comunicacion.routes";
import ubicacionRouter from "./routes/ubicacion.routes";
import reporteRouter from "./routes/reporte.routes";
import usuarioRouter from "./routes/usuario.routes";

//import funcionarioRouter from "./routes/crud/funcionario.routes";
//import movilRouter from "./routes/crud/movil.routes";

//import patrullero from "./routes/crud/patrullero.routes";
//import operador from "./routes/crud/operador.routes";
//import asignacionPM from "./routes/crud/asig.pat.mov.routes";

//import asignacionPR from "./routes/crud/asig.pat.rep.routes";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json()); // middleware que transforma el req.body a JSON

db.sequelize
  .sync({ force: false }) // BD reset
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Se escucha en el puerto ${PORT}`);
    });
  })
  .catch((err: Error) => console.error("Error al sincronizar la base de datos:", err));

app.get("/", (_req, res) => {
  res.json({ message: "FELICIDADES LOGRASTE SER FELIZ" });
});

app.use("/comunicacion", comunicacionRouter);
app.use("/ubicacion", ubicacionRouter);
app.use("/reporte", reporteRouter);
app.use("/usuario", usuarioRouter);

// app.use("/asignacionpr", asignacionPR);
// app.use("/asignacionpm", asignacionPM);
// app.use("/patrullero", patrullero);
// app.use("/operador", operador);
// app.use("/funcionario", funcionarioRouter);
// app.use("/movil", movilRouter);
export default app;
