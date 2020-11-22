import React from 'react'
import { useForm } from '../../hooks/useForm';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChangue] = useForm({
    name: '',
    email: '',
    password: ''
  });
  
  const { name, email, password } = formValues;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }
 
  return (
    <form  onSubmit={ handleFormSubmit } className="container card">
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

        <div className="form-group">
        <input 
            type="password"
            name="password"
            className="form-control"
            placeholder="*****"
            autoComplete="off"
            value={ password }
            onChange={ handleInputChangue }
        />
        </div>

        <div className="card-footer">
            <div className="alert alert-success" role="alert">
                nombre: <span className="badge badge-primary"> { ( name !== '' ? name : 'Sin ingresar.' ) } </span>
                email: <span className="badge badge-primary"> { ( email !== '' ? email : 'Sin ingresar.' ) } </span>
                clave: <span className="badge badge-primary"> { ( password !== '' ? password : 'Sin ingresar.' )} </span>
            </div>
            <button type="submit" className="btn btn-success">
                Mostrar
            </button>
        </div>

    </form>
  )
}