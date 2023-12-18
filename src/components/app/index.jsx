import { Link, Route, Routes } from "react-router-dom";
import { LogIn } from "../../pages/sign-in";
import SignUp from "../../pages/sign-up";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles["app"]}>
      <div className={styles["links-wrap"]}>
        <Link to={"/"}> Home </Link>
        <Link to={"/log-in"}> Log In </Link>
        <Link to={"/sign-up"}> Sign Up</Link>
      </div>

      <Routes>
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
