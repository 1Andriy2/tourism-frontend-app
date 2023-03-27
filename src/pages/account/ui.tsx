import {
    Box, Heading, Button, HStack, PinInput, PinInputField, Highlight, Text, useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter
} from "@chakra-ui/react";

import { AuthForm } from "../../features/auth";
import { useViewerAtom } from "../../entities/viewer/model";

export default function Account() {
    const { authData: { data } } = useViewerAtom()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box padding="10px">
            <Heading size="lg">Modify your account profile</Heading>
            <AuthForm.ProfileTemplate openModal={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm code</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack justify="center">
                            <PinInput size="lg" otp>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="space-between">
                        <HStack>
                            <Text fontSize={15}>
                                Sent to email code
                            </Text>
                            <Highlight query={data?.email ? data.email : "d"} styles={{ fontSize: 14, px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
                                {data?.email ? data.email : "d"}
                            </Highlight>
                        </HStack>
                        <Button type="submit" form="ProfileForm" variant='solid'>Submit</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box >
    )
}
