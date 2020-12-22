# Descripción basica del hook **useEffect**

- Este hook "dispara" una accion cada vez que se ejecuta el componente o cuando las depencias dadas cambien.

    **sintaxis:**
    ````
    useEffect(() => {}, []);
    ````

    Para hacer uso de este hook deberé definir la estructura anteior donde tendre un callback (lo que quiere hacer cuando el efecto actúe), y un segundo parametro con un array de dependencias (si estas cambian el efecto se dispara de nueva cuanta)

    **funcionamiento:** el callback podra tener cualquier logia dentro de si, y el array de dependencias, el cual si esta vacio solo se ejecutará al cargar el componente.

    En este caso. cada vez que el contenido de la varible mi valor cambie se ejecuatara de nueva cuenta el ejecto.

    ````
    const [ miValor, setMiValor ] = useState('Yo soy el valor');
    useEffect(() => {
        console.log(`efecto ejecutado con: ${ miValor }`)
    }, [ miValor ]);
    ````  

    **Limpieza del efecto:** En el caso de querer evitar que el efecto se ejecute más de lo deseado se puede limpiar el contenido de este. Por ejemplo. Si estoy añadiendo un evento y este se duplica por cada vez que se muestra el componente se quitaría de esta forma.

    ````
    useEffect(() => {
        windows.addEventListener('mousemove', () => {
            console.log('contenido de evento.');
        });

        return () => {
            window.removeEventListener('mousemove', () => {});
        }
    }, [ ]);
    ````  
    Donde mediante el retorno de un callback cancelare la logica definida.
    ````  
    return () => {
        window.removeEventListener('mousemove', () => {});
    }
    ````  