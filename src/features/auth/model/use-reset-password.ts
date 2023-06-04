import React from "react"
import { useMutation } from "react-query"
import { resetPassword } from "../../../shared/api"
import { useToastView } from "../../../shared/hooks"

export default function useResetMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const toastIdRef = React.useRef<any>()

    return useMutation(
        async (oCredentials: string) => await resetPassword(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toastIdRef.current = toast({ title: "Sending...", status: "loading" })
            },
            onSuccess: () => {
                toast.update(toastIdRef.current, { title: "Send.", status: "success" })
            },
            onError: (err) => {
                toast.update(toastIdRef.current, { title: (err as Error).message, status: "error" })
            }
        }
    )
}