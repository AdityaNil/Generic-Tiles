import React,{useState} from 'react'
import './Login.css'

const Login = () => {

  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div>
      <h2>
        Generic Tiles Welcomes You All
      </h2>
    <div className={`main-container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main-container">
      <div class="form-main-container sign-up-main-container">
        <form>
          <h1>Create Account</h1>
          <div class="public-main-container">
          </div>
          <span>use your own email</span>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div class="form-main-container sign-in-main-container">
        <form>
          <h1>Sign in</h1>
          <div class="public-main-container">
          </div>
          <span>use your own credentials</span>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div class="layerup-main-container">
        <div class="layerup">
          <div class="layerup-panel layerup-left">
            <h1>Welcome Back!</h1>
            <p>
              For Sign In click here
            </p>
            <button className="ghost" onClick={handleSignInClick}>Sign In</button>
          </div>
          <div class="layerup-panel layerup-right">
            <h1>Hello, User</h1>
            <p>For Sign Up click here </p>
            <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
    </div> 
  )
}

export default Login
