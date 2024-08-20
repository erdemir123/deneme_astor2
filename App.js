import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [session,setSession]=useState(null);
  const handleLogin=async()=>{

    response = await axios.get(
      `https://bakim.astoras.com.tr/apirest.php/initSession?get_full_session=true&expand_dropdowns=true`,
      {
        headers: {
          "App-Token": "OB1OAh01C4YoqZw4gCcK6Un6zum3HssFZQ5G0AoJ",
          "Content-Type": "application/json",
          Authorization: `Basic Z2xwaXN5bmM6QnVsdXQuNDQ3OA==`,
        },
      }
    );
    console.log("response.data:", response?.data);
    setSession(response?.data.session_token)
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={handleLogin}><Text>Login</Text></TouchableOpacity>
      <Text>{session}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
