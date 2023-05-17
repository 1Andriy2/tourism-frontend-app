import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import { Layout } from "../../shared/ui"

import { urls } from "../../shared/config"

const HomePage = lazy(() => import("../../pages/home"))
const AboutPage = lazy(() => import("../../pages/about"))
const ToursimPage = lazy(() => import("../../pages/toursim"))
const AccountPage = lazy(() => import("../../pages/account"))
const RentHistoryPage = lazy(() => import("../../pages/rent-history"))
const LogInPage = lazy(() => import("../../pages/login"))
const RegisterPage = lazy(() => import("../../pages/register"))

const router = createBrowserRouter([
    {
        path: urls.home,
        element: (<Layout.MainLayout />),
        children: [
            {
                path: urls.home,
                element: <HomePage />,
            },
            {
                path: urls.about,
                element: <AboutPage />,
            },
            {
                path: urls.tourism,
                element: <ToursimPage />,
            },
        ]
    },
    {
        path: urls.account,
        element: <Layout.AccountLayout />,
        children: [
            {
                path: urls.profile,
                element: <AccountPage />,
            },
            {
                path: urls.rentHistory,
                element: <RentHistoryPage />,
            },
        ]
    },
    {
        path: urls.auth,
        element: <Layout.AuthLayout />,
        children: [
            {
                path: urls.logIn,
                element: <LogInPage />,
            },
            {
                path: urls.register,
                element: <RegisterPage />
            },
        ]
    },
])

export default router