/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  const [value, setValue] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = val => {
    const cost = parseFloat(val);
    const salesTax = cost * 0.155;
    setTax((salesTax + cost).toFixed(2));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.text}>PlusTax</Text>
          <View style={styles.wrapper}>
            <Text style={styles.valueText}>${tax}</Text>
            <TextInput
              style={styles.input}
              autoFocus={true}
              keyboardType="numeric"
              placeholder="Enter item amount"
              onChangeText={val => calculateTax(val)}
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
  valueText: {
    paddingTop: 100,
    padding: 25,
    textAlign: 'center',
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
