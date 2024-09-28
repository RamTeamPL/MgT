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
                    <a href="patrykduda.com">My templates</a>
                    <a href="patrykduda.com">My results</a>
                    <a href="patrykduda.com">Users templates</a>
                    <a href="patrykduda.com">Create new template</a>
                    <a href="patrykduda.com">Create new template</a>
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBar
