import { useReducer } from "react"

export enum FilterActionKind {
    SetSort = 'SetSort',
    AddCity = 'AddCity',
}

interface IFIlterData {
    sort: string,
    cities: string[]
}

interface IFIlterAction {
    type: FilterActionKind
    payload: string
}

const initFilterData: IFIlterData = {
    sort: "asc",
    cities: []
}

const reducer: (state: IFIlterData, action: IFIlterAction) => IFIlterData = (state: IFIlterData, action: IFIlterAction) => {
    const { type, payload } = action;
    switch (type) {
        case FilterActionKind.SetSort:
            return { ...state, sort: payload }
        case FilterActionKind.AddCity:
            if (state.cities.includes(payload)) {
                const cities = state.cities.filter(c => c !== payload)
                return { ...state, cities }
            } else {
                return { ...state, cities: [payload, ...state.cities] }
            }
        default:
            return state;
    }
}

export default function useFilters() {
    return useReducer(reducer, initFilterData)
}