import React from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from '../styles/global';
import { signOut } from '../features/auth/auth';

export default function Profile() {
  const dispatch = useDispatch();

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Profile</Text>
      <Button
        title="sign out"
        onPress={async () => {
          await AsyncStorage.removeItem('@token');
          dispatch(signOut());
        }}
      />
    </View>
  );
}
