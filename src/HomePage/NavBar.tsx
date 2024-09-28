import './NavBar.css';

function Logo() {
    return (
        <img src='MgTai.png' />
    );
}

function NavBar() {
    return (
      <>
        <nav>
            <main>
                <Logo />
                <div id="buttons">
                    <a href="patrykduda.com">My quizzes</a>
                    <a href="patrykduda.com">Made by others</a>
                    <a href="patrykduda.com">My results</a>
                    <a href="patrykduda.com">Create new quiz</a>
                    <a href="patrykduda.com">Buy premium</a>
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBar