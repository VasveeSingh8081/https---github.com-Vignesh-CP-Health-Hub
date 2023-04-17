import React from "react";
import "./index.css";
export default function SignInPage() {
  return (
    <>
      <div className="app">
        <div className="form">
          <form>
            <div className="login-form">
              <div className="button-container">
                <button class="button signin">SIGN-IN</button>
                <button class="button">
                  <a href="/SignUpPage" class="SignUp">
                    SIGN-UP
                  </a>
                </button>
              </div>

              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign-in as
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="/SignInForPatients">
                    Patient
                  </a>
                  <a class="dropdown-item" href="/SignInForHospital">
                    Hospital
                  </a>
                </div>
              </div>

              {/* <div className="button-container">
              <input type="submit" value="SIGN-IN" oncl />
            </div> */}

              <div class="container signin">
                <p>
                  <a href="#">Forgot Password?</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
