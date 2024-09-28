import './MainHomePageCSS.css';
import NavBar from './NavBar';
import ShortAppInfo from './ShortAppInfo';
import Image from './Image';
import Info from './Info';
function MainHomePage() {
    

    return (
      <div id='MainPage'>
        <NavBar/>
        <ShortAppInfo/>
        
        <a href='' id='MainPageA1'>Zaloguj się</a>
        <a href='.contact' id='MainPageA2'>Kontakt</a>

        <Image img={'./cos.png'}/>
        <Info/>
      </div>
    )
  }
  
  export default MainHomePage