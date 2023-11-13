import { Request, Response } from "express";
import db from "../../../models"; // Asegúrate de importar correctamente tu modelo SubSector

const SubSector = db.SubSector; // Reemplaza "SubSector" con el nombre correcto de tu modelo

// Controlador para crear un nuevo subsector
export const createSubSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { subsector_ID, nombre_subsector, sector_ID } = req.body;

    // Valida los datos de entrada
    if (!subsector_ID || !nombre_subsector || !sector_ID) {
      res
        .status(400)
        .json({ success: false, message: "Datos de subsector incompletos" });
      return;
    }

    // Crea un nuevo subsector en la base de datos
    const nuevoSubSector = await SubSector.create({
      subsector_ID,
      nombre_subsector,
      sector_ID,
    });

    res.status(201).json({
      success: true,
      message: "Subsector registrado con éxito",
      data: nuevoSubSector,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al registrar el subsector",
    });
  }
};

// Controlador para obtener todos los subsectores
export const getAllSubSectores = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    // Consulta todos los subsectores en la base de datos
    const subsectores = await SubSector.findAll();

    res.status(200).json({ success: true, data: subsectores });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener los subsectores" });
  }
};

// Controlador para obtener un subsector por ID
export const getSubSectorById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { subsector_ID } = req.params;

    // Busca un subsector por su ID en la base de datos
    const subsector = await SubSector.findByPk(subsector_ID);

    if (!subsector) {
      res
        .status(404)
        .json({ success: false, message: "Subsector no encontrado" });
      return;
    }

    res.status(200).json({ success: true, data: subsector });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al obtener el subsector" });
  }
};

// Controlador para actualizar un subsector por ID
export const updateSubSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { subsector_ID } = req.params;
    const { nombre_subsector, sector_ID } = req.body;

    // Busca un subsector por su ID en la base de datos
    const subsector = await SubSector.findByPk(subsector_ID);

    if (!subsector) {
      res
        .status(404)
        .json({ success: false, message: "Subsector no encontrado" });
      return;
    }

    // Actualiza los datos del subsector
    subsector.nombre_subsector = nombre_subsector; // Actualiza los campos que necesites
    subsector.sector_ID = sector_ID;

    await subsector.save(); // Guarda los cambios en la base de datos

    res
      .status(200)
      .json({
        success: true,
        message: "Subsector actualizado con éxito",
        data: subsector,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al actualizar el subsector" });
  }
};

// Controlador para eliminar un subsector por ID
export const deleteSubSector = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { subsector_ID } = req.params;

    // Busca un subsector por su ID en la base de datos
    const subsector = await SubSector.findByPk(subsector_ID);

    if (!subsector) {
      res
        .status(404)
        .json({ success: false, message: "Subsector no encontrado" });
      return;
    }

    // Elimina el subsector de la base de datos
    await subsector.destroy();

    res
      .status(200)
      .json({ success: true, message: "Subsector eliminado con éxito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error al eliminar el subsector" });
  }
};
