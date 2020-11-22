import React from 'react'
import { useCustomEffect } from '../../hooks/useCustomEffect'
import { useCustomCounter } from '../01-useState/useCustomCounter';

export const MultipleCustomHooks = () => {

    const { state:counter, increment, decrement } = useCustomCounter(1);
    const { loading, data } = useCustomEffect( 'https://www.breakingbadapi.com/api/quotes/'+counter );

    /*
        Resultado de la API.
        "quote": "I am not in danger, Skyler. I am the danger!",
        "author": "Walter White",
        "series": "Breaking Bad"
    */
    // data por defecto tendra valor "null" al agregarle "!data" será true y con "!!data" será false. 
    // por ende si es false obtenemos el resultado del array
    const { quote, author, series } = !!data && data[0];

    return (
        <div className="container card">
            <div className="card-header">
                <h2>Custom Hooks with BreakingBad quotes</h2>
            </div>
            <div className="card-body">
                {
                    loading ? 
                    (
                        <div className="spinner-grow text-success" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : 
                    (
                        <div>
                            <blockquote className="blockquote text-right">
                                <p className="mb-0"> quote - { counter } </p>
                                <p className="mb-0"> { quote } </p>
                                <footer className="blockquote-footer">{ author } <cite title="Source Title">{ series }</cite></footer>
                            </blockquote>
                            <button className="btn btn-success"
                                onClick={ increment }>
                                Siguiente
                            </button>
                            <button className="btn btn-danger"
                                onClick={ decrement }>
                                Volver
                            </button>
                        </div> 
                    )
                }
                
            </div>
        </div>
    )
}
