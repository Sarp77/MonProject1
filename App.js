
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App = () => {
  const pressFunction = () => {
  
    const user = {
      name: "Sarp",
      age: 43,
      isAdmin: true
    }
    const member = {
      ...user,
      password: '12345',
      type: null
    }
    const {age} = user

    console.log(age);

  }
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <View style={{ flex: 1, justifyContent:'center', alignItems: 'center' }}>
        <Text>Hello! Sarp! Emel! Arzu!</Text>

        <Button title='Log' onPress={pressFunction} />

      </View>

    </SafeAreaView>
  
  );
};



export default App;
