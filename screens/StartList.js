import { useState, useEffect } from 'react';
import { IP } from '@env';
import Colors from '../screens/constants/colors';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import AddTaskForm from '../components/AddTaskForm';
import { setTasksInStore } from '../redux/actions/tasks.action';
import TaskList from '../components/TaskList';

export default function StartListScreen() {
  const dispatch = useDispatch();

  const getTasks = async () => {
    const { data } = await axios.get(`http://${IP}:3001/tasks`);
    dispatch(setTasksInStore(data));
  };
  useEffect(() => {
    getTasks();
  }, []);

  // Pour récupérer les taches dans le store Redux
  const tasks = useSelector((state) => state.tasks.allTasks);

  return (
    <View style={styles.container}>
      <AddTaskForm />
      <TaskList tasks={tasks} />
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
