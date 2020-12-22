# Descripción basica del hook **useMemo**

- Este hook permite memorizar o recordar el valor asingado a el, de forma que en caso de tener una logica compleja de ejecutar pueda recordar el ultimo valor dado y no tener que calcularlo de nueva cuta.


    **sintaxis:**
    En este caso usando la función **useMemo** voy a asignarle un callback el cual retornara el valor que deseo recordar, en este caso el resultado de otroa función. 
    ````
    const miFuncion = ( valor1, valor2 ) => valor1 + valor2;
    const valorMemorizado = useMemo(() => miFuncion(1, 1));
    ````
    De esta forma el valor de la constante **valorMemorizado** solo se actualizara cuando el retorno de **miFuncion** cambie.
