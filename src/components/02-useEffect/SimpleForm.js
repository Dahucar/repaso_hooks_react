import React, { useEffect, useState } from 'react'
import { EffectMensaje } from './EffectMensaje';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });
  
  const { name, email } = formState;
  
  useEffect(() => {
    console.log('useEffect -> la web se ha cargado!.');
  }, [  ]);

  /*
    useEffect: es un hook que ejecuta alfún efecto cuando "algo" suceda en el componente
    por ende debemos indicar cuando debe ocurrir ese cambio. 
    -> deberé crear un efecto por cada elemento que deseo monitorear.
  
  useEffect(() => {
    console.log('useEffect -> la web se ha cargado!.');
  }, [  ]);

  ejecto que se dispára al cambiar el valor 'name' del form
  useEffect(() => {
    console.log('useEffect -> input name ha cambiado!.');
  }, [ name ]);

  ejecto que se dispára al cambiar el valor 'name' del form
  useEffect(() => {
    console.log('useEffect -> input email ha cambiado!.');
  }, [ email ]);

  ejecto que se dispára al cambiar el estado del form
  useEffect(() => {
    console.log('useEffect -> form ha cambiado!.');
  }, [ formState ]);
  */

  const handleInputChangue = ({ target }) => {
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  } 

  return (
    <div className="container card">
      <h3>UseEffect</h3>
      <hr/>

      <div className="form-group">
        <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingrese nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChangue }
        />
      </div>

      <div className="form-group">
        <input 
          type="text"
          name="email"
          className="form-control"
          placeholder="Ingrese email"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChangue }
        />
      </div>

      <div className="card-footer">
        { ( name === 'daniel' ) && <EffectMensaje /> }
      </div>

    </div>
  )
}