import './NavBar.css';

function Logo() {
    return (
        <img src='MgTai.png' />
    );
}

function NavButton({link, name}) {
    return (
        <div class="navbutton">
            <a href={link}>{name}</a>
            <div class="podkreslenie"></div>
        </div>
    )
}

function NavBar() {
    return (
      <>
        <nav>
            <main>
                <Logo />
                <div id="buttons">
                    <NavButton link={"https://patrykduda.com"} name={"My quizzes"} />
                    <NavButton link={"https://patrykduda.com"} name={"Made by others"}/>
                    <NavButton link={"https://patrykduda.com"} name={"My results"}/>
                    <NavButton link={"https://patrykduda.com"} name={"Create new quiz"}/>
                    <NavButton link={"https://patrykduda.com"} name={"Buy premium"}/>
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBar
