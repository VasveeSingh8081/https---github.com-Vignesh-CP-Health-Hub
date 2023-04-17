import "./index.css";

function SignUpForPatients() {
  return (
    <div className="SignupforHospital">
      <form>
        <div className="signup-form">
          <div className="SignUP-P-heading">
            <h2 className="SignUph2">SIGN-UP</h2>
            <h3 className="SignUP-P-h3">
              Please fill in this form to create an account
            </h3>
          </div>
          <br />
          <div className="input-container">
            <label className="label-1">Username : </label>
            <input
              type="text"
              className="SignUpText"
              placeholder="Enter Username"
            />
            <label className="label-1">Name as per aadhar : </label>
            <input
              type="text"
              className="SignUpText"
              placeholder="Enter Name as per aadhar"
            />
            <label className="label-1">Phone Number : </label>
            <input
              type="Number"
              className="SignUpText"
              placeholder="Enter Phone Number "
            />

            <div class="DOB">
              <label className="label-1">Date Of Birth : &emsp;</label>
              <br />
              <input type="date" placeholder="Enter DOB" />
            </div>

            <label className="label-1">Blood Group: </label>
            <input
              type="text"
              className="SignUpText"
              placeholder="Enter Blood Group"
            />
            <div className="select">
              <select class="form-select" aria-label="Default select example">
                <option selected>Gender</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Others</option>
              </select>
            </div>

            <label className="label-1">Address : &nbsp;</label>
            <input
              type="text"
              className="SignUpText"
              placeholder="Enter Address "
            />

            <label className="label-1">Mail ID : </label>

            <input
              type="text"
              className="SignUpText"
              placeholder="Enter Mail id"
            />
            <label className="label-1">Password : </label>
            <input
              type="password"
              className="SignUpText"
              placeholder="Enter password"
            />
            <label className="label-1">Confirm Password : </label>
            <input
              type="password"
              className="SignUpText"
              placeholder="Re-Enter password"
            />
          </div>

          <div className="button-container1">
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

export default SignUpForPatients;
