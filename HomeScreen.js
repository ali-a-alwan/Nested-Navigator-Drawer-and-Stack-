// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Expenses" onPress={() => navigation.navigate('Expenses')} />
      <Button title="Go to Budgets" onPress={() => navigation.navigate('Budgets')} />
    </View>
  );
};

export default HomeScreen;