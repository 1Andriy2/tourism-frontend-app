import { useQuery } from "react-query";

import { getViewer } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useFetchViewerQuery(oQueriesOpts = {}) {
    const toast = useToastView()
    const { isAuthenticated, setAuthData, removeAuthData } = useViewerAtom()

    return useQuery({
        ...oQueriesOpts,
        queryKey: ["GetViewer"],
        queryFn: async () => await getViewer(),
        onSuccess: (data) => {
            if (data?.viewer) {
                setAuthData({ token: data.token.token, data: data.viewer })
            }
        },
        onError: (err) => {
            removeAuthData()
            toast({ title: (err as Error).message })
        },
        enabled: isAuthenticated
    })
}