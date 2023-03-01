import { View, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../../screens/constants/colors';
export default function AddTaskForm() {
  const [titleTaskEntered, setTitleTaskEntered] = '';
  return (
    <View style={styles.addTaskOuterContainer}>
      <TextInput
        style={styles.addTaskInput}
        value={titleTaskEntered}
        onChange={(e) => setTitleTaskEntered(e.target.valueOf)}
      />
      <Button
        onPress={(e) => console.log('bip')}
        title='+'
        color={Colors.yellow}
        accessibilityLabel='Add a task'
      />
    </View>
  );
}
const styles = StyleSheet.create({
  addTaskOuterContainer: {
    backgroundColor: Colors.yellow,
    height: 50,
    width: '80%',
    flexDirection: 'row',
  },
  addTaskInput: {
    flex: 5,
    fontSize: 32,
    borderBottomColor: Colors.primaryGrey,
    backgroundColor: Colors.primaryWhite,
    borderBottomWidth: 2,
    color: 'grey',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
