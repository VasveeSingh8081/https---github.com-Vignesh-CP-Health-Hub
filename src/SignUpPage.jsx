import React from "react";
import "./index.css";
export default function SignUpPage() {
  return (
    <div>
      <div className="app">
        <div className="heading"></div>
        <div className="form">
          <form>
            <div className="login-form">
              <h2>SIGN-UP</h2>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign-Up as
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="/SignUpForPatients">
                    Patient
                  </a>
                  <a class="dropdown-item" href="/SignUpForHospital">
                    Hospital
                  </a>
                </div>
              </div>
              {/* <div className="button-container">
                <input type="submit" />
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
