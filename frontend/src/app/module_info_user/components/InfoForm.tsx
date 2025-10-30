"use client";
import Title from '../../components/ui/Title';
import Button from '../../components/ui/Button';
import InputSelect from '../../components/ui/InputSelect';
import { useState, useEffect } from 'react';
import InputNormal from '../../components/ui/InputNormal';
import { paisoptions } from '../models/paisOptions';
import { departamentoOptions } from '../models/departamentoOptions';
import { municipioOptions } from '../models/municipioOptions';
import { tipoEmpresaOptions } from '../models/tipoEmpresaOptions';
import { useUpdatePersons } from '../../hooks/useUpdatePersons';
import { useAlert } from '../../hooks/useAlert';

import { Persona } from '../models/types';

interface InfoFormProps {
  persona: Persona;
}

const InfoForm: React.FC<InfoFormProps> = ({ persona }) => {
  const { updatePersonaData, loading } = useUpdatePersons();
  const { showWarning, showError } = useAlert();
  
  const [form, setForm] = useState({
    nombre_pais: '',
    nombre_departamento: '',
    nombre_municipio: '',
    digito_verificacion: '',
    razon_social: '',
    nombre_comercial: '',
    direccion: '',
    tipo_empresa: '',
    correo_electronico: '',
    confirmar_correo_electronico: '',
    numero_celular: '',
    confirmar_numero_celular: '',
    quien_diligencia: '',
    cargo: '',
    area: '',
  });

  // Cargar datos cuando se selecciona una persona
  useEffect(() => {
    if (persona) {
      const rawPais = persona.pais?.nombre_pais ?? '';
      const rawDepartamento = persona.departamento?.nombre_departamento ?? '';
      const rawMunicipio = persona.municipio?.nombre_municipio ?? '';
      
      setForm({
        nombre_pais: String(rawPais).trim(),
        nombre_departamento: String(rawDepartamento).trim(),
        nombre_municipio: String(rawMunicipio).trim(),
        digito_verificacion: persona.persona?.digito_verificacion ?? '',
        razon_social: persona.persona?.razon_social ?? '',
        nombre_comercial: persona.persona?.nombre_comercial ?? '',
        direccion: persona.persona?.direccion ?? '',
        tipo_empresa: String(persona.persona?.tipo_empresa ?? ''),
        correo_electronico: persona.persona?.correo_electronico ?? '',
        confirmar_correo_electronico: persona.persona?.correo_electronico ?? '',
        numero_celular: persona.persona?.numero_celular ?? '',
        confirmar_numero_celular: persona.persona?.numero_celular ?? '',
        quien_diligencia: persona.persona?.quien_diligencia ?? '',
        cargo: persona.persona?.cargo ?? '',
        area: persona.persona?.area ?? ''
      });
    }
  }, [persona]);

  // Función para preparar los datos para el backend
  const prepareDataForBackend = () => {
    return {
      titulo: form.razon_social || 'Sin título',
      descripcion: `Persona actualizada - ${form.razon_social}`,
      fecha_limite: new Date().toISOString().split('T')[0],
      numero_documento: persona?.persona?.numero_documento || '',
      tipo_persona: persona?.persona?.tipo_persona || 'Natural',
      digito_verificacion: form.digito_verificacion || null,
      razon_social: form.razon_social || null,
      nombre_comercial: form.nombre_comercial || null,
      direccion: form.direccion || null,
      tipo_empresa: form.tipo_empresa || null,
      correo_electronico: form.correo_electronico || null,
      numero_celular: form.numero_celular || null,
      quien_diligencia: form.quien_diligencia || null,
      cargo: form.cargo || null,
      area: form.area || null,
      nombre_pais: persona?.pais?.id || null,
      tipo_de_documento: persona?.tipo_documento?.id || null,
    };
  };

  // Función para validar el formulario con SweetAlert2
  const validateForm = async (): Promise<boolean> => {
    if (!form.razon_social.trim()) {
      await showError("Campo requerido", "La razón social es obligatoria");
      return false;
    }

    if (form.correo_electronico && form.correo_electronico !== form.confirmar_correo_electronico) {
      await showError("Correos no coinciden", "Los correos electrónicos no coinciden");
      return false;
    }

    if (form.numero_celular && form.numero_celular !== form.confirmar_numero_celular) {
      await showError("Números no coinciden", "Los números de celular no coinciden");
      return false;
    }

    return true;
  };

  // Manejar actualizar (solo actualizar, no crear)
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!persona?.persona?.id) {
      await showWarning("No hay persona seleccionada", "Primero busca una persona usando el formulario de identificación");
      return;
    }

    const isValid = await validateForm();
    if (!isValid) return;

    try {
      const dataToSend = prepareDataForBackend();
      console.log('Datos a enviar (UPDATE):', dataToSend);
      console.log('ID de persona a actualizar:', persona.persona.id);
      
      await updatePersonaData(persona.persona.id, dataToSend);
    } catch (error) {
      console.error('Error en handleUpdate:', error);
      // El error ya se maneja en el hook useUpdatePersons
    }
  };

  // Generar dirección
  const handleGenerateAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedAddress = `${form.nombre_pais}, ${form.nombre_departamento}, ${form.nombre_municipio}`;
    setForm(prev => ({
      ...prev,
      direccion: generatedAddress
    }));
  };

  return (
    <div className="ml-20 mt-10 mr-15">
      <Title title="Información de usuarios recaudadores" />
      <form className="grid grid-cols-3 gap-3 mt-1">
        <InputSelect
          value={form.nombre_pais}
          onChange={e => setForm({ ...form, nombre_pais: e.target.value })}
          options={paisoptions}
        />
        <InputSelect
          value={form.nombre_departamento}
          onChange={e => setForm({ ...form, nombre_departamento: e.target.value })}
          options={departamentoOptions}
        />
        <InputSelect
          value={form.nombre_municipio}
          onChange={e => setForm({ ...form, nombre_municipio: e.target.value })}
          options={municipioOptions}
        />
        <InputNormal
          value={form.digito_verificacion}
          placeholder='Dígito de verificación'
          onChange={e => setForm({ ...form, digito_verificacion: e.target.value })}
        />
        <InputNormal
          value={form.razon_social}
          placeholder="Razón social"
          onChange={e => setForm({ ...form, razon_social: e.target.value })}
        />
        <InputNormal
          value={form.nombre_comercial}
          placeholder="Nombre comercial"
          onChange={e => setForm({ ...form, nombre_comercial: e.target.value })}
        />
        <InputNormal
          value={form.direccion}
          placeholder="Dirección"
          onChange={e => setForm({ ...form, direccion: e.target.value })}
        />
        <InputSelect
          value={form.tipo_empresa}
          onChange={e => setForm({ ...form, tipo_empresa: e.target.value })}
          options={tipoEmpresaOptions}
        />
        <InputNormal
          value={form.correo_electronico}
          placeholder="Correo electrónico"
          onChange={e => setForm({ ...form, correo_electronico: e.target.value })}
        />
        <InputNormal
          value={form.confirmar_correo_electronico}
          placeholder="Confirmar correo electrónico"
          onChange={e => setForm({ ...form, confirmar_correo_electronico: e.target.value })}
        />
        <InputNormal
          value={form.numero_celular}
          placeholder="Número de celular"
          onChange={e => setForm({ ...form, numero_celular: e.target.value })}
        />
        <InputNormal
          value={form.confirmar_numero_celular}
          placeholder="Confirmar número de celular"
          onChange={e => setForm({ ...form, confirmar_numero_celular: e.target.value })}
        />
        <InputNormal
          value={form.quien_diligencia}
          placeholder="Quién diligencia el formulario"
          onChange={e => setForm({ ...form, quien_diligencia: e.target.value })}
        />
        <InputNormal
          value={form.cargo}
          placeholder="Cargo"
          onChange={e => setForm({ ...form, cargo: e.target.value })}
        />
        <InputNormal
          value={form.area}
          placeholder="Área"
          onChange={e => setForm({ ...form, area: e.target.value })}
        />
        
        {/* Botones */}
        <div className="col-span-3 flex justify-end gap-4 mt-6">
          <Button 
            text="Generar dirección" 
            type='button'
            onClick={handleGenerateAddress}
            className="h-10 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          />
          
          <Button 
            text={loading ? "Actualizando..." : "Actualizar"} 
            type='button'
            onClick={handleUpdate}
            disabled={loading || !persona}
            className="h-10 px-4 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
      </form>

    </div>
  );
};

export default InfoForm;