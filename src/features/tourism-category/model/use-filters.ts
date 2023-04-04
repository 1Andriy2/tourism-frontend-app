import { useReducer } from "react"

export enum FilterActionKind {
    SetSearch = 'SetSearch',
    SetSort = 'SetSort',
    AddCity = 'AddCity',
}

export interface IFIlterData {
    search: string
    sort: string
    cities: { id: string, name: string }[]
}

export interface IFIlterAction {
    type: FilterActionKind
    payload: any
}

const initFilterData: IFIlterData = {
    search: "",
    sort: "asc",
    cities: []
}

const reducer: (state: IFIlterData, action: IFIlterAction) => IFIlterData = (state: IFIlterData, action: IFIlterAction) => {
    const { type, payload } = action;
    switch (type) {
        case FilterActionKind.SetSearch:
            return { ...state, search: payload }
        case FilterActionKind.SetSort:
            return { ...state, sort: payload }
        case FilterActionKind.AddCity:
            if (state.cities.find(c => c.id === payload.id)) {
                const cities = state.cities.filter(c => c.id !== payload.id)
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