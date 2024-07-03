import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')
    const handleFormSubmit = e=>{
        e.preventDefault();
        if(password.length < 6){
            setError("must be at least 6 characters long")
        }else{
            setError('')
            console.log(name, email, password)
        }
    }

    const handleChangeName = e =>{
        setName(e.target.value)
    }

    const handleChangeEmail = e =>{
        setEmail(e.target.value)
    }

    const handleChangePassword = e =>{
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleFormSubmit}>
                <input onChange={handleChangeName} className="bg-slate-400 border-[2px] border-pink-400 outline-none text-white"name="name" type="text" /><br/>
                <input onChange={handleChangeEmail} className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="email" type="email" /><br/>
                <input onChange={handleChangePassword} className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="password" type="password" /><br/>
                {
                    error && <p className="text-red-500">{error}</p>
                }
                <input className="bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer mt-2 " type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StatefulForm;