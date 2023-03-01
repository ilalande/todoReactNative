import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTaskForm from '../components/AddTaskForm';
export default function StartListScreen() {
  return (
    <View style={styles.container}>
      <AddTaskForm />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingTop: 30,
  },
});
