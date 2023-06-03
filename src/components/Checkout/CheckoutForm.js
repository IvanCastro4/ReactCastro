/*import { useState } from "react";
const CheckoutForm = ({onConfirm})=>{
    const [name, setName]= useState('')
    const [phone, setPhone]= useState('')
    const [email, setEmail]= useState('')
    
    const handleConfirm=(event) =>{
        event.preventDefault()
        const userData={name, phone,email}
        onConfirm(userData)
    }
    return(
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label1">
                    Nombre
                    <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={({target})=> setName(target.value)}
                    ></input>
                </label>
            
                <label className="Label1">
                    Telefono
                    <input
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={({target})=> setPhone(target.value)}
                    ></input>
                </label>
                <label className="Label1">
                    E-mail
                    <input
                    className="Input"
                    type="email"
                    value={email}
                    onChange={({target})=> setEmail(target.value)}
                    ></input>
                </label>
                <div className="Label1">
                    <button type="submit" className="Button">Crear Orden</button>

                </div>
            </form>

        </div>
    )
};
export default CheckoutForm
