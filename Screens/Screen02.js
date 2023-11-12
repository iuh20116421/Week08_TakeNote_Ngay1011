import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,FlatList, View,Image,Pressable,TextInput, Button,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
   <View style={styles.container}>
        <Text>
            Hi
        </Text>
   </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  