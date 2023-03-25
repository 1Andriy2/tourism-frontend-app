import { useMutation } from "react-query";

import { registerViwer } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { IUserData } from "../../../entities/viewer/store";

export default function useRegisterMutate(oMutationOpts = {}) {
    const toast = useToastView()
   
    return useMutation(
        async (oCredentials: IUserData) => await registerViwer(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Starting register." })
            },
            onSuccess: (data) => {
                console.log(data)
                toast({ title: "Account created." })
            },
            onError: (err) => {
                console.log(err);
                toast({ title: (err as Error).message, description: (err as Error).stack })
            }
        }
    )
}