import './NavBarCSS.css';

function NavBar() {
  


function Button({href}) {
    return (
        <>
            <a href={href}>Test</a>
        </>
    )
}

function Logo() {
    return (
        <img src='MgTai.png' />
    );
}

function NavBarCSS() {
    return (
      <>
        <nav>
            <main>
                <Logo />
                <div id="buttons">
                    <Button href="patrykduda.com"/>
                    <Button href="patrykduda.com"/>
                    <Button href="patrykduda.com"/>
                    <Button href="patrykduda.com"/>
                </div>
            </main>
        </nav>
      </>
    )
  }
  

  export default NavBar

  export default NavBarCSS

