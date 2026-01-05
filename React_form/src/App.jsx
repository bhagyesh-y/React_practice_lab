import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the data", data)
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      < div >
        <label > First name</label>
        <input className={errors.firstname ? "input-error" : ""}
          {...register("firstname", { required: true, maxLength: 20, minLength: 3, pattern: /^[A-Za-z]+$/i })} />
        {errors.firstname?.type === 'required' &&
          <p className='error-msg'>First name is required</p>}
        {errors.firstname?.type === 'maxlength' &&
          <p className='error-msg'>First name is too Long </p>}
        {errors.firstname?.type === 'pattern' &&
          <p className='error-msg'>First name should contain only Letters</p>}
        {errors.firstname?.type === 'minLength' &&
          <p className='error-msg'>First name is too short</p>}
        {errors.firstname && <p className='error-msg'
        >{errors.firstname.message}</p>}
        {console.log(watch("firstname"))}
      </ div>


      <br />


      <div>
        <label > Last Name </label>
        <input {...register("lastname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
        {errors.lastname?.type === 'required' &&
          <p className='error-msg'>Last name is required</p>}
        {errors.lastname?.type === 'maxlength' &&
          <p className='error-msg'>Last name is too Long </p>}
        {errors.lastname?.type === 'pattern' &&
          <p className='error-msg'>Last name should contain only Letters</p>}
        {errors.lastname?.type === 'minLength' &&
          <p className='error-msg'> Last name is too short</p>}
      </div>


      <br />


      <div>
        <label > Password </label>
        <input className=''
          {...register("password", { required: true, minLength: 8 })} />
        {errors.password?.type === 'required' &&
          <p className='error-msg'>Password is required</p>}
        {errors.password?.type === 'minLength' &&
          <p className='error-msg'>Password is too short</p>}

      </div>

      <br />

      <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
    </form>

  )
}

export default App
