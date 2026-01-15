---
name: vfx-motion-expert
description: Maestro de Framer Motion. Añade la capa sensorial y de movimiento que hace que la web "respire".
---

# Skill: VFX & Motion Expert

## 1. El Movimiento como Feedback
En una web de IA, el movimiento indica procesamiento y vida. Las animaciones no deben ser lentas; deben ser "Snappy" (rápidas y reactivas).

## 2. Protocolos de Animación
- **Reveal on Scroll:** Los componentes deben "emerger" del fondo. Usar `opacity: 0` + `filter: blur(10px)` hacia `opacity: 1` + `filter: blur(0px)`.
- **Física de Resortes (Springs):** No usar curvas lineales. Configuración estándar: `type: "spring", stiffness: 300, damping: 30`.
- **Floating:** Los elementos principales deben tener un movimiento sutil en el eje Y para evitar la sensación de página estática.

## 3. Efectos Visuales de IA
- **Glow Follow:** Implementar un gradiente radial azul que siga sutilmente al mouse detrás de las tarjetas Bento.
- **Staggered Reveal:** Las cuadrículas deben cargar sus elementos uno a uno con un retraso de `0.1s`.