import { useFormik } from "formik";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { rent } from "../lib/constant";
import { urls } from "../../../shared/config";
import { rentTourism } from "../../../shared/api";
import { useToastView } from "../../../shared/hooks";
import { useViewerAtom } from "../../../entities/viewer/model";
import { IToursimPlacesCollection } from "../../../entities/tourism-card/ui/tourism-card";

export default function useRentForm(tour: IToursimPlacesCollection) {
    const toast = useToastView()
    const navigate = useNavigate()
    const { authData: { data: user } } = useViewerAtom()
    const { mutate, isLoading } = useMutation({ mutationKey: "rent", mutationFn: rentTourism })

    return {
        isSubmitingLoading: isLoading,
        formik: useFormik({
            initialValues: {
                ...rent,
                name: user?.name ? user.name : rent.name,
                email: user?.email ? user.email : rent.email,
            },
            onSubmit: (data) => {
                try {
                    mutate({ tour_id: tour.id, user_id: user?.email ? user.email : data.email, ...data })
                    if (user) {
                        navigate("/" + urls.account + "/" + urls.rentHistory)
                    }
                    toast({ title: `Claimend rent`, status: "success" })
                } catch (error) {
                    toast({ title: (error as Error).message, status: "error" })
                }
            }
        })
    }
}