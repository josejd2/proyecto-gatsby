import * as React from "react"
import Nav from "./nav"

const Layout = ({children}) =>{
    return(
        <>
        <header>
            <h1>Esto el header</h1>
            <Nav></Nav>
        </header>
        <main>
            {children}
        </main>
        <footer>
            Este es el footer
        </footer>
        </>
    )
}

export default Layout