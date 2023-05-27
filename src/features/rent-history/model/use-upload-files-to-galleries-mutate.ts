import React, { FC } from "react"
import { useMutation, UseMutationOptions } from "react-query"

import { useToastView } from "../../../shared/hooks"
import { uploadFilesToGalleries } from "../../../shared/api"
import { queryClient } from "../../../app/providers/with-react-query/withReactQuery"

const useUploadFilesToGalleriesMutate = (oMutationOpts: any | undefined) => {
    const toast = useToastView()
    const toastIdRef = React.useRef<any>()
    return useMutation(
        async (data: { userId: string | number, rentId: string | number, files: FileList, names: string[] }) => await uploadFilesToGalleries(data),
        {
            ...oMutationOpts,
            onMutate: () => {
                toastIdRef.current = toast({ title: "Saving...", status: "loading" })
            },
            onSuccess: (data) => {
                queryClient.invalidateQueries("fetchFiles")
                toast.update(toastIdRef.current, { title: "Saved.", status: "success" })
                if (oMutationOpts?.onSuccess) {
                    oMutationOpts.onSuccess()
                }
            },
            onError: (err) => {
                toast.update(toastIdRef.current, { title: (err as Error).message, status: "error" })
            }
        })
}
export default useUploadFilesToGalleriesMutate