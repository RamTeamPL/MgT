import './AccountPageCSS.css';

function LoginInput() {
    return (
        <div>
            <span id="acclog">Login: </span><br/>
            <input type='text' />
        </div>
    )
}

function PasswordInput() {
    return (
        <div>
            <span id="accpass">Password: </span><br/>
            <input type='password' /><br/>
        </div>
    )
}


function AccountPage() {
    return (
      <>
        <div id="loginpage">
            <LoginInput /><br/>
            <PasswordInput/><br />
            <button>LOG in</button>
        </div>
      </>
    )
  }
  
  export default AccountPage
