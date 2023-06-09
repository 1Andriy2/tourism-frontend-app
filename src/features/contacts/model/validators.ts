import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const Validate = yup.object({
    name: yup.string().required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
    message: yup.string().required()
})