import * as yup from 'yup'

const email = yup
  .string()
  .trim()
  .required('Field is required.')
  .email('Please enter a valid email.')

const password = yup
  .string()
  .required('Field is required.')
  .min(8, 'Your password is too short. Min 8 symbol.')
  .max(50, 'Your password is too long. Max 50 symbols.')
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z\W]{8,50}$/,
    "Your password isn't secure. It should contain a capital & small letters, numbers.",
  )

const confirmPassword = yup
  .string()
  .required('Field is required.')
  .oneOf([yup.ref('password'), null], 'Passwords do not match.')

export const validations = {
  email,
  password,
  confirmPassword,
}
