/**
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

const App: () => React$Node = () => {
  const [tax, setTax] = useState(0);

  const calculateTax = val => {
    const cost = parseFloat(val);
    const salesTax = cost * 0.155;
    setTax((salesTax + cost).toFixed(2));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[{height}, styles.elementsContainer]}>
          <View style={[{flex: 1}]}>
            <Text style={styles.headerStyle}>PlusTax</Text>
          </View>
          <View style={{flex: 0.6, backgroundColor: '#6246EA'}}>
            <Text style={styles.subText}>TAXED AMOUNT (15.5%)</Text>
            <Text style={styles.valueText}>
              $
              {isNaN(tax)
                ? 0
                : tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          </View>
          <View style={{flex: 1, backgroundColor: '#6246EA'}}>
            <Text style={styles.subText}>AMOUNT</Text>
            <TextInput
              style={styles.input}
              autoFocus={true}
              keyboardType="numeric"
              placeholder="Enter amount"
              placeholderTextColor="#E9E9E9"
              maxLength={14}
              onChangeText={val => calculateTax(val)}
            />
          </View>
          <View style={{height: 200, backgroundColor: '#6246EA'}} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6246EA',
  },
  headerStyle: {
    marginTop: 30,
    marginLeft: 15,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    backgroundColor: '#6246EA',
  },
  subText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E9E9E9',
  },
  valueText: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  input: {
    textAlign: 'center',
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  elementsContainer: {
    backgroundColor: '#6246EA',
  },
});

export default App;
