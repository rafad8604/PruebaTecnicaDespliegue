# Arquitectura del Sistema de Identificación de Personas

Este documento describe la arquitectura implementada para el sistema de identificación de usuarios recaudadores.

## 📁 Estructura de Archivos

```
src/app/
├── adapters/
│   └── PersonaAdapter.ts       # Manejo de peticiones HTTP
├── hooks/
│   └── usePersona.ts           # Hook personalizado para estado
├── models/
│   └── PersonaModel.ts         # Interfaces y tipos TypeScript
├── constants/
│   └── PersonaConstants.ts     # Constantes del sistema
├── components/
│   ├── IdentificationForm.tsx  # Formulario principal
│   ├── PersonaInfo.tsx         # Componente de información
│   ├── InputSelect.tsx         # Select mejorado
│   └── Button.tsx              # Botón mejorado
```

## 🏗️ Patrones de Arquitectura

### 1. **Adapter Pattern**
- **Archivo**: `PersonaAdapter.ts`
- **Propósito**: Encapsula la lógica de comunicación con la API
- **Beneficios**: 
  - Centralizacion de peticiones HTTP
  - Manejo de errores consistente
  - Validación de datos
  - Fácil mantenimiento y testing

### 2. **Custom Hooks**
- **Archivo**: `usePersona.ts`
- **Propósito**: Maneja el estado y lógica de negocio
- **Beneficios**:
  - Reutilización de lógica
  - Separación de responsabilidades
  - Estado predecible
  - Fácil testing unitario

### 3. **Model Layer**
- **Archivo**: `PersonaModel.ts`
- **Propósito**: Define tipos e interfaces TypeScript
- **Beneficios**:
  - Type safety
  - Documentación automática
  - Mejor intellisense
  - Detección temprana de errores

## 🔄 Flujo de Datos

```
Usuario → IdentificationForm → usePersona → PersonaAdapter → API
                ↓
PersonaInfo ← Estado actualizado ← Respuesta procesada ← Respuesta HTTP
```

## 📝 Uso del Sistema

### Buscar una Persona

```typescript
// En el componente
const { persona, loading, error, buscarPersona } = usePersona();

// Buscar
await buscarPersona("1123441438");

// El estado se actualiza automáticamente
if (persona) {
  // Mostrar información
}
```

### Adapter Usage

```typescript
// Llamada directa al adapter
import { PersonaAdapter } from '../adapters/PersonaAdapter';

try {
  const persona = await PersonaAdapter.buscarPersonaPorDocumento({
    numero_documento: "1123441438"
  });
} catch (error) {
  // Manejo de errores
}
```

## 🎯 Características Implementadas

### ✅ Validaciones
- Formato de número de documento
- Campos requeridos
- Mensajes de error específicos

### ✅ UX/UI
- Estados de carga
- Manejo de errores
- Diseño responsive
- Componentes reutilizables

### ✅ Arquitectura
- Separación de responsabilidades
- Componentes tipados
- Manejo centralizado de estado
- Peticiones HTTP optimizadas

## 🔧 Configuración de la API

```typescript
// PersonaAdapter.ts
const API_BASE_URL = 'http://127.0.0.1:8000/api';
```

## 🎨 Estilos y UI

- **Framework**: Tailwind CSS
- **Componentes**: Custom components con props extendidas
- **Responsive**: Mobile-first design
- **UX**: Loading states, error handling, form validation

## 🧪 Testing

### Hooks Testing
```typescript
// Ejemplo de testing del hook
const { result } = renderHook(() => usePersona());
await act(async () => {
  await result.current.buscarPersona("123456789");
});
expect(result.current.persona).toBeDefined();
```

### Adapter Testing
```typescript
// Ejemplo de testing del adapter
jest.mock('axios');
const mockAxios = axios as jest.Mocked<typeof axios>;

test('should fetch persona', async () => {
  mockAxios.get.mockResolvedValue({ data: mockPersona });
  const result = await PersonaAdapter.buscarPersonaPorDocumento({
    numero_documento: "123456789"
  });
  expect(result).toEqual(mockPersona);
});
```

## 🚀 Próximas Mejoras

1. **Cache de resultados** para búsquedas previas
2. **Paginación** para múltiples resultados
3. **Filtros avanzados** de búsqueda
4. **Exportación** de datos
5. **Historial** de búsquedas

## 🛠️ Mantenimiento

- **Logs**: Implementados con emojis para fácil identificación
- **Error Boundaries**: Para captura de errores en producción
- **Type Safety**: Completa cobertura de tipos TypeScript
- **Code Splitting**: Preparado para lazy loading 