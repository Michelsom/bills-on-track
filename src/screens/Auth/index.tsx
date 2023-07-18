import React, { useContext } from "react";
import { Image } from "react-native";
import IconGoogle from "../../assets/icons/google.png";
import AuthContext from "../../context/Auth";
import * as S from "./styles";

const Auth = () => {
  const { promptAsync } = useContext(AuthContext)
  return (
    <S.Container>
      <S.Content>
        <S.Title>{`Bills On Track`}</S.Title>
        <S.Text>{`Seu gerenciador\npessoal finanças`}</S.Text>
        <S.Button onPress={() => promptAsync()}>
          <Image
            resizeMethod="resize"
            resizeMode="contain"
            style={{
              height: 30,
            }}
            source={IconGoogle}
          />
          <S.TextButton>Continuar com Google</S.TextButton>
        </S.Button>
      </S.Content>
    </S.Container>
  );
};

export default Auth;
