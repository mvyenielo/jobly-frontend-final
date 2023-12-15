import { Link } from "react-router-dom";
import userContext from "./userContext";
import { useContext } from "react";

/**
 * HomePage: renders page at "/"
 *
 *
 */
function HomePage() {

  const { username, firstName } = useContext(userContext);

  return (
    <div className="HomePage-container mt-5">
      <h1>Jobly</h1>
      <img src="/logos/career_climbing.jpg" width="600px"/>
      {!username ?
        <div className="mt-5" >
          <Link to="/login">
            <button className="btn btn-primary me-5">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn btn-primary ml-5">Sign Up</button>
          </Link>
        </div> :
        <h1>Welcome back {firstName}!</h1>}
        <div>
        <h5>
          demo login info:
        </h5>
        <p><i>username:</i> demo</p>
        <p><i>password:</i> password</p>
      </div>
    </div>
  );
}

export default HomePage;;