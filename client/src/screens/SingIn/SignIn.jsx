import { useState } from "react";
import { signIn } from "../../services/users";
import { useHistory } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import './SignIn.css'

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = (event) => {
    event.preventDefault();

    const { setUser } = props;

    signIn(form)
      .then((user) => {
        setUser(user);
      })
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        setForm({
          isError: true,
          errorMsg: "Invalid Credentials",
          username: "",
          password: "",
        });
      });
  };

  const renderError = () => {
    const toogleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toogleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit" className='sign-in-button'>Sign In</button>;
    }
  };

  const { username, password } = form;
  return (
    <Layout>
      <div className="form-container">
        <h3>Sign In</h3>
        <form onSubmit={onSignIn}>
          <input
            className='sign-in-input'
            required
            type="text"
            name="username"
            value={username}
            placeholder="Enter Username"
            onChange={handleChange}
          />
          <input
            className='sign-in-input'
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
          {renderError()}
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
