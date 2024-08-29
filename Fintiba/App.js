import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/Login';
import { store } from './src/state/store';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/screens/Navigation';
import './src/i18n/i18n.config';
import Splash from './src/Splash';

export default function App() {

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    isLoading ?
      <Splash setIsLoading={setIsLoading} />
      :

      <NavigationContainer>
        <Provider store={store}>
          <NavigationStack />
        </Provider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
