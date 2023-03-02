import store from './redux/store';
import { Provider } from 'react-redux';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartListScreen from './screens/StartList';
import { useEffect } from 'react';

function App() {
  let screen = <StartListScreen />;
  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
