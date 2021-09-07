/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import VoteComponent from './src/components/VoteComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <VoteComponent />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});
