import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StartListScreen from './screens/StartList';

export default function App() {
  let screen = <StartListScreen />;
  return <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>;
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
