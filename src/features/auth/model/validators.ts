import * as yup from "yup"

export const LogInSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().trim().min(8).required(),
})

export const RegisterSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().trim().min(2).max(8),
    password: yup.string().trim().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
})
