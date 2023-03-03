import { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import Colors from '../../screens/constants/colors';

export default function Header() {
  return <View style={styles.headerContainer}></View>;
}
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.yellow,

    width: '100%',
  },
});
