import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import urls from "../../config/urls";

export default function PublicRoute({ children, ...route }) {
  const user = useSelector(authSelectors.getUser);

  return (
    <Route {...route}>
      {user === undefined && route.restirected ? (
        <Redirect to={urls.home} />
      ) : (
        children
      )}
    </Route>
  );
}
