

const SimpleForm = () => {
    const handleFormSubmit = event =>{
        event.preventDefault()
        console.log(event.target.name.value)
        console.log(event.target.email.value)
        console.log(event.target.phone.value)
    }
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input className="bg-slate-400 border-[2px] border-pink-400 outline-none text-white"name="name" type="text" /><br/>
                <input className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="email" type="text" /><br/>
                <input className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="phone" type="text" /><br/>
                <input className="bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer mt-2 " type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;