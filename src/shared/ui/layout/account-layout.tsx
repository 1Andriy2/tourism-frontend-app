import { Outlet } from "react-router-dom";
import { Box, Grid, GridItem } from "@chakra-ui/react";

import { Aside } from "../../../widgets";
import { usePrivateRoute } from "../../../entities/viewer/model";

export default function AccountLayout() {
    usePrivateRoute()

    return (
        <Box maxW="1000px" margin="0 auto">
            <Grid templateColumns={["1fr", "300px 1fr"]} gap="8px">
                <GridItem>
                    <Aside.AccoutAside />
                </GridItem>
                <GridItem>
                    <Outlet />
                </GridItem>
            </Grid>
        </Box>
    )
}
