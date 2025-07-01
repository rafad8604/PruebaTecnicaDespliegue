"use client";
import React, { useState } from 'react';

type IdentificationFormData = {
  tipoPersona: string;
  tipoDocumento: string;
  numeroDocumento: string;
};

const tiposPersona = ['Natural', 'Jurídica'];
const tiposDocumento = ['NIT', 'Cédula', 'Pasaporte'];

const IdentificationForm: React.FC = () => {
  const [form, setForm] = useState<IdentificationFormData>({
    tipoPersona: '',
    tipoDocumento: '',
    numeroDocumento: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes hacer la petición a la API o manejar la búsqueda
    console.log(form);
  };

  return (
    <div>
      {/* Título con estilo degradado */}
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
        Identificación de usuarios recaudadores
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          alignItems: 'center',
          marginBottom: 32, // opcional, para separar de InfoForm
        }}
      >
        <select
          name="tipoPersona"
          value={form.tipoPersona}
          onChange={handleChange}
          required
          style={{ padding: 8 }}
        >
          <option value="">Tipo de persona *</option>
          {tiposPersona.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
        <select
          name="tipoDocumento"
          value={form.tipoDocumento}
          onChange={handleChange}
          required
          style={{ padding: 8 }}
        >
          <option value="">Tipo de documento *</option>
          {tiposDocumento.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
        <input
          type="text"
          name="numeroDocumento"
          value={form.numeroDocumento}
          onChange={handleChange}
          placeholder="Número de documento *"
          required
          style={{ padding: 8 }}
        />

        {/* Fila 2: dos celdas vacías, botón en la tercera columna */}
        <div></div>
        <div></div>
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
          Buscar
          <span style={{ marginLeft: 8, fontSize: 13 }}>🔍</span>
        </button>
      </form>
    </div>
  );
};

export default IdentificationForm;