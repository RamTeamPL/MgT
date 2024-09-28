//import './MainHomePageCSS.css';
import ShortAppInfo from './ShortAppInfo';
import Image from './Image';
import Info from './Info';
import { Page } from '../MainPage/MainPage';
function MainHomePage({setPage}) {
    

    return (
      <div id='MainPage'>
        <ShortAppInfo/>
        
        <button onClick={()=>{setPage(Page.AccountPage)}} id='MainPageA1'>Zaloguj się</button>

        <Image img={'./cos.png'}/>
        <Info/>
      </div>
    )
  }
  
  export default MainHomePage
