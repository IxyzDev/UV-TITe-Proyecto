import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo Operadores

const Operadores = db.Operadores; // Reemplaza "Operadores" con el nombre correcto de tu modelo

// Controlador para crear un nuevo operador
export const createOperador = async (req: Request, res: Response): Promise<void> => {
  try {
    const { operador_ID, funcionario_ID } = req.body;

    // Valida los datos de entrada
    if (!operador_ID || !funcionario_ID) {
      res.status(400).json({ success: false, message: 'Datos de operador incompletos' });
      return;
    }

    // Crea un nuevo operador en la base de datos
    const newOperador = await Operadores.create({ operador_ID, funcionario_ID });

    res.status(201).json({ success: true, message: 'Operador registrado con éxito', data: newOperador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al registrar el operador' });
  }
};

// Controlador para obtener todos los operadores
export const getAllOperadores = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todos los operadores en la base de datos
    const operadores = await Operadores.findAll();

    res.status(200).json({ success: true, data: operadores });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener operadores' });
  }
};

// Controlador para obtener un operador por ID
export const getOperadorById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { operador_ID } = req.params;

    // Busca un operador por su ID en la base de datos
    const operador = await Operadores.findByPk(operador_ID);

    if (!operador) {
      res.status(404).json({ success: false, message: 'Operador no encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: operador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener el operador' });
  }
};

// Controlador para actualizar un operador por ID
export const updateOperador = async (req: Request, res: Response): Promise<void> => {
  try {
    const { operador_ID } = req.params;
    const { funcionario_ID } = req.body;

    // Busca un operador por su ID en la base de datos
    const operador = await Operadores.findByPk(operador_ID);

    if (!operador) {
      res.status(404).json({ success: false, message: 'Operador no encontrado' });
      return;
    }

    // Actualiza los datos del operador
    operador.funcionario_ID = funcionario_ID; // Actualiza los campos que necesites

    await operador.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Operador actualizado con éxito', data: operador });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el operador' });
  }
};

// Controlador para eliminar un operador por ID
export const deleteOperador = async (req: Request, res: Response): Promise<void> => {
  try {
    const { operador_ID } = req.params;

    // Busca un operador por su ID en la base de datos
    const operador = await Operadores.findByPk(operador_ID);

    if (!operador) {
      res.status(404).json({ success: false, message: 'Operador no encontrado' });
      return;
    }

    // Elimina el operador de la base de datos
    await operador.destroy();

    res.status(200).json({ success: true, message: 'Operador eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el operador' });
  }
};
