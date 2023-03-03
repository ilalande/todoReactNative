import { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Colors from '../../screens/constants/colors';
import TaskListItem from '../TaskListItem';
export default function TaskList(props) {
  return (
    <View style={styles.todoContainer}>
      <FlatList
        data={props.tasks}
        renderItem={(itemData) => {
          return <TaskListItem todo={itemData} />;
        }}
        keyExtractor={(item, index) => {
          return item.taskId;
        }}
        alwaysBounceVertical={false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  todoContainer: {
    marginTop: 30,
    backgroundColor: Colors.purple,
    padding: 30,
    width: '80%',
  },
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
