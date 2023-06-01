export interface IPayloadRent {
    [key: string]: Date | string | null | undefined
    user_id?: string | null
    tour_id?: string
    name: string
    phone: string
    service: string
    email: string
    wishes: string
    start_date: Date | string
    end_date: Date | string
}

export const rent: IPayloadRent = {
    name: "",
    phone: "",
    email: "",
    service: "",
    wishes: "",
    start_date: new Date().toISOString().slice(0, 16),
    end_date: "",
}