import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from "expo-auth-session/providers/google";
import { createContext, useEffect, useState } from "react";

interface AuthContextData {
  promptAsync: () => void;
  user: boolean;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "981331326290-jagqia50991ib7q6k71u7lm1p4ghccc6.apps.googleusercontent.com",
    iosClientId:
      "981331326290-8ojibkijikulchgj81ngip587me4shh2.apps.googleusercontent.com",
  });
  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const user = await response.json();
      setUser(true)
      await AsyncStorage.setItem("@BOT:user", JSON.stringify(user));
    } catch (err) {
      setUser(false)
    }
  };

  const handleSingInWithGoogle = async () => {
    const user = await AsyncStorage.getItem("@BOT:user");
    if (!user) {
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        await getUserInfo(response.authentication?.accessToken);
      } else {
        // setUserInfo(JSON.parse(user));
      }
    } else {
      //force navigation to home 
      // NavigationService.navigate("HomeScreen") ;
    }
  };

  useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);

  return (
    <AuthContext.Provider
      value={{ promptAsync, user }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;

