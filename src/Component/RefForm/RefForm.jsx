import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const handleFormSubmit = e=>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input ref={nameRef} className="bg-slate-400 border-[2px] border-pink-400 outline-none text-white"name="name" type="text" /><br/>
                <input ref={emailRef} className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="email" type="text" /><br/>
                <input ref={passwordRef} className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="phone" type="text" /><br/>
                <input className="bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer mt-2 " type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;