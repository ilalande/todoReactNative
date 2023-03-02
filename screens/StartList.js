import { useState, useEffect } from 'react';
import Colors from '../screens/constants/colors';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
} from 'react-native';
import AddTaskForm from '../components/AddTaskForm';
import { setTasksInStore } from '../redux/actions/tasks.action';
export default function StartListScreen() {
  const dispatch = useDispatch();

  const getTasks = async () => {
    const { data } = await axios.get('http://192.168.0.180:3001/tasks');
    dispatch(setTasksInStore(data));
    console.log(data);
  };
  useEffect(() => {
    getTasks();
  }, []);

  // Pour récupérer les taches dans le store Redux
  const tasks = useSelector((state) => state.tasks.allTasks);

  return (
    <View style={styles.container}>
      <AddTaskForm />
      <View style={styles.todoContainer}>
        <FlatList
          data={tasks}
          renderItem={(itemData) => {
            return (
              <View style={styles.todoItem}>
                <Text>{itemData.item.title}</Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => {
            return item.taskId;
          }}
          alwaysBounceVertical={false}
        />
      </View>
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
  todoContainer: {
    flex: 1,
    backgroundColor: 'withe',
    alignItems: 'center',
    paddingTop: 30,
  },
  todoItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
