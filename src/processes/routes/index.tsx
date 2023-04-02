import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"

import { Layout } from "../../shared/ui"

import { urls } from "../../shared/config"

const HomePage = lazy(() => import("../../pages/home"))
const AboutPage = lazy(() => import("../../pages/about"))
const ToursimPage = lazy(() => import("../../pages/toursim"))
const AccountPage = lazy(() => import("../../pages/account"))
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
        element: <Layout.AccountLayout />,
        children: [
            {
                path: "account/profile",
                element: <AccountPage />,
            },
        ]
    },
    {
        path: "auth",
        element: <Layout.AuthLayout />,
        children: [
            {
                path: "login",
                element: <LogInPage />,
            },
            {
                path: "register",
                element: <RegisterPage />
            },
        ]
    },
])

export default router