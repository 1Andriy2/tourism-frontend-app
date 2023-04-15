import { useMutation } from "react-query"
import { useToastView } from "../../../shared/hooks"
import { sendCodeManageAccount } from "../../../shared/api"

export default function useSendVerificationCodeMutate(oMutationOpts = {}) {
    const toast = useToastView()

    return useMutation(
        async (oCredentials: string | undefined) => await sendCodeManageAccount(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Sending code...." })
            },
            onSuccess: (data) => {
                toast({ title: "Send code on email" })
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
            }
        }
    )
}