import { useForm } from "react-hook-form"
import EmailInput from "./formComponents/EmailInput"
import ForgotPassword from "./formComponents/ForgotPassword"
import FormHeader from "./formComponents/FormHeader"
import PasswordInput from "./formComponents/PasswordInput"
import SubmitButton from "./formComponents/SubmitButton"
import { updateData } from "../utils/fetchMethods"
import { useValue } from "../context/ContextProvider"


const LoginSignupForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onChange'});

    const {dispatch}= useValue()

    const submit = (data)=>{
        updateData('post', '/login', data, dispatch)
      }
    
  return (
   <form onSubmit={handleSubmit(submit)}>
    <FormHeader
        heading="Login and Start Having Fun"
        paragraph="Don't Have An Account Yet? "
        linkName="SignUp"
        linkUrl="#"/>
    <EmailInput
         type='text'
         placeholder='Email'
         register={register}
         name='email'
         maximLength={50}
         ifRequired={true}
         errors={errors}/>
    <PasswordInput
        name='password'
        placeholder='Password'
        label='Password'
        register={register}
        maximLength={20}
        ifRequired={true}
        errors={errors}
        />
    <ForgotPassword/>
    <SubmitButton
        type='submit'
        handleSubmit={null}
        text='Login'
        />
   </form>
  )
}

export default LoginSignupForm