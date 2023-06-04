import { Link as ReachLink } from "react-router-dom"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from "@chakra-ui/react"

import { urls } from "../../../shared/config"
import { LOG_IN_STATE } from "../lib/constant"
import { LogInSchema } from "../model/validators"
import useLogInMutate from "../model/use-login-mutate";

export default function LogInForm() {
    const { mutate, isLoading } = useLogInMutate()

    const formik = useFormik({
        initialValues: LOG_IN_STATE,
        validationSchema: LogInSchema,
        onReset: () => { },
        onSubmit: (values) => { 
            mutate(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} style={{ width: "100%" }}>
            <Button as={ReachLink} to={urls.home} leftIcon={<ArrowLeftIcon />} mb={5}>Return to home page</Button>

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
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
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

