# Descripción basica del hook **useContext**

- Este hook tiene como finalidad evitar el paso por refencia que se da dentro de la definición de jerarquia de mis compomentenes donde mediantes las porps de estoy se comparten varibles para que los componentes hijos accedan a estos valores.

    **Ejemplo del paso por refentecia en las props mecionado.**
    ````
    return (
        <AppScreen user={ miUser }>
            <NavBar user={ miUser } >
                <CardInfoUser user={ miUser } />
            </NavBar>
        </AppScreen>
    )
    ````
    y dentro del componente **ModalInfoUser**
    ````
    return (
        <div className="card">
            <div className="card-body">
                { user.name } 
            </div>
        </div>
    )
    ````
    
    **USO DEL HOOK**
    Para usar este componente primero se debe crear el contexto. Donde claro deberé importarlo e incluir dentro de la funcion createContext el valor que deseo compartir a travez de mis componentes. 
    Esto claro exportando la constante de forma que pueda usarla en otros archivos.
    ````
    import { createContext } from 'react';
    export const UserContext = createContext(null);
    ````

    Luego dentro del componente "padre", en este ejemplo el AppScreen voy a crear mediante el nombre dado a la constante el ***"Provider"***. El cual tiene la siguiente estructura.
    ````
    const user = {
        name: 'Daniel',
        surname: 'Huneul'
    }

    return (
        <UserContext.Provider value={ user }>
            <AppScreen />
        </UserContext.Provider>
    )
    ````

    Donde en la prop **value** asigno el valor que deseo compartir, que será accesible dentro de cualquier otro componente que se encuentre dentro de la jerarquia del AppScreen.

    **AHORA para obtener el valor compartido.** dentro algún componente dentro de la jerarquia voy a solicitar el valor al contexto creado. De la siguiente forma.

    ````
    const { user } = useContext(UserContext);
    ````

    Donde debo importar tanto el hook usado, como el contexto creado y asi obtener el valor deseado. Evitanto pasar por las porps valores innecesarios.