import RouteHandler from "./routes/RouteHandler";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "./handle-api/handleUserFetch";

function App() {
  
  const dispatch = useDispatch();

  const { isUserLogged } = useSelector((state) => state.userStateChanger);

  useEffect(() => {
    if (isUserLogged === null) dispatch(fetchUser());
  }, []);

  return (
    <>
      <RouteHandler />
    </>
  );
}

export default App;
