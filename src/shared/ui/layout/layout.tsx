import { ReactNode } from "react"

import Content from "./content"
import { Header } from "../../../widgets"

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

Layout.Header = Header
// Layout.Aside = Aside
Layout.Content = Content