import React,{useEffect,useState} from 'react'
import Message from './Message';


export default function SimpleForm() {

const [formState, setformState] = useState({
    name:'',
    contraseña:''
})
const {name,contraseña} = formState;

useEffect( () =>{
   console.log('hey')
},[]);

useEffect( () =>{
   console.log('name cambio')
},[formState]);

useEffect( () =>{
   console.log('email cambio')
},[contraseña]);

const handleInputChange = ({target}) =>{
 setformState ({
     ...formState,
     [target.name] : target.value
 })

}

    return (
        <>
            <h1 className="container">useEffect</h1>
      
            <div className="form-group container">
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
                type="password"
                name="contraseña"
                className="form-control"
                placeholder="contraseña"
                autoComplete="off"
                value={contraseña}
                onChange={handleInputChange}
                />
            </div>

           {(contraseña === '123') &&  <Message/>}
        </>
    )
}
