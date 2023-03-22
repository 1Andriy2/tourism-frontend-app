import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const styles = {

}

export default function AuthLayout() {
    return (
        <Box maxW={480} minH="100vh" margin="0 auto" display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Outlet />
        </Box>
    )
}

