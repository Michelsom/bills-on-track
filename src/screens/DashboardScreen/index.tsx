import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import { googleIcon } from '../../assets';
import * as S from './styles';
export const DashboardScreen: React.FC = () => {
  const lastReleaseData = [{
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  }, {
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  }, {
    icon: googleIcon,
    date: '24/09/2023',
    name: 'Netflix',
    value: '24.00'
  },]
  const data = {
    labels: [
      "Energia",
      "Luz",
      "Internet",
      "Água",
    ],
    data: [0.2, 0.6, 0.4, 0.8],
    colors: [
      "rgba(255, 0, 0,0.5)",
      "rgba(238, 130, 238,0.6)",
      "rgba(138, 30, 238,0.6)",
      "rgba(138, 130, 138,0.6)",
    ],
  };
  const dataFlatList = [{ colors: { ...data.colors }, labels: { ...data.labels } }]

  const renderItem = ({ item, index }: any) => {
    const color = data.colors[index];
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <View style={{ width: 25, height: 20, backgroundColor: color, marginEnd: 8, borderRadius: 4 }} />
        <Text>{item}</Text>
      </View>
    );
  }
  const renderList = ({ item, index }: any) => {
    return (
      <TouchableOpacity style={{ width: '100%', marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <S.UserImage source={googleIcon} />
        <View style={{}}>
          <Text>{item.name}</Text>
          <Text>{item.date}</Text>
        </View>
        <Text>{item.value}</Text>
      </TouchableOpacity>
    )
  }
  return (
    <S.Container>
      <S.Header>
        <S.UserImage source={googleIcon} />
        <S.BoxContainer>
          <S.TimetableTitle>Boa Noite</S.TimetableTitle>
          <S.Title>Ragde Goulart</S.Title>
        </S.BoxContainer>
        <S.Notification>
          <Ionicons name="notifications-outline" size={32} color="white" />
        </S.Notification>
      </S.Header>
      <View style={{ width: '100%', padding: 16 }}>
        <Text>Despesas por categoria</Text>
        <S.BalanceContainer>
          <ProgressChart
            data={data}
            width={180}
            height={180}
            strokeWidth={13}
            radius={22}
            hideLegend
            withCustomBarColorFromData={true}
            style={{ borderRadius: 8 }}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              propsForLabels: { fill: '#222', },
              decimalPlaces: 2,
              color: (opacity = 1, _index) => `rgba(150,150,150,0.2)`,
              propsForHorizontalLabels: { fontSize: 10, },
            }}

          />
          <FlatList
            data={data.labels}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem} />
        </S.BalanceContainer>

        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 20 }}>
          <Text>Lançamentos recentes</Text>
          {/* <Icons color='black' name='arrow-right' /> */}
        </View>
        <View style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 20 }}>
          <FlatList
            data={lastReleaseData}
            renderItem={renderList} />
        </View>
      </View>

    </S.Container>
  );
};