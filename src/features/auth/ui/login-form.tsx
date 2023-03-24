import * as yup from "yup"
import { Link as ReachLink } from "react-router-dom"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from "@chakra-ui/react"

import { useToastView } from "../../../shared/hooks"

import { urls } from "../../../shared/config"
import { LOG_IN_STATE } from "../lib/constant"
import { LogInSchema } from "../model/validators"
import { useViewerAtom } from "../../../entities/viewer/model";

export default function LogInForm() {
    const toast = useToastView()
    const formik = useFormik({
        initialValues: LOG_IN_STATE,
        validationSchema: LogInSchema,
        onReset: () => { },
        onSubmit: (values) => {
            const { email, password } = values
            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                toast({ status: "success", title: "Loginned.", description: JSON.stringify(values) })
                // useViewerAtom().setAuthData({token:"",data:user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
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

