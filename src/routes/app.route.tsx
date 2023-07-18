import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icons from "../components/Icons";
import { DashboardScreen } from "../screens/DashboardScreen";
import Report from "../screens/Report";
import Settings from "../screens/Settings";
import { darkTheme } from "../theme/colors";

const Tab = createBottomTabNavigator();

export const AppRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: darkTheme.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: darkTheme.primary,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
          backgroundColor: "#222",
          borderTopColor: "#222",
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons name="home" color={focused ? color : darkTheme.grey100} />
          ),
        }}
        name="DashboardScreen"
        component={DashboardScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons name="repeat" color={focused ? color : darkTheme.grey100} />
          ),
        }}
        name="Report"
        component={Report}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Icons
              name="settings"
              color={focused ? color : darkTheme.grey100}
            />
          ),
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

