import { useQuery } from "react-query";
import { IFilesData } from "../ui/editor-galleries";

export default function useFetchFilesQuery(oQueriesOpts: any) {
    return useQuery<IFilesData[]>({
        ...oQueriesOpts,
        onSuccess: (data: any) => {

        },
        onError: (err: any) => {

        },
    })
}