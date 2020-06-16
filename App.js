/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.text}>PlusTax</Text>
          <View style={styles.wrapper}>
            <TextInput
              style={styles.input}
              autoFocus={false}
              keyboardType="numeric"
              placeholder="Enter item amount"
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    height: 100,
    padding: 20,
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  wrapper: {
    paddingTop: 20,
    height: 500,
  },
  input: {
    borderRadius: 5,
    paddingRight: 50,
    height: 40,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default App;
