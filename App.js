import store from './redux/store';
import { Provider } from 'react-redux';
import { StyleSheet, SafeAreaView } from 'react-native';
import StartListScreen from './screens/StartList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TaskDetailScreen from './screens/TaskDetail';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.rootScreen}>
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='StartListScreen' component={StartListScreen} />
            <Stack.Screen
              name='TaskDetailScreen'
              component={TaskDetailScreen}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
