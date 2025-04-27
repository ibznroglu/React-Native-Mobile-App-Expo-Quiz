import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import account from '../utils/appwrite'
const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Kullanıcı kaydı işlemi
  const handleRegister = async () => {
    try {
      // Kullanıcı kaydı için unique ID kullanıyoruz
      await account.create('unique()', email, password); 
      setMessage('Kayıt başarılı!');
    } catch (error) {
      setMessage(`Hata: ${error.message}`);
    }
  };

  // Kullanıcı girişi işlemi
  const handleLogin = async () => {
    if (!email || !password) {
      setMessage('Lütfen email ve şifre giriniz.');
      return;
    }
  
    try {
      await account.createSession({
        email: email,
        password: password,
      });
      setMessage('Giriş başarılı!');
    } catch (error) {
      console.log(error); // hata detayını konsola bas
      setMessage(`Hata: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appwrite Authentication</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Kayıt" onPress={handleRegister} />
      <Button title="Giriş Yap" onPress={handleLogin} disabled={!email || !password} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  message: {
    marginTop: 20,
    textAlign: 'center',
    color: 'green',
  },
});

export default AuthScreen;