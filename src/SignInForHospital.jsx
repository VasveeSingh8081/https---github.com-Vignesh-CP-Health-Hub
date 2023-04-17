import React from "react";
import "./index.css";
export default function SignInForHospital() {
  return (
    <div className="SigninforHospital">
      <form>
        <div className="login-form1">
          <div className="heading">
            <h2>SIGN-IN</h2>
          </div>
          <div className="input-container-2">
            <label class="label">User ID :</label>
            <br />
            <input type="text" placeholder="Enter user id" />
            <label>Password : </label>
            <br />
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="button-container">
            <input type="submit" value="Login" />
          </div>
          <div class="container signin">
            <p>
              <a href="#">Forgot Password?</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
