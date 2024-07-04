import PropTypes from 'prop-types';

const ReusableForm = ({formtitle, handleFormSubmit, buttonText}) => {
    const handleLocalFormSubmit = e =>{
        e.preventDefault();
        const data ={
            name : e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleFormSubmit(data);
    }
    return (
        <div>
            <h1>{formtitle}</h1>
             <form onSubmit={handleLocalFormSubmit}>
                <input className="bg-slate-400 border-[2px] border-pink-400 outline-none text-white"name="name" type="text" /><br/>
                <input className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="email" type="text" /><br/>
                <input className="bg-slate-400 border-[2px] border-pink-400 mt-2 outline-none text-white"name="password" type="password" /><br/>
                <input className="bg-pink-500 text-white px-6 py-2 rounded-lg cursor-pointer mt-2 " type="submit" value={buttonText} />
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formtitle : PropTypes.string.isRequired,
    handleFormSubmit : PropTypes.func.isRequired,
    buttonText : PropTypes.string.isRequired
}

export default ReusableForm;