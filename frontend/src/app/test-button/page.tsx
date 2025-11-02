'use client';

export default function TestButton() {
  const handleClick = () => {
    console.log('BOTÓN FUNCIONÓ!');
    alert('El botón funciona correctamente');
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl mb-4">Página de Prueba</h1>
      <button 
        type="button"
        onClick={handleClick}
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click aquí para probar
      </button>
      <p className="mt-4 text-gray-600">
        Si este botón funciona, el problema está en el componente UserList específicamente.
      </p>
    </div>
  );
}
