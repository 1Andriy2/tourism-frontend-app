import { ReactNode } from "react";
import { Box } from "@chakra-ui/react"

export default function FixedCenter({ children }: { children: ReactNode }) {
    return (
        <Box position="fixed" top="50%" left="50%" transform="translate(-50%, -50%)">
            {children}
        </Box>
    )
}
