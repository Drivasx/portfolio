# Guía de Animaciones de Scroll con GSAP

Esta guía te muestra cómo implementar animaciones de scroll usando GSAP en tu proyecto React.

## 🚀 Instalación

GSAP ya está instalado en tu proyecto. Si necesitas instalarlo en otro proyecto:

```bash
npm install gsap
# o
pnpm add gsap
```

## 📚 Conceptos Básicos

### 1. ScrollTrigger
ScrollTrigger es el plugin de GSAP que permite crear animaciones basadas en el scroll de la página.

### 2. Timeline
Timeline permite crear secuencias de animaciones que se ejecutan en orden.

### 3. Stagger
Stagger permite animar múltiples elementos con un retraso entre cada uno.

## 🎯 Ejemplos de Uso

### 1. Animación Básica de Fade In

```tsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MyComponent = () => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      elementRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div ref={elementRef}>Mi contenido animado</div>;
};
```

### 2. Animación con Timeline

```tsx
useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#my-section",
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse"
    }
  });

  tl.fromTo(
    titleRef.current,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1 }
  )
  .fromTo(
    subtitleRef.current,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8 },
    "-=0.5" // Se ejecuta 0.5s antes de que termine la animación anterior
  );
}, []);
```

### 3. Animación con Stagger (múltiples elementos)

```tsx
useEffect(() => {
  gsap.fromTo(
    cardsRef.current?.children,
    { opacity: 0, y: 60, scale: 0.9 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      stagger: 0.2, // 0.2s de retraso entre cada elemento
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    }
  );
}, []);
```

## 🎨 Componentes Reutilizables

### AnimatedSection

```tsx
import { AnimatedSection } from './components/AnimatedSection';

// Uso básico
<AnimatedSection animation="fadeInUp">
  <h1>Mi título</h1>
</AnimatedSection>

// Con configuración personalizada
<AnimatedSection 
  animation="scaleIn"
  delay={0.5}
  duration={1.2}
  stagger={0.1}
>
  <div>Contenido con stagger</div>
</AnimatedSection>
```

### AnimatedText

```tsx
import { AnimatedText } from './components/AnimatedSection';

<AnimatedText 
  className="text-4xl font-bold"
  stagger={0.05}
>
  Texto animado carácter por carácter
</AnimatedText>
```

### AnimatedCounter

```tsx
import { AnimatedCounter } from './components/AnimatedSection';

<AnimatedCounter 
  end={100}
  duration={2}
  suffix="+"
  className="text-6xl font-bold"
/>
```

## ⚙️ Configuración de ScrollTrigger

### Opciones Principales

- **trigger**: El elemento que activa la animación
- **start**: Cuándo comenzar la animación (ej: "top 80%")
- **end**: Cuándo terminar la animación (ej: "bottom 20%")
- **toggleActions**: Qué hacer en cada punto del scroll
  - "play none none reverse": Reproducir al entrar, revertir al salir
  - "play pause resume reset": Más control granular

### Puntos de Activación

```tsx
// Cuando el elemento llega al 80% de la pantalla
start: "top 80%"

// Cuando el elemento sale de la pantalla
start: "bottom 20%"

// Cuando el elemento está en el centro
start: "center center"

// Con offset personalizado
start: "top 100px"
```

## 🎭 Tipos de Animaciones

### 1. Fade In Up
```tsx
{ opacity: 0, y: 50 } → { opacity: 1, y: 0 }
```

### 2. Fade In Left/Right
```tsx
{ opacity: 0, x: -50 } → { opacity: 1, x: 0 }
{ opacity: 0, x: 50 } → { opacity: 1, x: 0 }
```

### 3. Scale In
```tsx
{ opacity: 0, scale: 0.8 } → { opacity: 1, scale: 1 }
```

### 4. Rotation
```tsx
{ opacity: 0, rotation: -180 } → { opacity: 1, rotation: 0 }
```

## 🔧 Easing Functions

- **"power2.out"**: Suave y natural
- **"back.out(1.7)"**: Con rebote
- **"elastic.out(1, 0.3)"**: Elástico
- **"bounce.out"**: Con salto

## 🧹 Cleanup

Siempre limpia los ScrollTriggers en el cleanup:

```tsx
useEffect(() => {
  // Tus animaciones aquí...

  return () => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
```

## 🎯 Mejores Prácticas

1. **Performance**: No crees demasiados ScrollTriggers
2. **Mobile**: Considera deshabilitar animaciones en móviles para mejor performance
3. **Accessibility**: Asegúrate de que las animaciones no interfieran con la accesibilidad
4. **Testing**: Prueba en diferentes dispositivos y velocidades de scroll

## 🚀 Ejemplos Avanzados

### Parallax Effect
```tsx
gsap.to(elementRef.current, {
  yPercent: -50,
  ease: "none",
  scrollTrigger: {
    trigger: elementRef.current,
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
});
```

### Animación de Texto por Palabras
```tsx
const words = elementRef.current?.textContent?.split(' ') || [];
elementRef.current.innerHTML = words.map(word => `<span>${word}</span>`).join('');

gsap.fromTo(
  elementRef.current.children,
  { opacity: 0, y: 20 },
  {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    scrollTrigger: { trigger: elementRef.current, start: "top 80%" }
  }
);
```

¡Con estos ejemplos ya puedes crear animaciones de scroll impresionantes en tu proyecto! 