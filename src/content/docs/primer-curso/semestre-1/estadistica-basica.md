---
title: Estadística Básica
description: Formación Básica - 6 ECTS - Primer Curso, Semestre 1
---

## Información de la asignatura

- **Tipo**: Formación Básica
- **Créditos**: 6 ECTS
- **Curso**: Primero
- **Semestre**: 1

## Descripción

Introducción a la estadística descriptiva e inferencial básica.

## Temario

### Tema 1: Estadística descriptiva
Contenido por desarrollar...

### Tema 2: Distribuciones de probabilidad
Contenido por desarrollar...

### Tema 3: Variables aleatorias
Contenido por desarrollar...

### Tema 4: Inferencia estadística básica
Contenido por desarrollar...

## Herramientas computacionales

### Introducción a R

R es un lenguaje de programación y entorno estadístico ampliamente utilizado en estadística y análisis de datos. A continuación se presentan las funciones básicas para trabajar con vectores y matrices en R.

#### Funciones básicas para vectores

**`c()`** - Crear un vector

Crea un vector combinando los elementos proporcionados como argumentos.

```r
# Crear un vector numérico
v <- c(1, 2, 3, 4, 5)

# Crear un vector de caracteres
nombres <- c("Ana", "Juan", "María")
```

#### Funciones para matrices

**`matrix()`** - Crear una matriz

Crea una matriz a partir de un vector de datos.

```r
# Sintaxis básica
matrix(c(datos), ncol = n, dimnames = list(c(nombresFilas), c(nombresColumnas)))
```

**Parámetros:**
- `c(datos)`: Vector con los datos de la matriz
- `ncol`: Número de columnas
- `dimnames`: Lista opcional con nombres de filas y columnas

**Ejemplo:**
```r
# Crear una matriz 3x2
M <- matrix(c(1, 2, 3, 4, 5, 6), ncol = 2)
# Resultado:
#      [,1] [,2]
# [1,]    1    4
# [2,]    2    5
# [3,]    3    6

# Crear una matriz con nombres
M2 <- matrix(c(1, 2, 3, 4), ncol = 2,
             dimnames = list(c("fila1", "fila2"), c("col1", "col2")))
```

**`cbind()`** - Combinar por columnas

Une vectores o matrices colocándolos como columnas.

```r
v1 <- c(1, 2, 3)
v2 <- c(4, 5, 6)
M <- cbind(v1, v2)
# Resultado:
#      v1 v2
# [1,]  1  4
# [2,]  2  5
# [3,]  3  6
```

**`rbind()`** - Combinar por filas

Une vectores o matrices colocándolos como filas.

```r
v1 <- c(1, 2, 3)
v2 <- c(4, 5, 6)
M <- rbind(v1, v2)
# Resultado:
#    [,1] [,2] [,3]
# v1    1    2    3
# v2    4    5    6
```

**`dim()`** - Dimensiones de una matriz

Devuelve un vector con el número de filas y columnas de una matriz.

```r
M <- matrix(c(1, 2, 3, 4, 5, 6), ncol = 2)
dim(M)
# [1] 3 2  (3 filas, 2 columnas)
```

#### Operaciones con matrices

**Multiplicación de matrices** - `%*%`

El operador `%*%` realiza la multiplicación matricial estándar.

```r
A <- matrix(c(1, 2, 3, 4), ncol = 2)
B <- matrix(c(5, 6, 7, 8), ncol = 2)

# Multiplicación matricial
C <- A %*% B
```

:::caution[Nota importante]
El operador `*` realiza multiplicación elemento a elemento, **no** multiplicación matricial. Para multiplicación matricial, usa siempre `%*%`.
:::

#### Ejemplo completo

```r
# Crear dos matrices
A <- matrix(c(1, 2, 3, 4, 5, 6), ncol = 2)
B <- matrix(c(7, 8, 9, 10, 11, 12), ncol = 3)

# Consultar dimensiones
dim(A)  # [1] 3 2
dim(B)  # [1] 2 3

# Multiplicación matricial (compatible: 3x2 × 2x3 = 3x3)
C <- A %*% B
print(C)

# Combinar vectores
v1 <- c(1, 2, 3)
v2 <- c(4, 5, 6)
M_filas <- rbind(v1, v2)
M_cols <- cbind(v1, v2)
```

:::tip[Recursos adicionales]
Para más información sobre R y estadística, consulta la documentación oficial de R en [https://www.r-project.org/](https://www.r-project.org/) y los manuales disponibles en el aula virtual de la UNED.
:::

## Recursos

- Material docente en el aula virtual de la UNED
- Bibliografía recomendada

## Estado

✅ Herramientas computacionales: Introducción a R con funciones básicas para vectores y matrices
🚧 Temas teóricos en desarrollo
