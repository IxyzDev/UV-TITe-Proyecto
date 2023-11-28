// comunicaciones.test.ts
import request from 'supertest';
import app from '../index'; // Ajusta la ruta a tu archivo de aplicación

describe('Comunicaciones Controller', () => {
  let nuevaComunicacionId: string;

  it('debe crear una comunicación', async () => {
    const dataComunicacion = {
      // Añade aquí los datos necesarios para crear una comunicación
    };

    const response = await request(app)
      .post('/comunicaciones') // Ajusta a tu endpoint de creación
      .send(dataComunicacion);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    nuevaComunicacionId = response.body.id; // Guarda el ID para pruebas futuras
  });

  it('debe obtener todas las comunicaciones', async () => {
    const response = await request(app)
      .get('/comunicaciones') // Ajusta a tu endpoint de obtención
      .send();

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debe actualizar una comunicación', async () => {
    const datosActualizados = {
      // Añade aquí los datos actualizados para la comunicación
    };

    const response = await request(app)
      .put(`/comunicaciones/${nuevaComunicacionId}`) // Ajusta a tu endpoint de actualización
      .send(datosActualizados);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', nuevaComunicacionId);
  });

  it('debe eliminar una comunicación', async () => {
    const response = await request(app)
      .delete(`/comunicaciones/${nuevaComunicacionId}`) // Ajusta a tu endpoint de eliminación
      .send();

    expect(response.statusCode).toBe(200);
  });

  // Agrega más pruebas según sea necesario
});
