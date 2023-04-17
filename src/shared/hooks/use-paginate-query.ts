import { useInfiniteQuery } from "react-query";

import { getTouristPlaces } from "../api";
import { IFIlterData } from "../../features/tourism-category/model/use-filters";

export default function usePaginateQuery(params: any | IFIlterData) {
    return useInfiniteQuery(
        ["tourism", params],
        ({ pageParam }) => getTouristPlaces(params, pageParam),
        { getNextPageParam: (lastPage) => lastPage.nextCursor })
}