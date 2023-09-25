export interface FuncionariosInterface {
  funcionario_ID: string;
  nombre_funcionario: string;
  apellido_funcionario: string;
  tipo_funcionario: string;
}

export interface OperadoresInterface {
  operador_ID: string;
  funcionario_ID: string;
}

export interface PatrullerosInterface {
  patrullero_ID: string;
  funcionario_ID: string;
}

export type OperadoresOnetoOnePatrullerosInterface = Omit<OperadoresInterface, 'funcionario_ID'>


export interface AsignacionPatrulleroMovilInterface {
  asignacion_movil_ID: string;
  patrullero_ID: string;
  matricula_ID: string;
}

export interface MovilesInterface {
  matricula_ID: string;
}

export interface ReportesInterface {
  reporte_ID: string;
  ubicacion_ID: string;
  comunicacion_ID: string;
  operador_ID: string;
  fecha_y_hora: string;
  detalle: string;
  observaciones: string;
  motivo: string;
  grupo_delictual: string;
  derivado: string;
}

export interface AsignacionPatrulleroReporteInterface {
  asignacion_reporte_ID: string;
  patrullero_ID: string;
  reporte_ID: string;
}

export interface ComunicacionInterface {
  comunicacion_ID: string;
  medio_comunicacion: string;
  nombre_contribuyente: string;
  telefono: string;
}

export interface UbicacionInterface {
  ubicacion_ID: string;
  sector_ID: string;
  direccion: string;
  coordenadas: string;
  n_domicilio: string;
  lugar: string;
}
export interface SectorInterface {
  sector_ID: string;
  nombre_sector: string;
  unidad_vecinal: string;
}

export interface SubSectorInterface {
  subsector_ID: string;
  nombre_subsector: string;
  sector_ID: string;
}

export interface movilInterface {
  matricula_ID: string;
}