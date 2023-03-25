import { useMutation } from "react-query";

import { registerViwer } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { IUserData } from "../../../entities/viewer/store";
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useRegisterMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const { setAuthData } = useViewerAtom()

    return useMutation(
        async (oCredentials: IUserData) => await registerViwer(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Starting register." })
            },
            onSuccess: (data) => {
                if (data?.token) {
                    setAuthData({ token: data.token, data: data.viewer })
                    toast({ title: "Account created." })
                }
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
            }
        }
    )
}