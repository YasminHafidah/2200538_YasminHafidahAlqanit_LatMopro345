import * as React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { styles } from '../styles/styles'; // Import dari folder styles

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Mengimpor logo dari folder assets */}
      <Image 
        source={require('../assets/little-lemon-logo.png')}
        style={styles.logoWelcome}
      />

      {/* Teks Selamat Datang */}
      <Text style={styles.welcomeText}>Little Lemon, your local mediterranean bistro!</Text>

      {/* Tombol Navigasi ke Layar Berlangganan */}
      <Pressable 
        style={styles.buttonWelcome}
        onPress={() => navigation.navigate('Subscribe')}
      >
        <Text style={styles.buttonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

