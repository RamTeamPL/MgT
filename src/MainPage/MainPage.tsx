import { useState } from "react"
import AccountPage from "../Account/AccountPage"
import MainHomePage from "../HomePage/MainHomePage"
import NavBar from "../HomePage/NavBar"
import Templates from "../Template/Templates";

export enum Page {
    MainHomePage = 0,
    AccountPage,
    Templates,
}


function MainPage() {
    let [page, setPage] = useState<Page>(Page.AccountPage);

    return (
        <>
            <NavBar setPage={setPage}/>
            {
                {
                    0: <MainHomePage />,
                    1: <AccountPage />,
                    2: <Templates />
                }[page]
            }
        </>
    )
}


export default MainPage
