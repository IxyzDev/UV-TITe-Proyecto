// ubicaciones.test.ts
import request from 'supertest';
import app from '../index'; // Ajusta la ruta a tu aplicación

describe('Ubicaciones Controller', () => {
  let nuevaUbicacionId: string;

  it('debe crear una ubicación', async () => {
    const dataUbicacion = {
      // Añade aquí los datos necesarios para crear una ubicación
    };

    const response = await request(app)
      .post('/ubicaciones') // Ajusta a tu endpoint de creación
      .send(dataUbicacion);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    nuevaUbicacionId = response.body.id; // Guarda el ID para pruebas futuras
  });

  it('debe obtener todas las ubicaciones', async () => {
    const response = await request(app)
      .get('/ubicaciones') // Ajusta a tu endpoint de obtención
      .send();

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debe actualizar una ubicación', async () => {
    const datosActualizados = {
      // Añade aquí los datos actualizados para la ubicación
    };

    const response = await request(app)
      .put(`/ubicaciones/${nuevaUbicacionId}`) // Ajusta a tu endpoint de actualización
      .send(datosActualizados);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', nuevaUbicacionId);
  });

  it('debe eliminar una ubicación', async () => {
    const response = await request(app)
      .delete(`/ubicaciones/${nuevaUbicacionId}`) // Ajusta a tu endpoint de eliminación
      .send();

    expect(response.statusCode).toBe(200);
  });

  // Agrega más pruebas según sea necesario
});
