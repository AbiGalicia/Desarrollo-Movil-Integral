import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './scr/theme';

import StorePantalla from './scr/caracteristicas/stores/pantallaStore/StorePantalla';

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

  if(!robotoMonoLoaded || !notoSansLoaded){
    return null;
  }

  return (  
    <ThemeProvider theme={theme}>
      <StorePantalla/>
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
