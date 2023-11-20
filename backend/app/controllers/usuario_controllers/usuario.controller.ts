//import { v4 as uuidv4 } from "uuid";

import db from "../../models";
import { UsuarioInterface } from "../../interfaces/types";

import * as verif from "./usuario.verif";
import bcrypt from "bcrypt";

const Usuario = db.Usuarios;
const saltRounds = 10;

const verifUsuario = async (object: any): Promise<UsuarioInterface> => {
  const newUsuarioEntry: UsuarioInterface = {
    nombre_usuario: verif.parseNombre(object.nombre_usuario),
    nombre_personal: verif.parseNombrePersonal(object.nombre_personal),
    contrasena: verif.parseContrasena(object.contrasena),
    admin: verif.parseAdmin(object.admin),
  };
  return newUsuarioEntry;
};

// Controlador para crear un nuevo usuario
export const postUsuario = async (object: any): Promise<UsuarioInterface> => {
  const newUsuarioEntry: UsuarioInterface = await verifUsuario(object);
  newUsuarioEntry.contrasena = await bcrypt.hash(newUsuarioEntry.contrasena, saltRounds);
  return await Usuario.create(newUsuarioEntry);
};

// Controlador para obtener todos los usuarios
export const getUsuarios = async (): Promise<UsuarioInterface[]> => {
  return await Usuario.findAll();
};

// Controlador para obtener un usuario por ID
export const getOneUsuario = async (object: any): Promise<UsuarioInterface> => {
  return Usuario.findByPk(object);
};

// Controlador para actualizar un usuario por ID
export const putUsuario = async (usuario_ID: string, object: any): Promise<void> => {
  try {
    // Validación de los datos de entrada
    const updateUsuario = await verifUsuario(object);

    // Intenta actualizar el usuario directamente
    const [updatedRows] = await Usuario.update(updateUsuario, {
      where: { usuario_ID },
    });

    // Si no se actualizó ninguna fila, el usuario no existe
    if (updatedRows === 0) {
      throw new Error("El usuario a actualizar no existe");
    }
  } catch (error: any) {
    throw new Error("Error al actualizar el usuario: " + error.message);
  }
};

// Controlador para eliminar un usuario por ID
export const deleteusuario = async (object: any): Promise<void> => {
  try {
    const resultado = await Usuario.destroy({
      where: { usuario_ID: object },
      force: true,
    });
    console.log(object);

    if (resultado === 0) {
      throw new Error("Usuario no encontrado o ya eliminado");
    }
  } catch (error: any) {
    throw new Error("Error al eliminar el usuario: " + error.message);
  }
};

/*
################################################################################################
################################################################################################
################################################################################################
*/

// Controlador para obtener todos los usuarios
export const loginUsuario = async (object: any): Promise<boolean> => {
  try {
    const { nombre_usuario, contrasena } = object;

    // Buscar al usuario por su nombre de usuario
    const usuario = await Usuario.findOne({ where: { nombre_usuario } });

    // Si el usuario no existe, devuelve falso
    if (!usuario) {
      return false;
    }

    // Comparar la contraseña proporcionada con la almacenada
    const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

    // Devolver verdadero si las contraseñas coinciden, de lo contrario falso
    return isMatch;
  } catch (error) {
    console.error("Error en el login: ", error);
    throw new Error("Error al intentar iniciar sesión");
  }
};
