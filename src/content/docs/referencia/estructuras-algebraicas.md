---
title: Estructuras Algebraicas
description: Definiciones fundamentales de estructuras algebraicas
---

Esta página proporciona una introducción a las estructuras algebraicas fundamentales en matemáticas.

## Propiedades básicas

Antes de definir las estructuras algebraicas, repasemos algunas propiedades importantes:

### Asociatividad
Una operación $\cdot$ es **asociativa** si:
$$a \cdot (b \cdot c) = (a \cdot b) \cdot c$$

para todo $a, b, c$ en el conjunto.

### Conmutatividad
Una operación $+$ es **conmutativa** si:
$$a + b = b + a$$

para todo $a, b$ en el conjunto.

## Monoide

Un **monoide** es una estructura algebraica $(M, \cdot)$ donde:
1. La operación $\cdot$ es **asociativa**
2. Existe un **elemento neutro** $e$ tal que $e \cdot a = a \cdot e = a$ para todo $a \in M$

### Monoide conmutativo
Un monoide $(M, \cdot)$ es **conmutativo** si además la operación $\cdot$ es conmutativa.

## Grupo

Un **grupo** es una estructura algebraica $(G, \cdot)$ donde:
1. La operación $\cdot$ es **asociativa**
2. Existe un **elemento neutro** $e$ tal que $e \cdot a = a \cdot e = a$ para todo $a \in G$
3. Todo elemento tiene un **inverso**: para cada $a \in G$, existe $a^{-1} \in G$ tal que $a \cdot a^{-1} = a^{-1} \cdot a = e$

### Grupo conmutativo (o abeliano)
Un grupo $(G, \cdot)$ es **conmutativo** (o **abeliano**) si además la operación $\cdot$ es conmutativa.

## Semianillo

Un **semianillo** es una estructura algebraica $(A, +, \cdot)$ tal que:

1. **(A, +) es un monoide conmutativo:**
   - Existe elemento neutro (denotado 0)
   - La operación + es asociativa
   - La operación + es conmutativa: $\alpha + \beta = \beta + \alpha$

2. **(A, ·) es un monoide (no necesariamente conmutativo):**
   - Existe elemento neutro (denotado 1)
   - La operación · es asociativa: $a \cdot (b \cdot c) = (a \cdot b) \cdot c$

3. **La multiplicación es distributiva respecto de la suma:**
   - $a \cdot (b + c) = a \cdot b + a \cdot c$ (distributiva por la izquierda)
   - $(a + b) \cdot c = a \cdot c + b \cdot c$ (distributiva por la derecha)

4. **El elemento neutro de la suma es absorbente para el producto:**
   - $0 \cdot a = a \cdot 0 = 0$

### Semianillo conmutativo
Un semianillo es **conmutativo** si la operación de multiplicación también es conmutativa.

### Ejemplo: Los números naturales
$(\mathbb{N}, +, \cdot)$ es un **semianillo conmutativo con elemento unidad**.

## Anillo

Un **anillo** es una estructura algebraica $(R, +, \cdot)$ tal que:

1. **(R, +) es un grupo abeliano:**
   - Existe elemento neutro (0)
   - La suma es asociativa y conmutativa
   - Todo elemento tiene un opuesto: para cada $a \in R$, existe $-a \in R$ tal que $a + (-a) = 0$

2. **(R, ·) es un monoide:**
   - La multiplicación es asociativa
   - Existe elemento neutro para la multiplicación (denotado 1)

3. **La multiplicación es distributiva respecto de la suma**

### Ejemplo: Los números enteros
$(\mathbb{Z}, +, \cdot)$ es un anillo conmutativo.

:::note[Diferencia entre semianillo y anillo]
La diferencia principal es que en un anillo, cada elemento tiene un **opuesto aditivo** (inverso para la suma), mientras que en un semianillo esto no es necesario. Por eso $\mathbb{N}$ es solo un semianillo, mientras que $\mathbb{Z}$ es un anillo.
:::

## Cuerpo

Un **cuerpo** es una estructura algebraica $(K, +, \cdot)$ tal que:

1. **(K, +) es un grupo abeliano:**
   - Elemento neutro: 0
   - Asociativa y conmutativa
   - Todo elemento tiene opuesto

2. **(K \ {0}, ·) es un grupo abeliano:**
   - Elemento neutro: 1
   - Asociativa y conmutativa
   - Todo elemento distinto de 0 tiene inverso multiplicativo

3. **La multiplicación es distributiva respecto de la suma:**
   $$\alpha \cdot (\beta + \gamma) = \alpha \cdot \beta + \alpha \cdot \gamma$$

### Propiedades de un cuerpo

De las propiedades estructurales de cuerpo se derivan:

1. $\alpha \cdot 0 = 0 \cdot \alpha = 0$ para todo $\alpha \in K$
2. Si $\alpha \cdot \beta = 0$, entonces $\alpha = 0$ o $\beta = 0$ (no hay divisores de cero)
3. **Propiedad cancelativa:** Si $\alpha \cdot \beta = \alpha \cdot \gamma$ y $\alpha \neq 0$, entonces $\beta = \gamma$

### Ejemplos de cuerpos
- $(\mathbb{Q}, +, \cdot)$ - Los números racionales
- $(\mathbb{R}, +, \cdot)$ - Los números reales
- $(\mathbb{C}, +, \cdot)$ - Los números complejos

### No son cuerpos
- $(\mathbb{Z}, +, \cdot)$ - Los enteros NO forman un cuerpo porque no todo elemento distinto de 0 tiene inverso multiplicativo (por ejemplo, 2 no tiene inverso en $\mathbb{Z}$)
- $(\mathbb{N}, +, \cdot)$ - Los naturales NO forman un cuerpo porque no tienen ni opuestos aditivos ni inversos multiplicativos

## Cuerpo ordenado

Un **cuerpo ordenado** es una estructura $(\mathbb{K}, +, \cdot, \leq)$ donde:

1. $(\mathbb{K}, +, \cdot)$ es un cuerpo
2. $(\mathbb{K}, \leq)$ es un conjunto ordenado con **orden total**
3. La relación de orden $\leq$ es **compatible con las operaciones** + y $\cdot$:

   - Si $\alpha \leq \beta$ y $\gamma \leq \rho$, entonces $\alpha + \gamma \leq \beta + \rho$
   - Si $0 \leq \alpha$ y $0 \leq \beta$, entonces $0 \leq \alpha \cdot \beta$

### Ejemplo
$(\mathbb{R}, +, \cdot, \leq)$ es un cuerpo ordenado.

:::note[Los complejos no son ordenables]
$\mathbb{C}$ es un cuerpo, pero **no puede ser ordenado** de manera compatible con sus operaciones. No existe una relación de orden total en $\mathbb{C}$ que sea compatible con la suma y el producto.
:::

## Resumen de jerarquía

```
Monoide → Grupo
   ↓         ↓
Semianillo → Anillo → Cuerpo → Cuerpo Ordenado
```

Cada estructura añade propiedades adicionales a la anterior:
- **Monoide**: asociatividad + elemento neutro
- **Grupo**: monoide + inversos
- **Semianillo**: dos monoides con distributividad
- **Anillo**: grupo abeliano + monoide multiplicativo + distributividad
- **Cuerpo**: anillo + inversos multiplicativos (excepto 0)
- **Cuerpo ordenado**: cuerpo + orden compatible

## Referencias

Para más información sobre conjuntos numéricos específicos que forman estas estructuras, consulta [Conjuntos y Notación](./conjuntos).
