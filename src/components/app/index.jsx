import { Route, Routes } from "react-router-dom";
import {LogIn} from "../../pages/sign-in";
import SignUp from "../../pages/sign-up";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
