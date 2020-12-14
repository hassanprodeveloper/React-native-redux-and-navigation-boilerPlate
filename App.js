/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Navigations from './src/Navigation/Navigations'
import {Provider} from 'react-redux'
import store from './src/redux/store'

const App = () => {
  return (
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Navigations />
        </Provider>
    );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
