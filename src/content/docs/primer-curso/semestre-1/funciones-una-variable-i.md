---
title: Funciones de Una Variable I
description: Formación Básica - 6 ECTS - Primer Curso, Semestre 1
---

## Información de la asignatura

- **Tipo**: Formación Básica
- **Créditos**: 6 ECTS
- **Curso**: Primero
- **Semestre**: 1

## Descripción

Introducción al cálculo diferencial e integral de funciones de una variable real.

## Temario

### Tema 1: Números reales y sucesiones

#### Estructura de cuerpo en los números reales

Los números reales $\mathbb{R}$ con las operaciones de suma y producto forman un **cuerpo** $(\mathbb{R}, +, \cdot)$.

##### Propiedades del grupo aditivo $(\mathbb{R}, +)$

Para todo $\alpha, \beta, \gamma \in \mathbb{R}$:

1. **Asociativa:** $(\alpha + \beta) + \gamma = \alpha + (\beta + \gamma)$
2. **Elemento neutro:** Existe $0 \in \mathbb{R}$ tal que $\alpha + 0 = 0 + \alpha = \alpha$
3. **Elemento simétrico (opuesto):** Para cada $\alpha$ existe $-\alpha$ tal que $\alpha + (-\alpha) = (-\alpha) + \alpha = 0$
4. **Conmutativa:** $\alpha + \beta = \beta + \alpha$

##### Propiedades del grupo multiplicativo $(\mathbb{R} \setminus \{0\}, \cdot)$

Para todo $\alpha, \beta, \gamma \in \mathbb{R} \setminus \{0\}$:

5. **Asociativa:** $(\alpha \cdot \beta) \cdot \gamma = \alpha \cdot (\beta \cdot \gamma)$
6. **Elemento neutro:** Existe $1 \in \mathbb{R}$ tal que $\alpha \cdot 1 = 1 \cdot \alpha = \alpha$
7. **Elemento simétrico (inverso):** Para cada $\alpha \neq 0$ existe $\alpha^{-1}$ tal que $\alpha \cdot \alpha^{-1} = \alpha^{-1} \cdot \alpha = 1$
8. **Conmutativa:** $\alpha \cdot \beta = \beta \cdot \alpha$

##### Propiedad distributiva

9. **Distributiva:** Para todo $\alpha, \beta, \gamma \in \mathbb{R}$:
   $$\alpha \cdot (\beta + \gamma) = \alpha \cdot \beta + \alpha \cdot \gamma$$

#### Propiedades derivadas de la estructura de cuerpo

De las propiedades anteriores se derivan las siguientes para todo $\alpha, \beta, \gamma \in \mathbb{R}$:

10. **Producto con cero:** $\alpha \cdot 0 = 0 \cdot \alpha = 0$
11. **No hay divisores de cero:** Si $\alpha \cdot \beta = 0$, entonces $\alpha = 0$ o $\beta = 0$
12. **Propiedad cancelativa:** Si $\alpha \cdot \beta = \alpha \cdot \gamma$ y $\alpha \neq 0$, entonces $\beta = \gamma$
13. **Potencias:** $\alpha \cdot \alpha = \alpha^2$, y en general $\alpha \cdot \alpha^{n-1} = \alpha^n$
14. **Diferencia de cuadrados:** $(\alpha + \beta)(\alpha - \beta) = \alpha^2 - \beta^2$
15. **Binomio al cuadrado:** $(\alpha + \beta)^2 = \alpha^2 + 2\alpha\beta + \beta^2$

:::note[Nota sobre otros conjuntos numéricos]
- En $\mathbb{Q}$ y $\mathbb{C}$ también se cumplen todas estas propiedades (son cuerpos)
- En $\mathbb{Z}$ se cumplen las propiedades aditivas y la distributiva, pero **no** existe inverso multiplicativo para todos los elementos distintos de 0, por lo que $(\mathbb{Z} \setminus \{0\}, \cdot)$ no es un grupo
- En $\mathbb{N}$ faltan tanto opuestos aditivos como inversos multiplicativos

Consulta la página de [Estructuras Algebraicas](/referencia/estructuras-algebraicas) para más detalles.
:::

#### Estructura de cuerpo ordenado

Los números reales forman un **cuerpo ordenado** $(\mathbb{R}, +, \cdot, \leq)$.

Esto significa que además de ser un cuerpo, tiene una relación de orden $\leq$ que es compatible con las operaciones:

- Si $\alpha \leq \beta$ y $\gamma \leq \rho$, entonces $\alpha + \gamma \leq \beta + \rho$
- Si $0 \leq \alpha$ y $0 \leq \beta$, entonces $0 \leq \alpha \cdot \beta$

#### Los números racionales

Los **números racionales** $\mathbb{Q}$ son aquellos que pueden expresarse como el cociente de dos enteros:
$$\mathbb{Q} = \left\{\frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0\right\}$$

##### Fracción irreducible

Una fracción $\frac{p}{q}$ es **irreducible** cuando no puede simplificarse más, es decir, cuando:
$$\gcd(|p|, |q|) = 1$$

El máximo común divisor de $|p|$ y $|q|$ es 1.

##### Propiedad de densidad (orden denso)

Los números racionales tienen la importante propiedad de que entre dos racionales cualesquiera siempre existe otro racional:

$$\forall \alpha, \beta \in \mathbb{Q} \text{ con } \alpha < \beta, \quad \exists \gamma \in \mathbb{Q} \text{ tal que } \alpha < \gamma < \beta$$

Esta propiedad también se cumple en $\mathbb{R}$ y se conoce como **densidad**.

:::tip[Consecuencia]
Por la propiedad de densidad, entre dos números racionales (o reales) diferentes, existen infinitos números racionales (o reales).
:::

### Tema 2: Límites y continuidad
Contenido por desarrollar...

### Tema 3: Derivación
Contenido por desarrollar...

### Tema 4: Aplicaciones de la derivada
Contenido por desarrollar...

### Tema 5: Integración
Contenido por desarrollar...

## Recursos

- Material docente en el aula virtual de la UNED
- Bibliografía recomendada

## Estado

✅ Tema 1: Estructura de cuerpo de los números reales y propiedades de números racionales
🚧 Resto de temas en desarrollo
