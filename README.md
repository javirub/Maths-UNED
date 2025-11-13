# Apuntes Matemáticas UNED

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

Documentación completa y estructurada de las asignaturas del Grado en Matemáticas de la UNED.

## Sobre este proyecto

Este proyecto proporciona apuntes organizados, estructurados y fácilmente accesibles de todas las asignaturas del Grado en Matemáticas de la UNED. La documentación está construida con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build/), ofreciendo una experiencia de navegación rápida y moderna.

## Estructura del Grado

El grado está organizado en cuatro cursos:

### Primer Curso
- **Semestre 1**: Álgebra Lineal I, Funciones de Una Variable I, Lenguaje Matemático, Estadística Básica, Matemática Discreta
- **Semestre 2**: Álgebra Lineal II, Funciones de Una Variable II, Funciones de Varias Variables I, Física, Geometría Básica

### Segundo Curso
- **Semestre 1**: Geometrías Lineales, Funciones de Varias Variables II, Cálculo de Probabilidades I, Estructuras Algebraicas, Herramientas Informáticas
- **Semestre 2**: Programación Lineal, Variable Compleja, Análisis Numérico, Álgebra, Lenguajes de Programación

### Tercer Curso
- **Semestre 1**: Topología, Ecuaciones Diferenciales, Cálculo de Probabilidades II, Espacios de Hilbert, Campos y Formas
- **Semestre 2**: Geometría Diferencial, Análisis de Fourier, Resolución Numérica, Modelización, Inferencia Estadística

### Cuarto Curso
- **Trabajo Fin de Grado**
- **Optativas** (Semestres 1 y 2): 18 asignaturas optativas en áreas de análisis, álgebra, topología, estadística, física y astronomía

## Estructura del proyecto

```
.
├── src/
│   ├── content/
│   │   └── docs/
│   │       ├── primer-curso/
│   │       │   ├── semestre-1/
│   │       │   └── semestre-2/
│   │       ├── segundo-curso/
│   │       │   ├── semestre-1/
│   │       │   └── semestre-2/
│   │       ├── tercer-curso/
│   │       │   ├── semestre-1/
│   │       │   └── semestre-2/
│   │       └── cuarto-curso/
│   │           ├── semestre-1/
│   │           ├── semestre-2/
│   │           └── tfg.md
│   └── content.config.ts
├── astro.config.mjs
└── package.json
```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                              |
| :---------------- | :-------------------------------------------------- |
| `bun install`     | Instala las dependencias                            |
| `bun dev`         | Inicia el servidor de desarrollo en `localhost:4321`|
| `bun build`       | Construye el sitio para producción en `./dist/`     |
| `bun preview`     | Previsualiza la construcción localmente             |
| `bun astro ...`   | Ejecuta comandos CLI de Astro                       |

## Contribuir

Este proyecto está en desarrollo activo. Las contribuciones son bienvenidas:

1. Fork el repositorio
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Estado del proyecto

🚧 Este proyecto está en desarrollo activo. Muchas asignaturas tienen contenido pendiente de completar.

## Licencia

Este proyecto es de código abierto y está disponible para estudiantes de la UNED y cualquier persona interesada en matemáticas.

## Enlaces útiles

- [Documentación de Starlight](https://starlight.astro.build/)
- [Documentación de Astro](https://docs.astro.build)
- [UNED - Grado en Matemáticas](https://www.uned.es/universidad/inicio/estudios/grados/grado-en-matematicas.html)
