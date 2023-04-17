import "./index.css";
import React from "react";
function SignUpForHospital() {
  return (
    <div className="SignupforHospital">
      <form>
        <div className="signup-form-Hosp">
          <div className="heading-H">
            <h2>SIGN-UP</h2>
            <h3 className="SignUP-H-h3">
              Please fill in this form to create an account
            </h3>
          </div>
          <br />
          <div className="input-container">
            <label>Hospital Name : </label>
            <input type="text" placeholder="Enter hospital name" />
            <label>Hospital Mail ID : </label>
            <input type="text" placeholder="Enter mail id" />
            <label>Password : </label>
            <input type="password" placeholder="Enter password" />
            <label>Confirm Password : </label>
            <input type="password" placeholder="Re-Enter password" />
          </div>

          <div className="button-container">
            <input type="submit" value="Sign-Up" />
          </div>

          <div class="container signin">
            <p>
              Already have an account? <a href="/SignInPage">Sign-in</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SignUpForHospital;
