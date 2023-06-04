import { Spinner } from "@chakra-ui/react";

import { FixedCenter } from "../";

export default function SpinnerOverlay() {
    return (
        <FixedCenter>
            <Spinner w="80px" h="80px" />
        </FixedCenter>
    )
}
