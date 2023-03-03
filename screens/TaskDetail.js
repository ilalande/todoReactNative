import Colors from './constants/colors';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function TaskDetailScreen({ route, navigation }) {
  const { itemId, itemDatas } = route.params;
  const { title, authorId, date, description, ended, taskId } =
    itemDatas.itemDatas;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer1}>
          {/* <Pressable onPress={navigation.goBack()}>
              <Ionicons name='md-remove' size={24} color='white' />
            </Pressable> */}
          <View style={styles.imageContainer2}>
            <Image
              style={styles.image}
              source={require('../assets/images/close.jpg')}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.description}>
          <Text style={styles.textDescr}>{description}</Text>
        </View>
      </View>
      <View style={styles.actionButtons}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  container: {
    flex: 4,
    width: '90%',
    borderColor: Colors.primary800,
    borderWidth: 1,
    backgroundColor: Colors.primaryWhite,
    paddingTop: 30,
    borderRadius: 4,
    marginTop: 40,
    alignItems: 'center',
  },

  imageContainer1: {
    alignItems: 'flex-end',
    width: '100%',
    marginRight: 10,
  },
  imageContainer2: {
    width: 20,
    height: 20,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
  title: {
    width: '90%',
    backgroundColor: Colors.purple,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    padding: 20,
    borderRadius: 4,
    textAlign: 'left',
  },
  text: {
    fontSize: 26,
    color: Colors.primaryWhite,
  },
  description: {
    width: '90%',
    borderColor: Colors.purple,
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 10,
    padding: 20,
    borderRadius: 4,
    textAlign: 'left',
  },
  textDescr: {
    fontSize: 16,
  },
  actionButtons: { flex: 1 },
});
