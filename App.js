import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './scr/theme';
import StorePantalla from './scr/caracteristicas/stores/pantallaStore/StorePantalla';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import {
  useFonts as useRobotoMono,
  RobotoMono_400Regular,
} from '@expo-google-fonts/roboto-mono';

import {
  useFonts as useNotoSans,
  NotoSans_400Regular,
} from '@expo-google-fonts/noto-sans';




export default function App() {
  const [robotoMonoLoaded] = useRobotoMono({
    RobotoMono_400Regular,
  });

  const [notoSansLoaded] = useNotoSans({
    NotoSans_400Regular,
  });

  if (!robotoMonoLoaded || !notoSansLoaded) {
    return null;
  }
  const Maps = () => <Text>Mapa</Text>
  const Account = () => <Text>Mi Cuenta</Text>
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === 'Restaurant') {
                return (
                  <Ionicons
                    name={
                      focused
                        ? 'restaurant'
                        : 'restaurant-outline'
                    }
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Map') {
                return (
                  <Ionicons
                    name={focused ? 'ios-location' : 'ios-location-outline'}
                    size={size}
                    color={color}
                  />
                );
              } else if (route.name === 'Settings') {
                return (
                  <Ionicons
                    name={focused ? 'settings' : 'settings-outline'}
                    size={size}
                    color={color}
                  />
                );
              }
            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: 'green',
          })}
        >
          <Tab.Screen
            name="Restaurant"
            component={StorePantalla}
          />
          <Tab.Screen name="Map" component={Maps} />
          <Tab.Screen name="Settings" component={Account} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },

});
