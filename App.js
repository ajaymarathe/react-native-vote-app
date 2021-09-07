/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Text>Hello world</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
