import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../../screens/constants/colors';
export default function TaskListItem(props) {
  const navigation = useNavigation();
  const { taskId } = props.todo.item;
  const itemDatas = props.todo.item;

  return (
    <View style={styles.todoItem}>
      <Text>{props.todo.item.title}</Text>
      <Button
        title='Detail'
        onPress={() => {
          navigation.navigate('TaskDetailScreen', {
            itemId: { taskId },
            itemDatas: { itemDatas },
          });
        }}
        color={Colors.primaryGrey}
      />
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
