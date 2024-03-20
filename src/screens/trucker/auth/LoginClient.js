import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Login from './Login';

const LoginClient = ({navigation}) => {
  return (
    <View className='flex-1 bg-white items-center justify-center'>
      <Login navigation={navigation} />
      <StatusBar style="auto" />
    </View>
  )
}

export default LoginClient