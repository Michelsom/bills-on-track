import { Platform } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #ffffff;
`;
export const Header = styled.View`
width: 100%;
height: 15%;
align-items: center;
justify-content: center;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
`;

export const BalanceContainer = styled.View`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  ${Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: '0px 4px',
    shadowOpacity: '0.2',
    shadowRadius: 16,

  },
  android: {
    elevation: '20',
  },
})}
`;

export const TextEntrance = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
export const ValueEntrance = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const BalanceText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #000;
`;
export const EntranceAndExit = styled.View`
width: 100%;
height: 50px;
justify-content: center;
flex-direction: row;
`;
export const Entrance = styled.View`
width: 44%;
height: 50px;
flex-direction: row;
`;

export const Exit = styled.View`
width: 44%;
height: 50px;
background: red;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  color: #000;
  margin-top: 8px;
`;

export const ChartContainer = styled.View`
  margin-bottom: 24px;
`;