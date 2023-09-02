import PropTypes from 'prop-types';

const FormCheckBox = (props) => {

  const {id, name, register, message, label}=props
  return (
    <div className="flex items-center">
          <input
            id={id}
            type="checkbox"
            className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            {...register(name, { required: {value: "true", message: message}})}
          />
          <label htmlFor={id} className="ml-2 block text-sm text-gray-900">
            {label}
          </label>
        </div>
  )
}

FormCheckBox.propTypes ={
  id: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  register: PropTypes.func,
}

export default FormCheckBox