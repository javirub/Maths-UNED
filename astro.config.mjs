// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Apuntes Matemáticas UNED',
			description: 'Documentación completa y estructurada de las asignaturas del Grado en Matemáticas de la UNED',
			defaultLocale: 'es',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/javirub/Maths-UNED' }
			],
			sidebar: [
				{
					label: 'Inicio',
					items: [
						{ label: 'Bienvenida', slug: 'index' },
						{ label: 'Guía de Uso', slug: 'guia-uso' },
					],
				},
				{
					label: 'Primer Curso',
					collapsed: false,
					items: [
						{
							label: 'Semestre 1',
							collapsed: true,
							items: [
								{ label: 'Álgebra Lineal I', slug: 'primer-curso/semestre-1/algebra-lineal-i' },
								{ label: 'Funciones de Una Variable I', slug: 'primer-curso/semestre-1/funciones-una-variable-i' },
								{ label: 'Lenguaje Matemático, Conjuntos y Números', slug: 'primer-curso/semestre-1/lenguaje-matematico' },
								{ label: 'Estadística Básica', slug: 'primer-curso/semestre-1/estadistica-basica' },
								{ label: 'Matemática Discreta', slug: 'primer-curso/semestre-1/matematica-discreta' },
							],
						},
						{
							label: 'Semestre 2',
							collapsed: true,
							items: [
								{ label: 'Álgebra Lineal II', slug: 'primer-curso/semestre-2/algebra-lineal-ii' },
								{ label: 'Funciones de Una Variable II', slug: 'primer-curso/semestre-2/funciones-una-variable-ii' },
								{ label: 'Funciones de Varias Variables I', slug: 'primer-curso/semestre-2/funciones-varias-variables-i' },
								{ label: 'Física', slug: 'primer-curso/semestre-2/fisica' },
								{ label: 'Geometría Básica', slug: 'primer-curso/semestre-2/geometria-basica' },
							],
						},
					],
				},
				{
					label: 'Segundo Curso',
					collapsed: true,
					items: [
						{
							label: 'Semestre 1',
							collapsed: true,
							items: [
								{ label: 'Geometrías Lineales', slug: 'segundo-curso/semestre-1/geometrias-lineales' },
								{ label: 'Funciones de Varias Variables II', slug: 'segundo-curso/semestre-1/funciones-varias-variables-ii' },
								{ label: 'Cálculo de Probabilidades I', slug: 'segundo-curso/semestre-1/calculo-probabilidades-i' },
								{ label: 'Estructuras Algebraicas', slug: 'segundo-curso/semestre-1/estructuras-algebraicas' },
								{ label: 'Herramientas Informáticas para Matemáticas', slug: 'segundo-curso/semestre-1/herramientas-informaticas' },
							],
						},
						{
							label: 'Semestre 2',
							collapsed: true,
							items: [
								{ label: 'Programación Lineal y Entera', slug: 'segundo-curso/semestre-2/programacion-lineal' },
								{ label: 'Variable Compleja', slug: 'segundo-curso/semestre-2/variable-compleja' },
								{ label: 'Análisis Numérico Matricial e Interpolación', slug: 'segundo-curso/semestre-2/analisis-numerico' },
								{ label: 'Álgebra', slug: 'segundo-curso/semestre-2/algebra' },
								{ label: 'Lenguajes de Programación', slug: 'segundo-curso/semestre-2/lenguajes-programacion' },
							],
						},
					],
				},
				{
					label: 'Tercer Curso',
					collapsed: true,
					items: [
						{
							label: 'Semestre 1',
							collapsed: true,
							items: [
								{ label: 'Topología', slug: 'tercer-curso/semestre-1/topologia' },
								{ label: 'Introducción a las Ecuaciones Diferenciales', slug: 'tercer-curso/semestre-1/ecuaciones-diferenciales' },
								{ label: 'Cálculo de Probabilidades II', slug: 'tercer-curso/semestre-1/calculo-probabilidades-ii' },
								{ label: 'Introducción a los Espacios de Hilbert', slug: 'tercer-curso/semestre-1/espacios-hilbert' },
								{ label: 'Campos y Formas', slug: 'tercer-curso/semestre-1/campos-formas' },
							],
						},
						{
							label: 'Semestre 2',
							collapsed: true,
							items: [
								{ label: 'Geometría Diferencial de Curvas y Superficies', slug: 'tercer-curso/semestre-2/geometria-diferencial' },
								{ label: 'Análisis de Fourier y Ecuaciones en Derivadas Parciales', slug: 'tercer-curso/semestre-2/analisis-fourier' },
								{ label: 'Resolución Numérica de Ecuaciones', slug: 'tercer-curso/semestre-2/resolucion-numerica' },
								{ label: 'Modelización', slug: 'tercer-curso/semestre-2/modelizacion' },
								{ label: 'Inferencia Estadística', slug: 'tercer-curso/semestre-2/inferencia-estadistica' },
							],
						},
					],
				},
				{
					label: 'Cuarto Curso',
					collapsed: true,
					items: [
						{
							label: 'Trabajo Fin de Grado',
							slug: 'cuarto-curso/tfg',
						},
						{
							label: 'Semestre 1 (Optativas)',
							collapsed: true,
							items: [
								{ label: 'Integral de Lebesgue', slug: 'cuarto-curso/semestre-1/integral-lebesgue' },
								{ label: 'Ampliación de Variable Compleja', slug: 'cuarto-curso/semestre-1/ampliacion-variable-compleja' },
								{ label: 'Geometría Diferencial', slug: 'cuarto-curso/semestre-1/geometria-diferencial' },
								{ label: 'Procesos Estocásticos', slug: 'cuarto-curso/semestre-1/procesos-estocasticos' },
								{ label: 'Teoría de la Decisión', slug: 'cuarto-curso/semestre-1/teoria-decision' },
								{ label: 'Introducción a la Astronomía', slug: 'cuarto-curso/semestre-1/astronomia' },
								{ label: 'Modelos de Regresión', slug: 'cuarto-curso/semestre-1/modelos-regresion' },
								{ label: 'Teoría de Juegos', slug: 'cuarto-curso/semestre-1/teoria-juegos' },
								{ label: 'Análisis Multivariante', slug: 'cuarto-curso/semestre-1/analisis-multivariante' },
								{ label: 'Física Matemática', slug: 'cuarto-curso/semestre-1/fisica-matematica' },
							],
						},
						{
							label: 'Semestre 2 (Optativas)',
							collapsed: true,
							items: [
								{ label: 'Espacios Normados', slug: 'cuarto-curso/semestre-2/espacios-normados' },
								{ label: 'Modelos Estocásticos', slug: 'cuarto-curso/semestre-2/modelos-estocasticos' },
								{ label: 'Ampliación de Topología', slug: 'cuarto-curso/semestre-2/ampliacion-topologia' },
								{ label: 'Historia de las Matemáticas', slug: 'cuarto-curso/semestre-2/historia-matematicas' },
								{ label: 'Teoría de Muestras', slug: 'cuarto-curso/semestre-2/teoria-muestras' },
								{ label: 'Inglés Científico', slug: 'cuarto-curso/semestre-2/ingles-cientifico' },
								{ label: 'Sistemas Dinámicos', slug: 'cuarto-curso/semestre-2/sistemas-dinamicos' },
								{ label: 'Astrofísica General', slug: 'cuarto-curso/semestre-2/astrofisica-general' },
							],
						},
					],
				},
			],
		}),
	],
});
