---
name: vite-react-app
description: Arquitecto de sistemas React. Define la estructura, escalabilidad y buenas prácticas del código fuente.
---

# Skill: Vite + React Architect

## 1. Filosofía de Desarrollo
El código debe ser modular, legible y tipado. Buscamos un sistema donde cada componente tenga una única responsabilidad.

## 2. Estructura de Proyecto (Strict Mode)
El agente debe organizar el código siguiendo esta jerarquía:
- `src/components/ui`: Componentes atómicos reutilizables (Botones, Inputs).
- `src/components/sections`: Secciones grandes de la página (Hero, BentoGrid).
- `src/hooks`: Lógica de estado personalizada.
- `src/services`: Integraciones con APIs o lógica de negocio de IA.
- `src/store`: Estado global (Zustand o Context).

## 3. Reglas Técnicas
- **Naming:** Componentes en `PascalCase`, funciones en `camelCase`.
- **TypeScript:** Prohibido el uso de `any`. Definir interfaces claras para cada Prop.
- **Exportaciones:** Preferir exportaciones nombradas (`export const ...`) sobre exportaciones por defecto.
- **Vite Config:** Configurar alias `@` para la raíz de `src` para evitar rutas relativas largas.