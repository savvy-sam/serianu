import PropTypes from 'prop-types';


const EmailInput = (props) => {

    const {type, placeholder, maximLength, label, name, ifRequired, errors, register}=props;

    const customEmailClass=`rounded-md appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus: outline-none  sm:text-sm ${!errors[name] ? "focus:ring-purple-500 focus:border-purple-500" :"focus:ring-red-500 focus:border-red-500" }`

  return (
    <div className="my-5">
        <label>{label}</label>
            <input type={type} className={customEmailClass} placeholder={placeholder} 
              {...register(name, { required: {value: ifRequired, message: "Email is Required"},
                      maxLength: {value: maximLength, message: "Cannot be Longer than 50 Characters"}, 
                      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Enter a Valid Email"} })}/>

              {errors[name] && <span className='text-sm text-red-400 font-semibold'>{errors[name].message}</span>}
    </div>
  )
}

    EmailInput.propTypes ={
        type: PropTypes.string,
        label: PropTypes.string,
        placeholder: PropTypes.string,
        maximLength: PropTypes.number,
        name: PropTypes.string,
        ifRequired:PropTypes.bool,
        inputPattern: PropTypes.shape(RegExp),
        errors: PropTypes.object,
        register: PropTypes.func,
    }

export default EmailInput