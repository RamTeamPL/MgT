
import Templates from './Template/Templates'
import AccountPage from './Account/AccountPage'
import './App.css'
import MainHomePage from './HomePage/MainHomePage'
import MainPage from './MainPage/MainPage'
import NavBar from './HomePage/NavBar'

function App() {
  

  return (
    <>
        <NavBar />
        <AccountPage/>
        <MainHomePage/>
        <AccountPage />
    </>
  )
}

export default App
