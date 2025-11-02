'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useGetAllPersons } from '../../hooks/useGetAllPersons';
import IdentificationForm from '../../module_info_user/components/IdentificationForm';
import Title from '../../components/ui/Title';
import { Persona } from '../../module_info_user/models/types';
import { deletePerson } from '../../adapters/deletePerson.adapter';

// Mapeo de IDs a nombres de tipos de documento
const TIPOS_DOCUMENTO_MAP: {[key: number]: string} = {
  1: 'Cédula de Ciudadanía',
  2: 'Cédula de Extranjería', 
  3: 'NIT',
  4: 'Pasaporte'
};

export default function UserList() {
  const { personas, loading, error, searchByDocument, showAllPersonas, refetch } = useGetAllPersons();
  const router = useRouter();
  
  // Log para verificar que el componente se renderiza
  console.log('UserList renderizado, personas:', personas.length);
  
  // Función que maneja la búsqueda desde IdentificationForm
  const handleSubmit = async (persona: Persona) => {
    console.log('Datos recibidos del IdentificationForm:', persona);
    
    // Como IdentificationForm ya encontró la persona, 
    // pero nuestro hook maneja la búsqueda por documento,
    // necesitamos extraer el número de documento y buscar
    if (persona?.persona?.numero_documento) {
      await searchByDocument(persona.persona.numero_documento);
    }
  };

  // Función para manejar la edición
  const handleEdit = React.useCallback((numeroDocumento: string) => {
    console.log('handleEdit llamado con documento:', numeroDocumento);
    try {
      // Guardamos el número de documento en sessionStorage para que module_info_user lo use
      sessionStorage.setItem('editPersonDocument', numeroDocumento);
      console.log('Documento guardado en sessionStorage');
      // Redirigimos al módulo de información de usuario
      router.push('/module_info_user');
    } catch (error) {
      console.error('Error en handleEdit:', error);
    }
  }, [router]);

  // Función para manejar la eliminación
  const handleDelete = React.useCallback(async (id: number, numeroDocumento: string) => {
    console.log('handleDelete llamado con id:', id, 'documento:', numeroDocumento);
    try {
      // Confirmación antes de eliminar
      const confirmDelete = window.confirm(
        `¿Está seguro que desea eliminar a la persona con documento ${numeroDocumento}?`
      );
      
      if (!confirmDelete) {
        console.log('Usuario canceló la eliminación');
        return;
      }

      console.log('Intentando eliminar persona...');
      await deletePerson(id);
      console.log('Persona eliminada exitosamente');
      // Mostrar mensaje de éxito
      alert('Persona eliminada exitosamente');
      // Recargar la lista
      refetch();
    } catch (error) {
      console.error('Error al eliminar persona:', error);
      alert('Error al eliminar la persona. Por favor, intente nuevamente.');
    }
  }, [refetch]);

  // Función para obtener el nombre del tipo de documento
  const getTipoDocumentoNombre = (tipoDocumentoId: number | undefined) => {
    if (typeof tipoDocumentoId === 'number') {
      return TIPOS_DOCUMENTO_MAP[tipoDocumentoId] || 'Desconocido';
    }
    return 'Desconocido';
  };

  // Cargar todos los usuarios al montar el componente
  React.useEffect(() => {
    showAllPersonas();
  }, [showAllPersonas]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg">Cargando...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <div className="text-red-500 mb-4">{error}</div>
        <button 
          onClick={refetch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div>
        <IdentificationForm onFound={handleSubmit} />
      </div>
      <div className="mb-6 flex justify-between items-center mt-10 ml-10 mr-10">
        <Title title="Registro de recaudadores pre - identificados" className="flex flex-row basis-128" />
        <div className="flex gap-2">
          <button 
            type="button"
            onClick={() => {
              console.log('TEST: Botón de prueba clickeado!');
              alert('¡El botón funciona!');
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Test Click
          </button>
          <button 
            onClick={refetch}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer"
          >
            Actualizar
          </button>
        </div>
      </div>

      {personas.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No hay personas registradas</p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-md rounded-lg ml-10 mr-10">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Fecha Límite
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo Documento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Número Documento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Razón Social
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo Persona
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tipo Empresa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Correo Electrónico
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Número Celular
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {personas.map((persona) => (
                <tr key={persona.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {persona.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(persona.fecha_limite).toLocaleDateString('es-ES')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {getTipoDocumentoNombre(persona.tipo_de_documento)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {persona.numero_documento}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {persona.razon_social || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      persona.tipo_persona === 'Natural' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {persona.tipo_persona}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {persona.tipo_empresa || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {persona.correo_electronico || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {persona.numero_celular || 'N/A'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Botón Editar clickeado');
                        handleEdit(persona.numero_documento);
                      }}
                      className="text-green-600 hover:text-green-900 mr-4 cursor-pointer"
                    >
                      Editar
                    </button>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Botón Eliminar clickeado');
                        handleDelete(persona.id, persona.numero_documento);
                      }}
                      className="text-red-600 hover:text-red-900 cursor-pointer"
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="mt-4 text-sm text-gray-500 ml-10">
        Total de registros: {personas.length}
      </div>
    </div>
  );
}