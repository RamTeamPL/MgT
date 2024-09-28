import './MainHomePageCSS.css';
import ShortAppInfo from './ShortAppInfo';
import Image from './Image';
import Info from './Info';
function MainHomePage() {
    

    return (
      <div id='MainPage'>
        <ShortAppInfo/>
        
        <a href='' id='MainPageA1'>Zaloguj się</a>
        <a href='.contact' id='MainPageA2'>Kontakt</a>

        <Image img={'./cos.png'}/>
        <Info/>
      </div>
    )
  }
  
  export default MainHomePage