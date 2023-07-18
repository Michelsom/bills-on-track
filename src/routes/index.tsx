import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import AuthContext from "../context/Auth";
import { AppRoutes } from "./app.route";
import { AuthRoutes } from "./auth.routes";

const Stack = createNativeStackNavigator();

const Routes = () => {
  // const [user, setUser] = useState<string | null | number>(0);
  const { user } = useContext(AuthContext)

  return (
    <>
      {user ? (
        <AppRoutes />
      ) : (
        <AuthRoutes />
      )}
    </>
  );
};

export default Routes;
