// reportes.test.ts
import request from 'supertest';
import app from '../index'; // Ajusta la ruta a tu aplicación

describe('Reportes Controller', () => {
  let nuevoReporteId: string;

  it('debe crear un reporte', async () => {
    const dataReporte = {
      // Añade aquí los datos necesarios para crear un reporte
    };

    const response = await request(app)
      .post('/reportes') // Ajusta a tu endpoint de creación
      .send(dataReporte);

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    nuevoReporteId = response.body.id; // Guarda el ID para pruebas futuras
  });

  it('debe obtener todos los reportes', async () => {
    const response = await request(app)
      .get('/reportes') // Ajusta a tu endpoint de obtención
      .send();

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('debe actualizar un reporte', async () => {
    const datosActualizados = {
      // Añade aquí los datos actualizados para el reporte
    };

    const response = await request(app)
      .put(`/reportes/${nuevoReporteId}`) // Ajusta a tu endpoint de actualización
      .send(datosActualizados);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', nuevoReporteId);
  });

  it('debe eliminar un reporte', async () => {
    const response = await request(app)
      .delete(`/reportes/${nuevoReporteId}`) // Ajusta a tu endpoint de eliminación
      .send();

    expect(response.statusCode).toBe(200);
  });

  // Agrega más pruebas según sea necesario
});
