import 'react-native-url-polyfill/auto';
import React from 'react';
import { SafeAreaView } from 'react-native';
import AuthScreen from './src/screens/authscreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthScreen />
    </SafeAreaView>
  );
}