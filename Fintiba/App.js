import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import LoginScreen from './src/screens/Login';
import { store } from './src/state/store';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/screens/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <LoginScreen /> */}
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
