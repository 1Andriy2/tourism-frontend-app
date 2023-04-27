import { ReactNode } from "react";
import { Splide, Options } from '@splidejs/react-splide';

import '@splidejs/splide/css/sea-green'

export default function SimplePlide({ options, children }: { options?: Options, children: ReactNode }) {
    return (
        <Splide options={{ ...options }} aria-label="My Favorite Images">
            {children}
        </Splide>
    )
}
