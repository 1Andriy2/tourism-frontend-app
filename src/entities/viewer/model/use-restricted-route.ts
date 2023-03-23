import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

import { useViewerAtom } from "."
import { urls } from "../../../shared/config"

export default function useRestrictedRoute() {
    const navigate = useNavigate()
    const { isAuthenticated } = useViewerAtom()

    useEffect(() => {
        if (isAuthenticated) {
            navigate(urls.home)
        }
    }, [isAuthenticated])
}