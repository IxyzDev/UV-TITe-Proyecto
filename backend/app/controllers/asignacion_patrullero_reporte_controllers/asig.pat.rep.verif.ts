import db from '../../models'; 

export const isPatrullero = async (patrulleroFromRequest: any): Promise<string>=> {
    const patrullero = await db.Patrulleros.findByPk(patrulleroFromRequest);
    if (patrullero.patrullero_ID !== patrulleroFromRequest) {
        throw new Error("Patrullero no encontrado");
    }
  return patrulleroFromRequest
}

export const isReporte = async (reporteFromRequest: any): Promise<string>=> {
    const reporte = await db.Reportes.findByPk(reporteFromRequest);
    if (reporte.reporte_ID !== reporteFromRequest) {
        throw new Error("Reporte no encontrado");
    }
  return reporteFromRequest
}

export const isString = (string: string): boolean => {
  return typeof string === 'string'
}