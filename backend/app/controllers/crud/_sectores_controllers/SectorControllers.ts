import { Request, Response } from "express";
import db from "../../../models"; // Asegúrate de importar correctamente tu modelo Sector

const Sector = db.Sector; // Reemplaza "Sector" con el nombre correcto de tu modelo

// Controlador para crear un nuevo sector
export const createSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sector_ID, nombre_sector, unidad_vecinal } = req.body;

    // Valida los datos de entrada
    if (!sector_ID || !nombre_sector || !unidad_vecinal) {
      res
        .status(400)
        .json({ success: false, message: "Datos de sector incompletos" });
      return;
    }

    // Crea un nuevo sector en la base de datos
    const nuevoSector = await Sector.create({
      sector_ID,
      nombre_sector,
      unidad_vecinal,
    });

    res.status(201).json({
      success: true,
      message: "Sector registrado con éxito",
      data: nuevoSector,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al registrar el sector",
    });
  }
};

// Controlador para obtener todos los sectores
export const getAllSectores = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    // Consulta todos los sectores en la base de datos
    const sectores = await Sector.findAll();

    res.status(200).json({ success: true, data: sectores });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener los sectores" });
  }
};

// Controlador para obtener un sector por ID
export const getSectorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sector_ID } = req.params;

    // Busca un sector por su ID en la base de datos
    const sector = await Sector.findByPk(sector_ID);

    if (!sector) {
      res.status(404).json({ success: false, message: "Sector no encontrado" });
      return;
    }

    res.status(200).json({ success: true, data: sector });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener el sector" });
  }
};

// Controlador para actualizar un sector por ID
export const updateSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sector_ID } = req.params;
    const { nombre_sector, unidad_vecinal } = req.body;

    // Busca un sector por su ID en la base de datos
    const sector = await Sector.findByPk(sector_ID);

    if (!sector) {
      res.status(404).json({ success: false, message: "Sector no encontrado" });
      return;
    }

    // Actualiza los datos del sector
    sector.nombre_sector = nombre_sector; // Actualiza los campos que necesites
    sector.unidad_vecinal = unidad_vecinal;

    await sector.save(); // Guarda los cambios en la base de datos

    res.status(200).json({
      success: true,
      message: "Sector actualizado con éxito",
      data: sector,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al actualizar el sector" });
  }
};

// Controlador para eliminar un sector por ID
export const deleteSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { sector_ID } = req.params;

    // Busca un sector por su ID en la base de datos
    const sector = await Sector.findByPk(sector_ID);

    if (!sector) {
      res.status(404).json({ success: false, message: "Sector no encontrado" });
      return;
    }

    // Elimina el sector de la base de datos
    await sector.destroy();

    res
      .status(200)
      .json({ success: true, message: "Sector eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al eliminar el sector" });
  }
};
