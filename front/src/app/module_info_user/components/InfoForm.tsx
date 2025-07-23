"use client";
import Title from './Title';
import Button from './Button';
import InputSelect from './InputSelect';
import { useState, useEffect } from 'react';
import InputNormal from './InputNormal';
import { paisoptions } from '../models/paisOptions';
import { departamentoOptions } from '../models/departamentoOptions';
import { municipioOptions } from '../models/municipioOptions';
import { tipoEmpresaOptions } from '../models/tipoEmpresaOptions';

interface InfoFormProps {
  persona: any;
}

const InfoForm: React.FC<InfoFormProps> = ({ persona }) => {
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

  useEffect(() => {
    if (persona) {
      const rawPais = persona.pais?.nombre_pais ?? '';
      const rawDepartamento = persona.departamento?.nombre_departamento ?? '';
      const rawMunicipio = persona.municipio?.nombre_municipio ?? '';
      console.log('Valores recibidos:', { rawPais, rawDepartamento, rawMunicipio });
      setForm(prev => ({
        nombre_pais: String(rawPais).trim(),
        nombre_departamento: String(rawDepartamento).trim(),
        nombre_municipio: String(rawMunicipio).trim(),
        digito_verificacion: persona.persona?.digito_verificacion ?? prev.digito_verificacion ?? '',
        razon_social: persona.persona?.razon_social ?? prev.razon_social ?? '',
        nombre_comercial: persona.persona?.nombre_comercial ?? prev.nombre_comercial ?? '',
        direccion: persona.persona?.direccion ?? prev.direccion ?? '',
        tipo_empresa: String(persona.persona?.tipo_empresa ?? prev.tipo_empresa ?? ''),
        correo_electronico: persona.persona?.correo_electronico ?? prev.correo_electronico ?? '',
        confirmar_correo_electronico: prev.confirmar_correo_electronico ?? '',
        numero_celular: persona.persona?.numero_celular ?? prev.numero_celular ?? '',
        confirmar_numero_celular: prev.confirmar_numero_celular ?? '',
        quien_diligencia: persona.persona?.quien_diligencia ?? prev.quien_diligencia ?? '',
        cargo: persona.persona?.cargo ?? prev.cargo ?? '',
        area: persona.persona?.area ?? prev.area ?? '',
      }));
    }
  }, [persona]);

  return (
    <form action="submit">
      <div>
      <Title title = "Información de usuarios recaudadores" />
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
        value={form.correo_electronico}
        placeholder="Confirmar correo electrónico"
        onChange={e => setForm({ ...form, correo_electronico: e.target.value })}
      />
      <InputNormal
        value={form.numero_celular}
        placeholder="Número de celular"
        onChange={e => setForm({ ...form, numero_celular: e.target.value })}
      />
       <InputNormal
        value={form.numero_celular}
        placeholder="Confirmar número de celular"
        onChange={e => setForm({ ...form, numero_celular: e.target.value })}
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
      <Button text = "Generar dirección" type='submit'/>
      <Button text = "Actualizar" type='submit'/>
      <Button text = "Guardar" type='submit'/>
    </div>
    </form>

  )
};

export default InfoForm;