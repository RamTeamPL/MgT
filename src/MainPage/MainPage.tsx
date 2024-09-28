import { useState } from "react"
import AccountPage from "../Account/AccountPage"
import MainHomePage from "../HomePage/MainHomePage"
import NavBar from "../HomePage/NavBar"

import Kontakt from "../HomePage/Kontakt";
import Templates from "../Template/Templates";

export enum Page {
    MainHomePage = 0,
    AccountPage,
    Templates,
}


function MainPage() {
    let [page, setPage] = useState<Page>(Page.MainHomePage);
    let [isLogged, setLogged] = useState(false);

    return (
        <>
            {
                isLogged ? 
                    <NavBar setPage={setPage}/> :
                    ""
            }
            {
                {
                    0: <MainHomePage setPage={setPage}/>,
                    1: <AccountPage setLogged={setLogged}/>,
                    2: <Templates />
                }[page]
            }
            <Kontakt />
        </>
    )
}


export default MainPage
