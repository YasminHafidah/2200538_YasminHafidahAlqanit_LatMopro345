import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { styles } from '../styles/styles';
import {validateEmail} from '../utils'

const SubscribeScreen = () => {
  const [email, setEmail] = useState(''); 

const handleSubscribe = () => {
    console.log("Subscribe button pressed");
    if (email) {
      Alert.alert('Thanks for subscribing, stay tuned!');
      setEmail(''); 
    }
  };

  const isEmailValid = validateEmail(email);

  return (
    <View style={styles.container}>
       <Image 
        source={require('../assets/little-lemon-logo-grey.png')}
        style={styles.logoSubscribe}
      />
      <Text style={styles.title}>Subscribe to our Newsletter for our latest delicious recipes!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={[styles.buttonSubscribe, { opacity: isEmailValid ? 1 : 0.5 }]} 
        onPress={isEmailValid ? handleSubscribe : null} 
        disabled={!isEmailValid}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscribeScreen;

