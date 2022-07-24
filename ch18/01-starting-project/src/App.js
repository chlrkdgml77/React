import { Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "./store";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {

  const show = useSelector((state) => {return state.auth.isAuthenticated});

  return (
    <Fragment>
      <Header></Header>
      {!show && <Auth></Auth>}
      {show && <UserProfile></UserProfile>}
      <Counter />
    </Fragment>
  );
}

export default App;
