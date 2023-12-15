import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";
import "./SignUp.css"

const initialSignUpData = {
  username: "", password: "",
  firstName: "", lastName: "",
  email: ""
};
/**
 * SignUp: Renders form for user to input username/password
 *
 * State:
 * - signUpData: {username:..., ...}
 *
 * Prop:
 * -registerUser: function that sends user registration information to JoblyApp
 *
 */
function SignUp({ registerUser }) {
  const [signUpData, setSignUpData] = useState(initialSignUpData);
  const [errors, setErrors] = useState(null);
  const navigate = useNavigate();

  /** Updates signUpData state when user types in form */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignUpData(s => ({ ...s, [name]: value }));
  }

  /** Sends user registration information to JoblyApp on submit, resets form,
   * redirects user to home page
   * if error, updates signUpData state to include errors and
   * renders errorMessage component
   */
  async function handleSubmit(evt) {
    evt.preventDefault();

    try {

      await registerUser(signUpData);
      setSignUpData(initialSignUpData);
      navigate("/");

    } catch (err) {
      setErrors(err[0].message);
    }

  }

  return (
    <div className="SignUp-container">
      <div className="card">
      <h1 className="card-title">Sign Up</h1>
      <form className="card-body SignUp" onSubmit={handleSubmit}>
        <div className="input">
        username:
        <input
          name="username"
          value={signUpData.username}
          onChange={handleChange}
        />
        </div>
        <div className="input">
        password:
        <input
          name="password"
          value={signUpData.password}
          onChange={handleChange}
        />
        </div>
        <div className="input">
        first name:
        <input
          name="firstName"
          value={signUpData.firstName}
          onChange={handleChange}
        />
        </div>
        <div className="input">
        last name:
        <input
          name="lastName"
          value={signUpData.lastName}
          onChange={handleChange}
        />
        </div>
        <div className="input">
        email:
        <input
          name="email"
          value={signUpData.email}
          onChange={handleChange}
        />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {errors && <ErrorMessage errorMessages={errors} />}
    </div>
    </div>
  );
}

export default SignUp;