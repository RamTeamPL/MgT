import './MainHomePageCSS.css';
import '../srodekCSS.css'
import ShortAppInfo from './ShortAppInfo';
import Image from './Image';
import Info from './Info';
import { Page } from '../MainPage/MainPage';
function MainHomePage({setPage}) {
    

    return (
      <div id='MainPage'>
      <main>
        <ShortAppInfo/>
        
        <button onClick={()=>{setPage(Page.AccountPage)}} id='MainPageA1'>Zaloguj się</button>

        <Image img={'./cos.png'}/>
        <Info/>
      </main>
      </div>
    )
  }
  
  export default MainHomePage
