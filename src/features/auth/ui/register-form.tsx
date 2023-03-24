import * as yup from "yup"
import { Link as ReachLink } from "react-router-dom"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormControl, FormLabel, Input, Button, FormErrorMessage, VStack } from "@chakra-ui/react"

import { useToastView } from "../../../shared/hooks"
import { useViewerAtom } from "../../../entities/viewer/model"

import { urls } from "../../../shared/config"
import { REGISTER_STATE } from "../lib/constant"
import { RegisterSchema } from "../model/validators"
import { addViewer } from "../../../shared/api";

export default function RegisterForm() {
    const toast = useToastView()
    const { setAuthData } = useViewerAtom()
    const formik = useFormik({
        initialValues: REGISTER_STATE,
        validationSchema: RegisterSchema,
        onReset: () => { },
        onSubmit: (values) => {
            const { email, name, password } = values
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                addViewer({
                    token:new Date().toISOString(),
                    data:{
                        // id: userCredential.user.providerId,
                        name: name,
                        email: email,
                        password: password
                }})
                // setAuthData({ token: new Date().toISOString(), data: { id: Math.random(), email, name, password } })
                toast({ status: "success", title: 'Account created.', description: JSON.stringify(values) })
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
