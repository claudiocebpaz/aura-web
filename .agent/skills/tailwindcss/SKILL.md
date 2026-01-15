---
name: tailwindcss
description: Especialista en el motor Tailwind v4. Gestiona la implementación de estilos mediante utilidades.
---

# Skill: Tailwind CSS Specialist

## 1. Mentalidad Utility-First
El diseño se construye directamente en el HTML. Solo se crea CSS personalizado para animaciones de Keyframes extremadamente complejas o efectos de "Glow" que no cubra el motor base.

## 2. Estrategia de Implementación
- **Responsive:** Diseño Mobile-First. Usar prefijos `md:`, `lg:` y `xl:` de forma proactiva.
- **Clean Classes:** Si una lista de clases supera los 10 elementos, evaluar si el componente debe ser fragmentado o si se puede usar la directiva `@apply` en el archivo CSS de forma muy puntual.
- **V4 Integration:** Utilizar la nueva sintaxis de `@theme` para inyectar los valores del `design-system` directamente en el motor.

## 3. Restricciones
- No usar colores arbitrarios (ej. `text-[#abc]`) fuera de los definidos en el manual de marca.
- Mantener la jerarquía de espaciado (usar múltiplos de 4: `p-4`, `p-8`, `gap-12`).