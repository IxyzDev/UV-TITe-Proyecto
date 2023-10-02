import { Request, Response } from 'express';
import db from '../../models'; // Asegúrate de importar correctamente tu modelo Funcionarios

const Funcionarios = db.Funcionarios; // Reemplaza "Funcionarios" con el nombre correcto de tu modelo

// Controlador para crear un nuevo funcionario
export const createFuncionario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { funcionario_ID, nombre_funcionario, apellido_funcionario, tipo_funcionario } = req.body;

    // Valida los datos de entrada
    if (!funcionario_ID || !nombre_funcionario || !apellido_funcionario || !tipo_funcionario) {
      res.status(400).json({ success: false, message: 'Datos de funcionario incompletos' });
      return;
    }

    // Crea un nuevo funcionario en la base de datos
    const nuevoFuncionario = await Funcionarios.create({
      funcionario_ID,
      nombre_funcionario,
      apellido_funcionario,
      tipo_funcionario,
    });

    res.status(201).json({
      success: true,
      message: 'Funcionario registrado con éxito',
      data: nuevoFuncionario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error al registrar el funcionario',
    });
  }
};

// Controlador para obtener todos los funcionarios
export const getAllFuncionarios = async (_req: Request, res: Response): Promise<void> => {
  try {
    // Consulta todos los funcionarios en la base de datos
    const funcionarios = await Funcionarios.findAll();

    res.status(200).json({ success: true, data: funcionarios });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener los funcionarios' });
  }
};

// Controlador para obtener un funcionario por ID
export const getFuncionarioById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { funcionario_ID } = req.params;

    // Busca un funcionario por su ID en la base de datos
    const funcionario = await Funcionarios.findByPk(funcionario_ID);

    if (!funcionario) {
      res.status(404).json({ success: false, message: 'Funcionario no encontrado' });
      return;
    }

    res.status(200).json({ success: true, data: funcionario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al obtener el funcionario' });
  }
};

// Controlador para actualizar un funcionario por ID
export const updateFuncionario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { funcionario_ID } = req.params;
    const { nombre_funcionario, apellido_funcionario, tipo_funcionario } = req.body;

    // Busca un funcionario por su ID en la base de datos
    const funcionario = await Funcionarios.findByPk(funcionario_ID);

    if (!funcionario) {
      res.status(404).json({ success: false, message: 'Funcionario no encontrado' });
      return;
    }

    // Actualiza los datos del funcionario
    funcionario.nombre_funcionario = nombre_funcionario; // Actualiza los campos que necesites
    funcionario.apellido_funcionario = apellido_funcionario;
    funcionario.tipo_funcionario = tipo_funcionario;

    await funcionario.save(); // Guarda los cambios en la base de datos

    res.status(200).json({ success: true, message: 'Funcionario actualizado con éxito', data: funcionario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al actualizar el funcionario' });
  }
};

// Controlador para eliminar un funcionario por ID
export const deleteFuncionario = async (req: Request, res: Response): Promise<void> => {
  try {
    const { funcionario_ID } = req.params;

    // Busca un funcionario por su ID en la base de datos
    const funcionario = await Funcionarios.findByPk(funcionario_ID);

    if (!funcionario) {
      res.status(404).json({ success: false, message: 'Funcionario no encontrado' });
      return;
    }

    // Elimina el funcionario de la base de datos
    await funcionario.destroy();

    res.status(200).json({ success: true, message: 'Funcionario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error al eliminar el funcionario' });
  }
};
