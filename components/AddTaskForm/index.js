import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../../screens/constants/colors';

export default function AddTaskForm() {
  const [titleTaskEntered, setTitleTaskEntered] = useState('');

  return (
    <View style={styles.addTaskOuterContainer}>
      <TextInput
        style={styles.addTaskInput}
        value={titleTaskEntered}
        onChangeText={(e) => setTitleTaskEntered(e)}
        placeholder='Ajouter une tâche'
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
    borderRadius: 4,
    height: 70,
    width: '80%',
    flexDirection: 'row',
    marginVertical: 6,
  },
  addTaskInput: {
    margin: 40,
    flex: 5,
    borderRadius: 4,
    fontSize: 20,
    borderColor: Colors.primaryGrey,
    backgroundColor: Colors.primaryWhite,
    borderWidth: 1,
    color: 'grey',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
