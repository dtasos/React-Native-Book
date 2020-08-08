import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';
import SearchInput from './components/SearchInput';

export default function App() {
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior="padding">
      <Text style={[styles.largeText, styles.textStyle]}>
        San Francisco
      </Text>
      <Text style={[styles.smallText, styles.textStyle]}>
        Light Cloud
      </Text>
      <Text style={[styles.largeText, styles.textStyle]}>
        24*
      </Text>
      <SearchInput
       placeholder="Search any city"/>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
  },
  largeText: {
    fontSize:44, 
  },
  smallText: {
    fontSize: 18,
  },
});
