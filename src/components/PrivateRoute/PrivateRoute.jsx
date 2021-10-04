import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { authSelectors } from "../../redux/auth";
import urls from "../../config/urls";

export default function PrivateRoute({ children, ...route }) {
  const user = useSelector(authSelectors.getUser);

  return (
    <Route {...route}>
      {user === undefined ? children : <Redirect to={urls.login} />}
    </Route>
  );
}
