import useInputState from "../hook/useInputState";


const HookFor = () => {
    // const [name, handleNameChange] = useInputState("rojoni")
    const emailState = useInputState("rojoni@sojoni.com")
    const handleFormSubmit = e =>{
        e.preventDefault();
        // console.log('form data', name)
        console.log('form data', emailState.value)
    }
    return (
        <div>
              <form onSubmit={handleFormSubmit}>
                {/* <input value={name} onChange={handleNameChange} className="bg-slate-400 border-[2px] border-pink-400 outline-none text-white"name="name" type="text" /><br/> */}
                <input {...emailState} className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="email" type="text" /><br/>
                <input className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="phone" type="text" /><br/>
                <input className="bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer mt-2 " type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookFor;