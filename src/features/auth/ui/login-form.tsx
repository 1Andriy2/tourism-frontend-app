import * as yup from "yup"
import { Link as ReachLink } from "react-router-dom"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from "@chakra-ui/react"

import { urls } from "../../../shared/config"

const validationSchema = yup.object({
    email: yup.string().email().required(),
    name: yup.string().trim().min(2).max(8),
    password: yup.string().trim().min(8).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match')
})

export default function LogInForm() {
    const formik = useFormik({
        initialValues: { email: "", name: "", password: "", confirmPassword: "" },
        validationSchema,
        onReset: () => { },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    console.log(formik.errors.email);

    return (
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} style={{ width: "100%" }}>
            <Button as={ReachLink} to={urls.home} mb={5} leftIcon={<ArrowLeftIcon />}>Return to home page</Button>

            <VStack spacing={5}>
                <FormControl isInvalid={!!(formik.errors.email && formik.touched.email)}>
                    <FormLabel>Input Email:</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        isRequired
                        placeholder='Input Email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!(formik.errors.name && formik.touched.name)}>
                    <FormLabel>Input Name:</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        isRequired
                        placeholder='Input Name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!(formik.errors.password && formik.touched.password)}>
                    <FormLabel>Input Password:</FormLabel>
                    <Input
                        type="password"
                        name="password"
                        isRequired
                        placeholder='Input Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}>
                    <FormLabel>Confirm Password:</FormLabel>
                    <Input
                        type="password"
                        name="confirmPassword"
                        isRequired
                        placeholder='Confirm Password'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                </FormControl>
                <Button
                    type='submit'
                    colorScheme='teal'
                    w="100%"
                >
                    Submit
                </Button>
            </VStack>
        </form>
    )
}
