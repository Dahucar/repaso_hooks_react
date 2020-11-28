// IMPORTANTEN: en React el "push" a la calle.
console.log(' Probando el Reducer ');

const initialState = [
    {
        id: 1,
        todo: 'Comprar pan.',
        done: false
    },
    {
        id: 2,
        todo: 'Comprar azucar.',
        done: false
    },
    {
        id: 3,
        todo: 'Comprar sal.',
        done: false
    }
];

const todoReducer = ( state = initialState, action ) => {
    //mediante la accion veremos que hacer cuando se envie un nuevo estado
    if ( action?.type === 'agregar' ) {
        return [ ...state, action.payload ]; // mediante eñ operador spred añado los elementos anteriores y el nuevo.
    }

    // siempte se debe devolver un estado
    return state;
}

let todos = todoReducer();

// 1. Añadir un nuevo todo a mi state inicial.
// un nuevo OBJ, que de alguna forma se debera enviar al reducer mediante la accion.
const newTodo = {
    id: 4,
    todo: 'Comprar leche.',
    done: false
};

// 2. Crear una accion 
const agregarTodoAction = {
    type: 'agregar', // indicara que se hara cuando se envie.
    payload: newTodo // lo que se envia con la accion
};

// 3. Enviar el nuevo elemento al reducer.
// IMPORTANTE: nunca se envia el objeto tal cual al reducer. 
todos = todoReducer( todos, agregarTodoAction );


console.log( todos );