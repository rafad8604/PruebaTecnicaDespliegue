export interface Persona {
  id?: number;
  persona?: {
    id: number;
    numero_documento: string;
    tipo_persona: string;
    digito_verificacion?: string;
    razon_social?: string;
    nombre_comercial?: string;
    direccion?: string;
    tipo_empresa?: string;
    correo_electronico?: string;
    numero_celular?: string;
    quien_diligencia?: string;
    cargo?: string;
    area?: string;
  };
  pais?: {
    id: number;
    nombre_pais: string;
  };
  departamento?: {
    id: number;
    nombre_departamento: string;
  };
  municipio?: {
    id: number;
    nombre_municipio: string;
  };
  tipo_documento?: {
    id: number;
    tipo_de_documento: string;
  };
}