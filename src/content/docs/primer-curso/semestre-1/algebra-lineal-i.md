---
title: Álgebra Lineal I
description: Formación Básica - 6 ECTS - Primer Curso, Semestre 1
---

## Información de la asignatura

- **Tipo**: Formación Básica
- **Créditos**: 6 ECTS
- **Curso**: Primero
- **Semestre**: 1

## Descripción

Introducción al álgebra lineal, espacios vectoriales, matrices y sistemas de ecuaciones lineales.

## Temario

### Tema 1: Sistemas de ecuaciones lineales
Contenido por desarrollar...

### Tema 2: Matrices

#### Definiciones y notación básica

Una **matriz** es un arreglo rectangular de números organizados en filas y columnas.

##### Notación de tamaño
Sea $A \in \mathbb{K}^{m \times n}$. Entonces $A$ tiene $m$ filas y $n$ columnas.

**Ejemplo:**
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} \in \mathbb{R}^{2 \times 3}$$
Esta matriz tiene 2 filas y 3 columnas.

##### Tipos de matrices según su forma

- **Matriz columna:** $A \in \mathbb{K}^{m \times 1}$

  **Ejemplo:** $\begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} \in \mathbb{R}^{3 \times 1}$

- **Matriz fila:** $A \in \mathbb{K}^{1 \times n}$

  **Ejemplo:** $\begin{pmatrix} 1 & 2 & 3 & 4 \end{pmatrix} \in \mathbb{R}^{1 \times 4}$

- **Matriz cuadrada:** $A \in \mathbb{K}^{n \times n}$ (mismo número de filas que columnas)

  **Ejemplo:** $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \in \mathbb{R}^{2 \times 2}$

- **Matriz de orden n:** Matriz cuadrada $n \times n$

##### Matrices especiales

**Matriz identidad de orden n** ($I_n$): Matriz diagonal con todas las entradas de la diagonal principal iguales a 1.

$$I_1 = (1), \quad I_2 = \begin{pmatrix}1&0\\0&1\end{pmatrix}, \quad I_3 = \begin{pmatrix}1&0&0\\0&1&0\\0&0&1\end{pmatrix}$$

**Matriz nula** ($0_{m \times n}$): Matriz con todas sus entradas iguales a 0.

$$0_{3 \times 3} = \begin{pmatrix}0&0&0\\0&0&0\\0&0&0\end{pmatrix}$$

**Matriz diagonal**: Matriz de orden $n$ con todas las entradas fuera de la diagonal principal iguales a 0.

Notación: $\text{diag}(d_1, \ldots, d_n)$

**Ejemplo:**
$$\text{diag}(2, -5, 1, 6) = \begin{pmatrix}2 & 0 & 0 & 0 \\0 & -5 & 0 & 0 \\0 & 0& 1 & 0 \\0 & 0 & 0 & 6\end{pmatrix}$$

**Matriz triangular superior**: Matriz de orden $n$ donde todos los elementos por debajo de la diagonal principal son 0.

**Matriz triangular inferior**: Matriz de orden $n$ donde todos los elementos por encima de la diagonal principal son 0.

#### Traspuesta de una matriz

La **traspuesta** de una matriz $A$ se denota $A^T$ y se obtiene intercambiando filas por columnas.

**Definición por componentes:** $(A^T)_{ij} = A_{ji}$

**Ejemplo:** Si $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$, entonces $A^T = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$

##### Matrices simétricas y antisimétricas

- **Matriz simétrica:** $A^T = A$

  **Ejemplo:** $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{pmatrix}$ es simétrica

- **Matriz antisimétrica (o skew-simétrica):** $A^T = -A$

  **Ejemplo:** $A = \begin{pmatrix} 0 & 2 & -3 \\ -2 & 0 & 1 \\ 3 & -1 & 0 \end{pmatrix}$ es antisimétrica (la diagonal es siempre cero)

#### Traspuesta conjugada (para matrices complejas)

Para matrices complejas, la **traspuesta conjugada** se denota $A^* = \overline{A}^T = A^{\dagger}$

**Por componentes:** $(A^*)_{ij} = \overline{A_{ji}}$

Se obtiene trasponiendo y luego conjugando (invirtiendo el signo de la parte imaginaria).

**Ejemplo:** Si $A = \begin{pmatrix} 1+i & 2-i \\ 3 & 4+2i \end{pmatrix}$, entonces $A^* = \begin{pmatrix} 1-i & 3 \\ 2+i & 4-2i \end{pmatrix}$

**Matriz hermítica:** Matriz cuadrada $A \in \mathbb{C}^{n \times n}$ donde $A = A^*$. Sus elementos de la diagonal son todos reales.

#### Submatrices

Una **submatriz** de $A$ es cualquier matriz que se obtenga eliminando una o varias filas y/o columnas de $A$.

- **Submatriz fila** ($F_i$): Submatriz resultante de extraer la fila $i$
- **Submatriz columna** ($C_j$): Submatriz resultante de extraer la columna $j$

#### Operaciones con matrices

##### Suma de matrices

La suma de dos matrices $A$ y $B$ del **mismo tamaño** es la matriz $A+B$ cuya entrada $(i,j)$ es:
$$[A+B]_{ij} = a_{ij} + b_{ij}$$

Es decir, se suman elemento a elemento.

##### Producto por escalares

El producto de un escalar $\lambda$ por una matriz $A$ es la matriz $\lambda A$ cuya entrada $(i,j)$ es:
$$[\lambda A]_{ij} = \lambda a_{ij}$$

Es decir, se multiplica cada elemento por $\lambda$.

##### Leyes de la suma de matrices y producto por escalares

Sean $A, B, C \in \mathfrak{M}_{m \times n}(\mathbb{K})$ y $\alpha, \beta \in \mathbb{K}$:

1. **Asociativa:** $(A+B)+C = A+(B+C)$
2. **Conmutativa:** $A+B = B+A$
3. **Elemento neutro:** $A + 0_{m\times n} = A$
4. **Elemento opuesto:** $A + (-A) = 0_{m\times n}$
5. **Distributiva respecto de la suma de matrices:** $\alpha(A+B) = \alpha A + \alpha B$
6. **Distributiva respecto de la suma de escalares:** $(\alpha + \beta)A = \alpha A + \beta A$
7. **Asociativa respecto del producto por escalares:** $(\alpha\beta)A = \alpha(\beta A)$
8. **Unidad:** $1A = A$

##### Producto de matrices

El producto $AB$ tiene sentido si el **número de columnas de $A$** es igual al **número de filas de $B$**.

Dadas $A \in \mathbb{K}^{m \times n}$ y $B \in \mathbb{K}^{n \times p}$, el producto $AB$ es una matriz de tamaño $m \times p$ cuya entrada $(i,j)$ se calcula como:

$$\boxed{[AB]_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}}$$

Es decir, se multiplica la fila $i$ de $A$ por la columna $j$ de $B$.

##### Leyes del producto de matrices

Sean $A \in \mathfrak{M}_{m\times n}(\mathbb{K})$, $B, C \in \mathfrak{M}_{n\times p}(\mathbb{K})$, $D \in \mathfrak{M}_{p\times q}(\mathbb{K})$ y $\alpha \in \mathbb{K}$:

1. **Asociativa:** $(AB)D = A(BD)$
2. **Elemento neutro por la derecha:** $AI_n = A$
3. **Elemento neutro por la izquierda:** $I_m A = A$
4. **Asociativa respecto del producto por escalares:** $\alpha(AB) = (\alpha A)B = A(\alpha B)$
5. **Distributiva por la derecha:** $A(B+C) = AB + AC$
6. **Distributiva por la izquierda:** $(B+C)D = BD + CD$

:::caution[El producto de matrices NO es conmutativo]
En general, $AB \neq BA$. El orden de los factores importa en el producto de matrices.
:::

### Tema 3: Determinantes
Contenido por desarrollar...

### Tema 4: Espacios vectoriales
Contenido por desarrollar...

### Tema 5: Aplicaciones lineales
Contenido por desarrollar...

## Recursos

- Material docente en el aula virtual de la UNED
- Bibliografía recomendada

## Estado

✅ Tema 2 (Matrices): Contenido completo con definiciones, operaciones y propiedades
🚧 Resto de temas en desarrollo
