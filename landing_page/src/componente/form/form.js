import React, {Component} from 'react'
import './form.css'

class Form extends Component
{
    render()
	{
        return ( 
            <div> 
                <h1>Formulario de contacto</h1> 
                <form className='cf'> 
                <div className='half left cf'> 
                    <input type='text' placeholder='Name' name='user_name' /> 
                    <input type='email' placeholder='Email address' name='user_email' /> 
                </div> 
                <div className='half right cf'> 
                    <textarea name='message' type='text' placeholder='Message'>
                    </textarea> 
                </div> 
                <input type='submit' value='Submit' id='input-submit' /> 
                </form> 
            </div> 
        ); 
    }
}

export default Form;