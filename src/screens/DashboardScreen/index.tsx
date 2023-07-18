import React from 'react';
import { Text, View } from 'react-native';
import { BarChart, LineChart } from 'react-native-chart-kit';
import Icons from '../../components/Icons';
import * as S from './styles';

export const DashboardScreen: React.FC = () => {
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [200, 400, 300, 600, 800, 700],
      },
    ],
  };

  const barChartData = {
    labels: ['Expense 1', 'Expense 2', 'Expense 3', 'Expense 4'],
    datasets: [
      {
        data: [300, 600, 200, 500],
      },
    ],
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>Dashboard</S.Title>
      </S.Header>
      <S.BalanceContainer>
        <View style={{ width: '100%', alignItems: 'center', paddingBottom: 20 }}>
          <S.BalanceText>Saldo</S.BalanceText>
          <S.BalanceText>R$ 500.00</S.BalanceText>
        </View>
        <S.EntranceAndExit>
          <S.Entrance>
            <Icons color='#18AA36' name='arrow-up' />
            <View style={{ flexDirection: 'column' }}>
              <S.TextEntrance>Entradas</S.TextEntrance>
              <S.ValueEntrance>R$ 5.000</S.ValueEntrance>
            </View>
          </S.Entrance>
          <S.Entrance>
            <Icons color='#E03222' name='arrow-down' />
            <View style={{ flexDirection: 'column' }}>
              <S.TextEntrance>Saídas</S.TextEntrance>
              <S.ValueEntrance>R$ 5.000</S.ValueEntrance>
            </View>
          </S.Entrance>

        </S.EntranceAndExit>
      </S.BalanceContainer>

      <S.ChartContainer>
        <Text>Monthly Expenses</Text>
        <LineChart
          data={lineChartData}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 8,
            },
          }}
        />
      </S.ChartContainer>

      <S.ChartContainer>
        <Text>Expense Categories</Text>
        <BarChart
          data={barChartData}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 8,
            },
          }}
        />
      </S.ChartContainer>
    </S.Container>
  );
};