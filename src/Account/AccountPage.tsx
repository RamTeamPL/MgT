import './AccountPageCSS.css';

function LoginInput() {
    return (
        <div className="inputFields">
            <span id="acclog">Username: </span><br/>
            <input type='text' />
        </div>
    )
}

function PasswordInput() {
    return (
        <div className="inputFields">
            <span id="accpass">Password: </span><br/>
            <input type='password' /><br/>
        </div>
    )
}


function AccountPage() {
    return (
      <>
        <div id="loginpage">
            <h1>Log in</h1>
            <img src="MgTai.png" alt="logo"/><br />
            <button className='loginVia'>
                <img src="googleIcon.png" alt="" />
                <span>Log in using Google account</span>
            </button><br />
            <hr />

            <LoginInput /><br/>
            <PasswordInput/><br />
            <button id = "login">Login</button>

        </div>
      </>
    )
  }
  
  export default AccountPage
