import * as yup from "yup"

export const Validate = yup.object({
    name: yup.string().required(),
    phone: yup.string().required(),
    service: yup.string().required(),
    email: yup.string().email().required(),
    start_date: yup.date().required(),
    end_date: yup.date()
        .min(yup.ref('start_date'), 'End date must be greater than or equal to start date')
        .required('End date is required'),
})