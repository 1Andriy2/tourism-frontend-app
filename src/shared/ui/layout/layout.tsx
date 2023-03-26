import { ReactNode } from "react"

import Content from "./content"
import MainLayout from "./main-layout"
import AuthLayout from "./auth-layout"
import AccountLayout from "./account-layout"
import { Header, Aside } from "../../../widgets"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

// COnstructor
Layout.Header = Header
Layout.Aside = Aside
Layout.Content = Content

// LAYOUTS
Layout.MainLayout = MainLayout
Layout.AuthLayout = AuthLayout
Layout.AccountLayout = AccountLayout
