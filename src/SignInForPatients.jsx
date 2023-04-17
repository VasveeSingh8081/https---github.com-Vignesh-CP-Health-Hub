import React from "react";

export default function SignInForPatients() {
  return (
    <>
      <div className="SigninforHospital">
        <form>
          <div className="login-form2">
            <div className="heading">
              <h2>SIGN-IN</h2>
            </div>
            <div className="input-container1">
              <label class="label">Username :</label>
              <br />
              <input type="text" placeholder="Enter user id" />
              <label>Password : </label>
              <br />

              <input type="password" placeholder="Enter password" />
              <br />
              <label class="label">Phone Number : </label>
              <br />

              <input type="text" placeholder="Enter phone no" />
            </div>

            <div className="button-container1">
              <input type="submit" value="SIGN-IN" />
            </div>
            <div class="container signin">
              <p>
                <a href="#">Forgot Password?</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
