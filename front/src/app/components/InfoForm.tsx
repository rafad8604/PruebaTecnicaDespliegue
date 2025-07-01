"use client";
import React, { useState } from 'react';

type InfoFormData = {
  pais: string;
  departamento: string;
  municipio: string;
  digitoVerificacion: string;
  razonSocial: string;
  nombreComercial: string;
  direccion: string;
  tipoEmpresa: string;
  correo: string;
  confirmarCorreo: string;
  celular: string;
  confirmarCelular: string;
  quienDiligencia: string;
  cargo: string;
  area: string;
};

const InfoForm: React.FC = () => {
  const [form, setForm] = useState<InfoFormData>({
    pais: '',
    departamento: '',
    municipio: '',
    digitoVerificacion: '',
    razonSocial: '',
    nombreComercial: '',
    direccion: '',
    tipoEmpresa: '',
    correo: '',
    confirmarCorreo: '',
    celular: '',
    confirmarCelular: '',
    quienDiligencia: '',
    cargo: '',
    area: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(form);
  };

  return (
    <>
      <div
        style={{
          background: 'linear-gradient(90deg, #ffb347 0%, #ff7f50 100%)',
          color: '#fff',
          borderRadius: 18,
          padding: '10px 28px',
          fontSize: 22,
          fontWeight: 400,
          margin: '16px 0 24px 0px', // margen izquierdo para igualar ambos lados
          boxShadow: '2px 4px 8px #0001',
          width: 'calc(100% - 32px)', // resta el margen izquierdo y derecho
          textAlign: 'left',
        }}
      >
        Información de usuarios recaudadores
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          alignItems: 'center',
        }}
      >
        {/* Fila 1 */}
        <input name="pais" value={form.pais} onChange={handleChange} placeholder="País *" required style={{ padding: 8 }} />
        <input name="departamento" value={form.departamento} onChange={handleChange} placeholder="Departamento *" required style={{ padding: 8 }} />
        <input name="municipio" value={form.municipio} onChange={handleChange} placeholder="Municipio *" required style={{ padding: 8 }} />

        {/* Fila 2 */}
        <input name="digitoVerificacion" value={form.digitoVerificacion} onChange={handleChange} placeholder="Dígito de verificación *" required style={{ padding: 8 }} />
        <input name="razonSocial" value={form.razonSocial} onChange={handleChange} placeholder="Razón Social *" required style={{ padding: 8 }} />
        <input name="nombreComercial" value={form.nombreComercial} onChange={handleChange} placeholder="Nombre Comercial" style={{ padding: 8 }} />

        {/* Fila 3 */}
        <input name="direccion" value={form.direccion} onChange={handleChange} placeholder="Dirección *" required style={{ padding: 8 }} />
        <select name="tipoEmpresa" value={form.tipoEmpresa} onChange={handleChange} required style={{ padding: 8 }}>
          <option value="">Tipo de empresa *</option>
          <option value="cacaotera">Cacaotera</option>
          <option value="otra">Otra</option>
        </select>
        <button
          type="button"
          style={{
            padding: '8px 0',
            background: '#ff9800',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 'bold',
          }}
        >
          Generar Dirección
        </button>

        {/* Fila 4 */}
        <input name="correo" value={form.correo} onChange={handleChange} placeholder="Correo Electrónico *" required style={{ padding: 8 }} />
        <input name="confirmarCorreo" value={form.confirmarCorreo} onChange={handleChange} placeholder="Confirmar correo electrónico *" required style={{ padding: 8 }} />
        <input name="celular" value={form.celular} onChange={handleChange} placeholder="Número de Celular *" required style={{ padding: 8 }} />

        {/* Fila 5 */}
        <input name="confirmarCelular" value={form.confirmarCelular} onChange={handleChange} placeholder="Confirmar número de celular *" required style={{ padding: 8 }} />
        <input name="quienDiligencia" value={form.quienDiligencia} onChange={handleChange} placeholder="Quién diligencia el formulario *" required style={{ padding: 8 }} />
        <input name="cargo" value={form.cargo} onChange={handleChange} placeholder="Cargo *" required style={{ padding: 8 }} />

        {/* Fila 6: celda vacía, celda vacía, Área */}
        <div></div>
        <div></div>
        <input name="area" value={form.area} onChange={handleChange} placeholder="Área *" required style={{ padding: 8 }} />

        {/* Fila 7: botones alineados a la derecha */}
        <div></div>
        <button
          type="button"
          style={{
            padding: '8px 0',
            background: '#ff9800',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          Actualizar
        </button>
        <button
          type="submit"
          style={{
            padding: '8px 0',
            background: '#4caf50',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontWeight: 'bold',
            width: '100%',
          }}
        >
          Guardar
        </button>
      </form>
    </>
  );
};

export default InfoForm;