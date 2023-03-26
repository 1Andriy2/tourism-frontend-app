import { useQuery } from "react-query";

import { getViewer } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useFetchViewer(oQueriesOpts = {}) {
    const toast = useToastView()
    const { isAuthenticated, removeAuthData } = useViewerAtom()

    return useQuery({
        ...oQueriesOpts,
        queryKey: ["GetViewer"],
        queryFn: () => getViewer(),
        onSuccess: () => { },
        onError: (err) => {
            removeAuthData()
            toast({ title: (err as Error).message })
        },
        enabled: isAuthenticated
    })
}