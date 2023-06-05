import { useMutation } from "react-query";

import { registerViwer } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { IUserData } from "../../../entities/viewer/store";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7479b66284716956212e7746683e6adccee580dc
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useRegisterMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const { setAuthData } = useViewerAtom()

<<<<<<< HEAD
=======

export default function useRegisterMutate(oMutationOpts = {}) {
    const toast = useToastView()
   
>>>>>>> aacaf64 (add: register mutate)
=======
import { useViewerAtom } from "../../../entities/viewer/model";

export default function useRegisterMutate(oMutationOpts = {}) {
    const toast = useToastView()
    const { setAuthData } = useViewerAtom()

>>>>>>> 6e8ab80 (add mutate: register)
=======
>>>>>>> 7479b66284716956212e7746683e6adccee580dc
    return useMutation(
        async (oCredentials: Omit<IUserData, "places">) => await registerViwer(oCredentials),
        {
            ...oMutationOpts,
            onMutate: () => {
                toast({ title: "Starting register." })
            },
            onSuccess: (data) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6e8ab80 (add mutate: register)
=======
>>>>>>> 7479b66284716956212e7746683e6adccee580dc
                if (data?.token) {
                    setAuthData({ token: data.token, data: data.viewer })
                    toast({ title: "Account created." })
                }
<<<<<<< HEAD
<<<<<<< HEAD
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
=======
                console.log(data)
                toast({ title: "Account created." })
            },
            onError: (err) => {
                console.log(err);
                toast({ title: (err as Error).message, description: (err as Error).stack })
>>>>>>> aacaf64 (add: register mutate)
=======
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
>>>>>>> 6e8ab80 (add mutate: register)
=======
            },
            onError: (err) => {
                toast({ title: (err as Error).message })
>>>>>>> 7479b66284716956212e7746683e6adccee580dc
            }
        }
    )
}