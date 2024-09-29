import './NavBar.css';
import { Page } from '../MainPage/MainPage';

function Logo() {
    return (
        <img src='MgTai.png' />
    );
}

function NavButton({setPage, page, name}) {
    return (
        <div class="navbutton">
            <a onClick={() => {setPage(page)}} href="#">{name}</a>
            <div class="podkreslenie"></div>
        </div>
    )
}

function NavBar({setPage}) {
    return (
      <>
        <nav>
            <main>
                <Logo />
                <div id="buttons">
                    <NavButton setPage={setPage} page={Page.None} name={"My quizzes"} />
                    <NavButton setPage={setPage} page={Page.None} name={"Made by others"}/>
                    <NavButton setPage={setPage} page={Page.UserResults} name={"My results"}/>
                    <NavButton setPage={setPage} page={Page.Templates} name={"Create new quiz"}/>
                    <NavButton setPage={setPage} page={Page.None} name={"Prices"}/>
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBar
