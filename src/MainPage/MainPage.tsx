import { useState } from "react"
import AccountPage from "../Account/AccountPage"
import MainHomePage from "../HomePage/MainHomePage"
import NavBar from "../HomePage/NavBar"

import Kontakt from "../HomePage/Kontakt";
import Templates from "../Template/Templates";
import MyQuizzes from "../MyQuizzes/MyQuizzes";
import Pricing from "../Pricing/Pricing";
import OthersQuiz from "../OthersQuiz/OthersQuiz";

export enum Page {
    None = 404,
    MainHomePage = 0,
    AccountPage,
    Templates,
    MyQuizzes,
    Pricing,
    OthersQuiz,
}

function NoPage() {
    return (
        <h1>ERROR 404</h1>
    )
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
                    404: <NoPage />,
                    0: <MainHomePage setPage={setPage}/>,
                    1: <AccountPage setLogged={setLogged}/>,
                    2: <Templates />,
                    3: <MyQuizzes />,
                    4: <Pricing />,
                    5: <OthersQuiz />,
                }[page]
            }
            <Kontakt />
        </>
    )
}


export default MainPage
