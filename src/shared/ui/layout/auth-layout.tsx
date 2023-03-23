import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

import { useRestrictedRoute } from '../../../entities/viewer/model'

const styles = {

}

export default function AuthLayout() {
    useRestrictedRoute()

    return (
        <Box maxW={480} minH="100vh" margin="0 auto" display="flex" flexDir="column" alignItems="center" justifyContent="center">
            <Outlet />
        </Box>
    )
}

