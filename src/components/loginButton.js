import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../styles/login/loginPage.scss";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <div className="loginPage">
      <div>
        <section className="loginSection">
          <div className="loginContainer">
            <h1 id="useThis">Welcome Muggle</h1>
            <button class="glow" type="submit" value="Submit" id="myButton" 
                onClick={() => {
                  loginWithRedirect();
                }}>
              Alohomora
            </button>
          </div>
        </section>
      </div>
      </div>
    )
  );
};
export default LoginButton;
