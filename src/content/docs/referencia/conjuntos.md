---
title: Conjuntos y Notación
description: Conjuntos numéricos fundamentales y notación matemática
---

Esta página proporciona una referencia de los conjuntos numéricos fundamentales utilizados en matemáticas y su notación estándar.

## Conjuntos numéricos

### Números naturales
**Notación:** $\mathbb{N}$

Los números naturales son los números que se usan para contar:
$$\mathbb{N} = \{0, 1, 2, 3, 4, 5, \ldots\}$$

:::note[Convención]
En algunas referencias, $\mathbb{N}$ comienza en 1 en lugar de 0. En estas notas seguimos la convención de incluir el 0.
:::

### Números enteros
**Notación:** $\mathbb{Z}$

Los números enteros incluyen los naturales, sus opuestos negativos y el cero:
$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

### Números racionales
**Notación:** $\mathbb{Q}$

Los números racionales son aquellos que pueden expresarse como el cociente de dos enteros:
$$\mathbb{Q} = \left\{\frac{p}{q} : p, q \in \mathbb{Z}, q \neq 0\right\}$$

:::tip[Fracción irreducible]
Una fracción $\frac{p}{q}$ es **irreducible** cuando no puede simplificarse más, es decir, cuando $\gcd(|p|, |q|) = 1$ (el máximo común divisor de $|p|$ y $|q|$ es 1).
:::

### Números reales
**Notación:** $\mathbb{R}$

Los números reales incluyen todos los números racionales e irracionales. Representan puntos en la recta numérica.

**Notación:** $\mathbb{R}^+$ representa el conjunto de números reales positivos.

### Números complejos
**Notación:** $\mathbb{C}$

Los números complejos tienen la forma $a + bi$ donde $a, b \in \mathbb{R}$ y $i = \sqrt{-1}$:
$$\mathbb{C} = \{a + bi : a, b \in \mathbb{R}\}$$

## Relaciones entre conjuntos numéricos

Los conjuntos numéricos forman una jerarquía de contención:
$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$$

Esto significa que:
- Todo número natural es un entero
- Todo número entero es un racional
- Todo número racional es un real
- Todo número real es un complejo

## Cuerpos

### Cuerpo base
**Notación:** $\mathbb{K}$

El **cuerpo base** es el conjunto de números sobre el cual están definidos los elementos de vectores o matrices. Es el conjunto al que pertenecen todas las entradas de matrices o vectores, y que permite realizar las operaciones básicas: **suma, resta, multiplicación y división (excepto por cero)**.

Ejemplos de cuerpos:
- $\mathbb{K} = \mathbb{Q}$ (racionales)
- $\mathbb{K} = \mathbb{R}$ (reales)
- $\mathbb{K} = \mathbb{C}$ (complejos)

### Conjunto de escalares positivos
**Notación:** $\mathbb{K}^+$

Representa el conjunto de escalares positivos del cuerpo $\mathbb{K}$.

## Conjunto vacío

**Notación:** $\emptyset$

El conjunto vacío es el conjunto que no contiene ningún elemento.

## Propiedades importantes

### Propiedad de orden denso
Para los números racionales $\mathbb{Q}$ y reales $\mathbb{R}$, se cumple:
$$\forall \alpha, \beta \in \mathbb{Q} \text{ con } \alpha < \beta, \ \exists \gamma \in \mathbb{Q} \text{ tal que } \alpha < \gamma < \beta$$

Es decir, entre dos números racionales (o reales) siempre existe otro número racional (o real). Esta propiedad se conoce como **densidad**.

## Símbolos relacionados

Para más información sobre símbolos de conjuntos como unión, intersección, etc., consulta la página de [Símbolos Matemáticos](./simbolos).
