import * as Yup from 'yup'

const FormLoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  senha: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters')
})

export default FormLoginSchema
