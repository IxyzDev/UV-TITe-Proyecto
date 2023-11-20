export interface bigReporteInterfaceReceived {
  // Campos reporte normal
  fecha_envio: string;
  hora_envio: string;
  hora_evento: string;
  nombre_patrullero: string; // Requerido
  motivo_detalle: string;
  observaciones: string; // Opcional
  grupo_delictual: string; // Opcional
  num_movil: number;

  // Campos usuario
  nombre_usuario: string; // Un usuario puede tener muchos reportes

  // Campos direccion
  direccion: string; // Requerido
  coordenadas: string;

  // Campos de comunicacion
  medio_comunicacion: string; // Requerido
  nombre_contribuyente: string; // Opcional
  telefono: string; // Requerido
}
