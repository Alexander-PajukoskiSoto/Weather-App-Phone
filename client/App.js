import { React, useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Home from './screens/Home';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>hi</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding: 20,
    backgroundColor: '#0000ff',
    borderRadius: 10
  }
});
