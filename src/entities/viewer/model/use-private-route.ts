import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import { useViewerAtom } from "."
import { urls } from "../../../shared/config"

export default function usePrivateRoute() {
    const navigate = useNavigate()
    const { isAuthenticated } = useViewerAtom()

    useEffect(() => {
        console.log(!isAuthenticated);

        if (!isAuthenticated) {
            navigate(urls.logIn)
        }
    }, [isAuthenticated])
}