import { useState } from "react";
import AccountPage from "../Account/AccountPage";
import MainHomePage from "../HomePage/MainHomePage";
import NavBar from "../HomePage/NavBar";

import Kontakt from "../HomePage/Kontakt";
import Templates from "../Template/Templates";
import UserResults from "../UserResults/UserResults";
import MyQuizzes from "../MyQuizzes/MyQuizzes";
import Pricing from "../Pricing/Pricing";
import OthersQuiz from "../OthersQuiz/OthersQuiz";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Quiz } from "../Quiz/quiz";

export enum Page {
  None = 404,
  MainHomePage = 0,
  AccountPage,
  Templates,
  MyQuizzes,
  Pricing,
  OthersQuiz,
  UserResults,
  LoadingScreen,
  Quiz,
}

function NoPage() {
  return <h1>ERROR 404</h1>;
}

function MainPage() {
  let [page, setPage] = useState<Page>(Page.AccountPage);
  let [isLogged, setLogged] = useState(false);

  return (
    <>
      {isLogged ? <NavBar setPage={setPage} setLogged={setLogged} /> : ""}
      {
        {
          404: <NoPage />,
          0: <MainHomePage setPage={setPage} />,
          1: <AccountPage setLogged={setLogged} setPage={setPage} />,
          2: <Templates setPage={setPage} />,
          3: <MyQuizzes />,
          4: <Pricing />,
          5: <OthersQuiz />,
          6: <UserResults />,
          7: <LoadingScreen setLogged={setLogged} setPage={setPage} />,
          8: <Quiz />
        }[page]
      }
      <Kontakt />
    </>
  );
}

export default MainPage;
