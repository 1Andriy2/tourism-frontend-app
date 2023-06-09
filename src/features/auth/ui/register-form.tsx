import { Link as ReachLink } from "react-router-dom"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from "@chakra-ui/react"

import { urls } from "../../../shared/config"
import { REGISTER_STATE } from "../lib/constant"
import { RegisterSchema } from "../model/validators"
import useRegisterMutate from "../model/use-register-mutate";

export default function RegisterForm() {
    const { mutate, isLoading } = useRegisterMutate()

    const formik = useFormik({
        initialValues: REGISTER_STATE,
        validationSchema: RegisterSchema,
        onReset: () => { },
        onSubmit: (values) => {
            const { email, name, password } = values
            mutate({ email, name, password })
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} style={{ width: "100%", padding: "20px" }}>
            <Button as={ReachLink} to={urls.home} leftIcon={<ArrowLeftIcon />} mb={5} isLoading={isLoading} isDisabled={isLoading}>Return to home page</Button>

            <VStack spacing={5}>
                <FormControl isInvalid={!!(formik.errors.email && formik.touched.email)}>
                    <FormLabel>Input Email:</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        isRequired
                        placeholder="Input Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        isDisabled={isLoading}
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
                        isDisabled={isLoading}
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
                        isDisabled={isLoading}
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
                        isDisabled={isLoading}
                    />
                    <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                </FormControl>
                <Button
                    type='submit'
                    colorScheme='teal'
                    w="100%"
                    isLoading={isLoading}
                    isDisabled={isLoading}
                >
                    Submit
                </Button>
            </VStack>
        </form>
    )
}
