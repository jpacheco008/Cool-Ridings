import { useState, useEffect } from "react";
import "./App.css";
import SignOut from "./screens/SignOut/SignOut";
import SignIn from "./screens/SingIn/SignIn";
import SignUp from "./screens/SignUp/SignUp";
import Home from "./screens/Home/Home";
import List from './screens/List/List'
import Details from './screens/Details/Details'
import { Route, Switch, Redirect } from "react-router-dom";
import { verifyUser } from "./services/users";
import AddItem from './screens/AddItem/AddItem'
import EditItem from './screens/EditItem/EditItem'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  const clearUser = () => setUser(null);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} clearUser={clearUser} />
        </Route >
        <Route exact path='/products'>
          <List user={user}/>
        </Route>
        <Route exact path="/products/:id">
          <Details user={user}/>
        </Route>
        <Route path='add-product'>
          {user ? <AddItem user={user}/> : <Redirect to='/sign-up' />}
        </Route>
        <Route exact path='/products/:id/edit'>
          {user ? <EditItem user={user}/> : <Redirect to='/' />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
