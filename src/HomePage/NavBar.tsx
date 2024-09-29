import './NavBar.css';
import { Page } from '../MainPage/MainPage';

function Logo({setPage, setLogged}) {
    return (
        <img src='MgTai.png' onClick={()=>{setPage(Page.MainHomePage); setLogged(false)}}/>
    );
}

function NavButton({setPage, page, name}) {
    return (
        <div className="navbutton">
            <a onClick={() => {setPage(page)}} href="#">{name}</a>
            <div className="podkreslenie"></div>
        </div>
    )
}

function NavBar({setPage, setLogged}) {
    return (
      <>
        <nav>
            <main>
                <Logo setPage={setPage} setLogged={setLogged}/>
                <div id="buttons">
                    <NavButton setPage={setPage} page={Page.LoadingScreen} name={"My quizzes"} />
                    <NavButton setPage={setPage} page={Page.OthersQuiz} name={"Made by others"}/>
                    <NavButton setPage={setPage} page={Page.UserResults} name={"My results"}/>
                    <NavButton setPage={setPage} page={Page.Templates} name={"Create new quiz"}/>
                    <NavButton setPage={setPage} page={Page.Pricing} name={"Prices"}/>
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBar
