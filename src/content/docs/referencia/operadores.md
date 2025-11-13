---
title: Operadores Matemáticos
description: Referencia de operadores matemáticos comunes como sumatorios y productorios
---

Esta página proporciona una referencia de los operadores matemáticos más utilizados en el grado.

## Sumatorio

El operador sumatorio se denota con la letra griega sigma mayúscula: $\Sigma$

### Notación
$$\sum_{i=1}^{n} a_i$$

Donde:
- El **subíndice** ($i=1$) indica el valor inicial del índice
- El **superíndice** ($n$) indica el valor final del índice
- El **término** ($a_i$) indica la expresión que se suma en cada paso

### Ejemplo básico
$$\sum_{i=1}^{n} i^2 = 1^2 + 2^2 + 3^2 + \cdots + n^2$$

Esta expresión significa: "suma de los cuadrados de los primeros $n$ números naturales".

### Ejemplos concretos

#### Ejemplo 1: Suma de los primeros 5 cuadrados
$$\sum_{i=1}^{5} i^2 = 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 1 + 4 + 9 + 16 + 25 = 55$$

#### Ejemplo 2: Suma con término constante
$$\sum_{i=1}^{4} 3 = 3 + 3 + 3 + 3 = 12$$

#### Ejemplo 3: Suma con expresión general
$$\sum_{k=0}^{3} (2k + 1) = (2 \cdot 0 + 1) + (2 \cdot 1 + 1) + (2 \cdot 2 + 1) + (2 \cdot 3 + 1)$$
$$= 1 + 3 + 5 + 7 = 16$$

### Propiedades del sumatorio

1. **Linealidad - Factor constante:**
   $$\sum_{i=1}^{n} c \cdot a_i = c \cdot \sum_{i=1}^{n} a_i$$

2. **Linealidad - Suma de términos:**
   $$\sum_{i=1}^{n} (a_i + b_i) = \sum_{i=1}^{n} a_i + \sum_{i=1}^{n} b_i$$

3. **Suma de una constante:**
   $$\sum_{i=1}^{n} c = n \cdot c$$

### Fórmulas útiles

- **Suma de los primeros n naturales:**
  $$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

- **Suma de los primeros n cuadrados:**
  $$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$

- **Suma de los primeros n cubos:**
  $$\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2$$

## Productorio

El operador productorio se denota con la letra griega pi mayúscula: $\Pi$

### Notación
$$\prod_{i=1}^{n} a_i$$

Esta notación indica el producto de todos los términos $a_i$ desde $i=1$ hasta $i=n$:
$$\prod_{i=1}^{n} a_i = a_1 \cdot a_2 \cdot a_3 \cdot \ldots \cdot a_n$$

### Ejemplo
$$\prod_{i=1}^{5} i = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$$

:::note[Factorial]
El ejemplo anterior es equivalente al factorial de 5: $5! = 120$
:::

### Propiedades del productorio

1. **Producto de potencias:**
   $$\prod_{i=1}^{n} a_i^c = \left(\prod_{i=1}^{n} a_i\right)^c$$

2. **Producto de términos:**
   $$\prod_{i=1}^{n} (a_i \cdot b_i) = \left(\prod_{i=1}^{n} a_i\right) \cdot \left(\prod_{i=1}^{n} b_i\right)$$

3. **Producto de una constante:**
   $$\prod_{i=1}^{n} c = c^n$$

## Otros operadores

### Unión e Intersección de conjuntos indexados

Similar al sumatorio y productorio, podemos tener uniones e intersecciones de familias de conjuntos:

- **Unión:** $\bigcup_{i=1}^{n} A_i = A_1 \cup A_2 \cup \cdots \cup A_n$

- **Intersección:** $\bigcap_{i=1}^{n} A_i = A_1 \cap A_2 \cap \cdots \cap A_n$

### Límites

Aunque no es un "operador" en el mismo sentido, el símbolo de límite es fundamental:

$$\lim_{x \to a} f(x)$$

Representa el valor al que se aproxima $f(x)$ cuando $x$ se acerca a $a$.
