// sector.test.ts
import request from 'supertest';
import app from '../index'; // Importa tu aplicación Express

describe('API Endpoints', () => {
  it('POST /rutaParaCrearSector - debe responder con 201 para datos correctos', async () => {
    const response = await request(app).post('/rutaParaCrearSector').send({
      sector_ID: '1',
      nombre_sector: 'Sector A',
      unidad_vecinal: 'UV1'
    });
    expect(response.statusCode).toBe(201);
  });

  // Agrega pruebas similares para otros endpoints
});
