import { Fragment } from "react"
import { useQuery } from "react-query"
import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent } from "@syncfusion/ej2-react-schedule"

import { fetchRents } from "../../shared/api"
import { Spinner } from "@chakra-ui/react"
import { useViewerAtom } from "../../entities/viewer/model"

export default function RentHistory() {
    const { authData: { data: user } } = useViewerAtom()
    const { data, isLoading } = useQuery({ queryKey: "fetchRents", queryFn: async () => await fetchRents(user) })

    return (
        <Fragment>
            {isLoading && <Spinner />}
            {!isLoading && (
                <ScheduleComponent
                    selectedDate={new Date()}
                    eventSettings={{
                        dataSource: data ? data : [],
                    }}
                    allowDragAndDrop
                >
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            )}
        </Fragment>
    )
}
