import React from "react"
import { useProxy } from "valtio"
import ReservePage from "./page/ReservePage"
import SignInVerifyPage from "./page/SignInVerifyPage"
import SignPage from "./page/SignPage"
import WelcomePage from "./page/WelcomePage"
import { page } from "./state"

const App: React.FC = () => {
    useProxy(page)
    
    if (page.value === "welcome") return <WelcomePage />
    if (page.value === "signIn") return <SignPage />
    if (page.value === "signInVerify") return <SignInVerifyPage />
    if (page.value === "reserve") return <ReservePage name="Shade" />

    return (
        <ReservePage />
        
    )
}

export default App