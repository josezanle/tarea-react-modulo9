import React, {useEffect } from 'react'
import { UseForm } from '../../hooks/UseForm';


export const FormWithCustomHook = () => {

const [formvalues, handleInputChange] = UseForm({
    name:'',
    email:'',
    contraseña:''
})
const {name,email,contraseña} = formvalues;

useEffect(() => {
    console.log('email cambio')
}, [email]);

const handleSubmit = (e) =>{
    e.preventDefault ();
    console.log(formvalues)
}

    return (
        <form className="container" onSubmit={handleSubmit}>
            <h5>FormWithCustomHook</h5>
      
            <div className="form-group">
                <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
                />
                <input 
                type="text"
                name="email"
                className="form-control my-3"
                placeholder="tu email"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
                />
                <input 
                type="password"
                name="contraseña"
                className="form-control"
                placeholder="contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={handleInputChange}
                />
            </div>
            <button 
                type="submit"
                className="btn btn-primary"

            >Guardar</button>

        </form>
    )
}
