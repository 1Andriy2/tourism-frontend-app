import { useToast, UseToastOptions } from "@chakra-ui/react";

export default function useToastView(options?: UseToastOptions | undefined) {
    return useToast({ isClosable: true, duration: 4300, ...options })
}
