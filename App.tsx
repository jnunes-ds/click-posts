import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';

import { useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';

import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from '@expo-google-fonts/noto-sans';

import { LogBox } from 'react-native';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { AppProvider } from './src/hooks';

// Ignore log notification by message:
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications:
LogBox.ignoreAllLogs();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    NotoSans_400Regular,
    NotoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
