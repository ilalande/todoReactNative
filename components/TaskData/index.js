import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../screens/constants/colors';
export default function TaskData(props) {
  // useEffect(() => {
  //   console.log(props.todo);
  // }, []);

  return (
    <View style={styles.todoItem}>
      <Text>{props.todo.item.title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 4,
    padding: 20,
    marginVertical: 6,
    backgroundColor: Colors.primaryWhite,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
