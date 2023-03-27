import { useFormik } from "formik"
import { FormErrorMessage, FormControl, FormLabel, Input, Button, HStack, Flex, Divider } from "@chakra-ui/react"

import { ProfileSchema } from "../model/validators"
import { useViewerAtom } from "../../../entities/viewer/model"

export default function ProfileForm({ openModal }: { openModal: () => void }) {
    const { authData } = useViewerAtom()

    const formik = useFormik({
        initialValues: { ...authData.data, password: "", confirmPassword: "", },
        validationSchema: ProfileSchema,
        onReset: () => { },
        onSubmit: (values) => {
            alert(JSON.stringify(values))
        }
    })

    return (
        <form id="ProfileForm" onSubmit={formik.handleSubmit}>
            <HStack mt={4} alignItems="baseline">
                <FormControl isInvalid={!!(formik.errors.email && formik.touched.email)}>
                    <FormLabel>Input Email:</FormLabel>
                    <Input
                        type="email"
                        name="email"
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
                        placeholder="Input Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>
            </HStack>

            <Divider my={8} />

            <HStack mt={4} alignItems="baseline">
                <FormControl isInvalid={!!(formik.errors.password && formik.touched.password)}>
                    <FormLabel>New Password:</FormLabel>
                    <Input
                        type="password"
                        name="password"
                        placeholder="Input Password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!(formik.errors.confirmPassword && formik.touched.confirmPassword)}>
                    <FormLabel>New Confirm Password:</FormLabel>
                    <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="Input Confirm Password"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
                </FormControl>
            </HStack>

            <Divider my={8} />

            <Flex justifyContent={"right"}>
                <Button type="button" onClick={openModal}>
                    Refresh Account
                </Button>
            </Flex>
        </form>
    )
}
