import React, {Component} from 'react'
import './form.css'

class Form extends Component
{
    render()
	{
        return ( 
            <div> 
                <h2>Formulario de contacto</h2> 
                <form className='cf'> 
                <div className='half left cf'> 
                    <input type='text' placeholder='Nombre' name='user_name' /> 
                    <input type='email' placeholder='Correo electronico' name='user_email' /> 
                </div> 
                <div className='half right cf'> 
                    <textarea name='message' type='text' placeholder='Mensaje'>
                    </textarea> 
                </div> 
                <input type='submit' value='Enviar' id='input-submit' /> 
                </form> 
            </div> 
        ); 
    }
}

export default Form;