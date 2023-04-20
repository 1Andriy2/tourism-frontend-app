import { useMutation } from "react-query"
import { logInViwer } from "../../../shared/api"
import { useToastView } from "../../../shared/hooks"
import { IUserData } from "../../../entities/viewer/store"
import { useViewerAtom } from "../../../entities/viewer/model"

export default function useLogInMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const { setAuthData } = useViewerAtom()

    return useMutation(
        async (oCredentials: Omit<IUserData, "name" | "places">) => await logInViwer(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Starting logIn." })
            },
            onSuccess: (data) => {
                if (data?.token) {
                    setAuthData({ token: data.token, data: data.viewer })
                    toast({ title: "Account loginned." })
                }
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
            }
        }
    )
}