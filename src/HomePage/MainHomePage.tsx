import './MainHomePageCSS.css';
import '../srodekCSS.css'
import ShortAppInfo from './ShortAppInfo';
import Image from './Image';
import Info from './Info';
import { Page } from '../MainPage/MainPage';
function MainHomePage({setPage}) {
    

    return (
      <main>
      <div id='MainPage'>
        <ShortAppInfo/>
        
        <button onClick={()=>{setPage(Page.AccountPage)}} id='MainPageA1'>Zaloguj się</button>

        <Image img={'./cos.png'}/>
        <Info/>
      </div>
      </main>
    )
  }
  
  export default MainHomePage
