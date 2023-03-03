import Colors from './constants/colors';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
export default function TaskDetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Bip bip</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryWhite,
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 4,
    marginTop: 40,
  },
});
