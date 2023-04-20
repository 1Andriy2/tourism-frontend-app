import React from "react"
import { useMutation, UseMutationOptions } from "react-query";
import { ToastId } from "@chakra-ui/react";

import { editAccount } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { IUserData } from "../../../entities/viewer/store";
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useRefreshAccountMutate(oMutationOpts: any) {
    const toast = useToastView()
    const toastIdRef = React.useRef<ToastId>()
    const { authData: { token }, setAuthData } = useViewerAtom()

    return useMutation(
        async (oCredentials: Omit<IUserData, "places">) => await editAccount(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toastIdRef.current = toast({ title: "Refreshing account...." })
            },
            onSuccess: (data) => {
                if (data) {
                    setAuthData({ token, data })
                    if (toastIdRef.current) {
                        toast.update(toastIdRef.current, { title: "Account refreshed." })
                    }
                }
                if (oMutationOpts?.onSuccess) {
                    oMutationOpts.onSuccess(data)
                }
            },
            onError: (err) => {
                if (toastIdRef.current) {
                    toast.update(toastIdRef.current, { title: (err as Error).message })
                }
            }
        }
    )
}