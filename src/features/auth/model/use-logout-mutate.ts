import { useMutation } from "react-query"
import { signOutViewer } from "../../../shared/api"
import { useToastView } from "../../../shared/hooks"
import { useViewerAtom } from "../../../entities/viewer/model"

export default function useLogOutMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const { removeAuthData } = useViewerAtom()

    return useMutation(
        async () => await signOutViewer(),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Starting log out." })
            },
            onSuccess: () => {
                removeAuthData()
                toast({ title: "Account logouted." })
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
            }
        }
    )
}