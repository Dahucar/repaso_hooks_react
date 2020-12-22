# Descripción basica del hook **useState**

- Este hook controla el estado del valor que se le asigne. Donde podre establecerle un valor de cualquier tipo (Objeto, valor primitivo y Arrays por ejemplo).

    **sintaxis:**
    ````
    const valorInicial1 = [{...}, {...}, {...}];
    const valorInicial2 = {
        propiedad: "valorPripiedad"
    };
    const valorInicial3 = true;
    const [ valor, setValor ] = useState( valorInicial1 );
    ````

    donde en la función **useStae** definire el valor a evaluar.

    **funcionamiento:** para guardar el contedo de esta función lo hare usando uan primera propidad que guardara el valor actual de lo que sea que haya asingnado, la segunda propiedad es una funcion que me permite actualizar su estado, pero mediante un callback podre obtener el estado anterior. Ejemplo.

    ````
    setValor( valorOriginal => [ {...}, ...valorOriginal ] );
    ````
    ````
    setValor([{...}]);
    ````

    Cabe destacar que dentro del callback podre definir cualquier logica para cambiar el estado.

