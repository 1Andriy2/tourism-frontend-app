import { useState } from "react";
import {
    Box, Heading, Button, HStack, PinInput, PinInputField, Highlight, Text, useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react";

import { AuthForm } from "../../features/auth";
import { useToastView } from "../../shared/hooks";
import { checkCodeManageAccount } from "../../shared/api";
import { useViewerAtom } from "../../entities/viewer/model";
import useCheckVerificationCodeQuery from "../../features/auth/model/use-check-verification-code-query";
import useSendVerificationCodeMutate from "../../features/auth/model/use-send-verification-code-mutate";

export default function AccountPage() {
    const toast = useToastView()
    const [pinCode, setPinCode] = useState("")

    const { authData: { data } } = useViewerAtom()
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { mutate, isLoading: sendLoading } = useSendVerificationCodeMutate()
    const { data: code, isLoading: checkLoading } = useCheckVerificationCodeQuery({
        queryKey: ["CheckVerificationCode", pinCode],
        queryFn: () => checkCodeManageAccount(data?.email, Number(pinCode)),
        onSuccess: (data) => checkConfirmed(data),
        enabled: pinCode.length === 4
    })
    
    function checkConfirmed(data: unknown) {        
        if (data === code) {
            console.log(data === null);

            toast({ title: 'Confirmed', status: 'success' })
            document.getElementById("accountSubmit")?.click()
        } else {
            toast({ title: 'This code is no valid', status: 'error' })
        }
    }

    function onCloseModal() {
        onClose()
        setPinCode("")
    }

    return (
        <Box padding="10px">
            <Heading size="lg">Modify your account profile</Heading>
            <AuthForm.ProfileTemplate openModal={onOpen} onClose={onCloseModal} />

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm email</ModalHeader>
                    <ModalCloseButton />
                    {/* <ModalBody>

                        <HStack justify="center">
                            <PinInput size="lg" otp value={pinCode} onChange={val => setPinCode(val)}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </ModalBody> */}

                    <ModalFooter display="flex" justifyContent="space-between">
                        <HStack>
                            <Text fontSize={15}>
                                Sent to email message
                            </Text>
                            <Highlight query={data?.email ? data.email : "xd"} styles={{ fontSize: 14, px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                                {data?.email ? data.email : "xd"}
                            </Highlight>
                        </HStack>
                        <Button mx="5px" isLoading={sendLoading || checkLoading} onClick={() => mutate(data?.email)} variant='solid'>Send Message</Button>
                        {/* <Button display="none" id="accountSubmit" type="submit" form="ProfileForm" variant='solid'>Submit</Button> */}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
