import './NavBarCSS.css';

function Button() {
    return (
        <>
            <a href="patrykduda.com">Test</a>
        </>
    )
}

function Image() {
    return (
        <img src='krzak_trollface.png' />
    );
}

function NavBarCSS() {
    return (
      <>
        <nav>
            <main>
                <div id="buttons">
                    <Button />
                    <Button />
                </div>
            </main>
        </nav>
      </>
    )
  }
  
  export default NavBarCSS
