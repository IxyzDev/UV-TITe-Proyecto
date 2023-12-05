// usuarios.test.ts
import request from 'supertest';
import app from '../index'; // Ajusta la ruta a tu aplicación

describe('Usuarios Controller', () => {
  let nuevoUsuarioId: string;

  it('debe crear un usuario', async () => {
    const dataUsuario = {
      // Añade aquí los datos necesarios para crear un usuario
    };

    const response = await request(app)
      .post('/usuarios') // Ajusta a tu endpoint de creación
      .send(dataUsuario);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    nuevoUsuarioId = response.body.id; // Guarda el ID para pruebas futuras
  });

  it('debe obtener todos los usuarios', async () => {
    const response = await request(app)
      .get('/usuarios') // Ajusta a tu endpoint de obtención
      .send();

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debe actualizar un usuario', async () => {
    const datosActualizados = {
      // Añade aquí los datos actualizados para el usuario
    };

    const response = await request(app)
      .put(`/usuarios/${nuevoUsuarioId}`) // Ajusta a tu endpoint de actualización
      .send(datosActualizados);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', nuevoUsuarioId);
  });

  it('debe eliminar un usuario', async () => {
    const response = await request(app)
      .delete(`/usuarios/${nuevoUsuarioId}`) // Ajusta a tu endpoint de eliminación
      .send();

    expect(response.statusCode).toBe(200);
  });

  // Agrega más pruebas según sea necesario
});
