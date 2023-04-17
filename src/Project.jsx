import SignInPage from "./SignInPage";
import SignUpPage from "./SignUpPage";
import SignInForPatients from "./SignInForPatients";
import SignInForHospital from "./SignInForHospital";
import SignUpForHospital from "./SignUpForHospital";
import SignUpForPatients from "./SignUpForPatients";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Project() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignInPage" element={<SignInPage></SignInPage>}></Route>
        <Route path="/SignUpPage" element={<SignUpPage></SignUpPage>}></Route>
        <Route
          path="/SignInForPatients"
          element={<SignInForPatients></SignInForPatients>}
        ></Route>
        <Route
          path="/SignInForHospital"
          element={<SignInForHospital></SignInForHospital>}
        ></Route>
        <Route
          path="/SignUpForHospital"
          element={<SignUpForHospital></SignUpForHospital>}
        ></Route>
        <Route
          path="/SignUpForPatients"
          element={<SignUpForPatients></SignUpForPatients>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Project;
