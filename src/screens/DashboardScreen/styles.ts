import { Platform } from "react-native";
import { styled } from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  height: 100%;
  background-color: #f9f9f9;
`;
export const Header = styled.View`
width: 100%;
padding: 8% 15px 0px 16px;
background-color: ${({ theme }) => theme.primary};
align-items: center;
flex-direction: row;
justify-content: space-between;
`;
export const Notification = styled.TouchableOpacity`
width: 48px;
height: 48px;
align-items: center;
justify-content: center;
border-radius: 8px;
background-color: ${({ theme }) => theme.greenColor};
`;
export const BoxContainer = styled.View`
width: 60%;
height:80px;
padding-top: 15px;
/* background-color: ${({ theme }) => theme.primary}; */
flex-direction: column;
align-items: center;
justify-content: center;
`;
export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
  color:#fff;
  width: 100%;
  height: 24px;

`;

export const TimetableTitle = styled.Text`
  font-size: 14px;
  width: 100%;
  color: #fff;
`;

export const UserImage = styled.Image`
width: 64px;
height: 64px;
border-radius: 32px;
background: #fff;
`;

export const BalanceContainer = styled.View`
  margin-top: 20px;
  width: 100%;
  background: #fff;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  ${Platform.select({
  ios: {
    shadowColor: '#ccc',
    shadowOffset: '2px 4px',
    shadowOpacity: '0.2',
    shadowRadius: 15,
  },
  android: {
    elevation: '20',
  },
})}
flex-direction: row;
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