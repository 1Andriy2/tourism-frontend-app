import { useMutation } from "react-query"

import { useToastView } from "../../../shared/hooks"
import { fetchAddContactsMessage } from "../../../shared/api"
import React from "react"

export default function useSendMessage(oMutationOpts = {}) {
    const toast = useToastView()
    const toastIdRef = React.useRef<any>()

    return useMutation(
        fetchAddContactsMessage,
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