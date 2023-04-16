import { ReactNode } from "react"
import { Link as ReachLink } from "react-router-dom"
import { Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, VStack, Button } from "@chakra-ui/react"

import { AiFillProfile } from "react-icons/ai"
import { RiLogoutCircleFill } from "react-icons/ri"

import { urls } from "../../../shared/config"
import useLogOutMutate from "../../auth/model/use-logout-mutate";

export default function UserPoppup({ children }: { children: ReactNode }) {
    const { mutate } = useLogOutMutate()

    return (
        <Popover>
            <PopoverTrigger>
                {children}
            </PopoverTrigger>
            <PopoverContent w={200}>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>User Permissions!</PopoverHeader>
                <PopoverBody>
                    <VStack>
                        <Button as={ReachLink} to={urls.profile} variant="ghost" colorScheme="whatsapp" w="100%" leftIcon={<AiFillProfile size={22} />}>
                            Profile
                        </Button>
                        <Button variant="ghost" colorScheme="whatsapp" onClick={() => mutate()} w="100%" leftIcon={<RiLogoutCircleFill size={22} />}>
                            LogOut
                        </Button>
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}
