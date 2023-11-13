import express from "express";
import cors from "cors";
import db from "./models";

// Importación de las rutas CRUD
import funcionarioRouter from "./routes/crud/funcionario.routes";
import movilRouter from "./routes/crud/movil.routes";
import comunicacionRouter from "./routes/crud/comunicacion.routes";
import ubicacionRouter from "./routes/crud/ubicacion.routes";
import patrullero from "./routes/crud/patrullero.routes";
import operador from "./routes/crud/operador.routes";
import asignacionPM from "./routes/crud/asig.pat.mov.routes";
import reporteRouter from "./routes/crud/reporte.routes";
import asignacionPR from "./routes/crud/asig.pat.rep.routes";

// Importacion rutas integracion
import ingresarReporte from "./routes/ingresar.reporte.routes";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json()); // middleware que transforma el req.body a JSON

db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Se escucha en el puerto ${PORT}`);
    });
  })
  .catch((err: Error) =>
    console.error("Error al sincronizar la base de datos:", err)
  );

app.get("/", (_req, res) => {
  res.json({ message: "FELICIDADES LOGRASTE SER FELIZ" });
});

app.use("/funcionario", funcionarioRouter);
app.use("/movil", movilRouter);
app.use("/comunicacion", comunicacionRouter);
app.use("/ubicacion", ubicacionRouter);
app.use("/patrullero", patrullero);
app.use("/operador", operador);
app.use("/asignacionpm", asignacionPM);
app.use("/reporte", reporteRouter);
app.use("/asignacionpr", asignacionPR);

// Rutas integracion
app.use("/ingresarReporte", ingresarReporte);

export default app;
