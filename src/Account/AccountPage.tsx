import './AccountPageCSS.css';

function LoginInput() {
    return (
        <>
            <p>Login: </p>
            <input type='text' />
        </>
    )
}

function PasswordInput() {
    return (
        <>
            <p>Password: </p>
            <input type='password' />
        </>
    )
}


function AccountPage() {
    return (
      <>
        <div id="loginpage">
            <LoginInput />
            <PasswordInput/><br/>
            <button>LOG in</button>
        </div>
      </>
    )
  }
  
  export default AccountPage
