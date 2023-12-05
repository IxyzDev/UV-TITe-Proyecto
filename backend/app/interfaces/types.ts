export interface ReportesInterface {
  reporte_ID: string; // Identificador de un reporte
  ubicacion_ID: string; // Varios reportes pueden estar en una ubicacion
  comunicacion_ID: string; // Una comunicacion puede tener un reporte
  nombre_usuario: string; // Un usuario puede tener muchos reportes
  fecha_envio: string;
  hora_envio: string;
  hora_evento: string;
  nombre_patrullero: string; // Requerido
  motivo_detalle: string;
  observaciones: string; // Opcional
  grupo_delictual: string; // Opcional
  num_movil: number;
}

export type VerifReportesInterface = Omit<
  ReportesInterface,
  "reporte_ID" | "ubicacion_ID" | "comunicacion_ID" | "nombre_usuario"
>;

export interface UbicacionInterface {
  ubicacion_ID: string;
  direccion: string; // Requerido
  coordenadas: string;
}

export type UbicacionInterfaceWSub = Omit<UbicacionInterface, "subsector_ID">;

export type VerifUbicacionInterface = Omit<UbicacionInterface, "ubicacion_ID" | "subsector_ID">;

export interface ComunicacionInterface {
  comunicacion_ID: string;
  medio_comunicacion: string; // Requerido
  nombre_contribuyente: string; // Opcional
  telefono: string; // Requerido
}

export type VerifComunicacionInterface = Omit<ComunicacionInterface, "comunicacion_ID">;

export interface UsuarioInterface {
  nombre_usuario: string;
  nombre_personal: string; // Requerido
  contrasena: string;
  admin: boolean; // ¿Es administrador?
}

export interface ReportUbi {
  direccion: string;
  nombre_usuario: string; // Corregido de "nombre_usario" a "nombre_usuario"
  nombre_patrullero: string; // Corregido de "nombre_parullero" a "nombre_patrullero"
  fecha_envio: string; // Corregido de "fecha_envo" a "fecha_envio"
  hora_evento: string; // Corregido de "hora_eveno" a "hora_evento"
  motivo_detalle: string; // Corregido de "motivo_dealle" a "motivo_detalle"
  grupo_delictual: string; // Corregido de "grupo_delctual" a "grupo_delictual"
  num_movil: number;
  nombre_contribuyente: string; // Corregido de "nombre_cotribuyente" a "nombre_contribuyente"
  telefono: string;
}
