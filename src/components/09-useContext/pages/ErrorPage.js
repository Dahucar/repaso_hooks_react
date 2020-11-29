import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Recurso no encontrado</h1>
            <p className="lead">
                Lo sentimos. El recurso que buscas no se encuentra. Prueba navegar por 
                el contenido que tenemos disponible. 
            </p>
            <hr className="my-4" />
            <Link className="btn btn-success btn-lg" to="/">Volver al Home</Link>
        </div>
    )
}
