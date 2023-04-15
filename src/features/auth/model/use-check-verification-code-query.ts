import { useQuery, UseQueryOptions } from "react-query";
import { useToastView } from "../../../shared/hooks";

export default function useCheckVerificationCodeQuery(oQueriesOpts: UseQueryOptions<unknown, any, unknown, any>) {
    const toast = useToastView()

    return useQuery({
        ...oQueriesOpts,
        onSuccess: (data: any) => {
            if (oQueriesOpts?.onSuccess) {
                oQueriesOpts.onSuccess(data)
            }
        },
        onError: (err: any) => {
            if (oQueriesOpts?.onError) {
                oQueriesOpts.onError(err)
            }
            toast({ title: (err as Error).message })
        }
    })
}