import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Settings() {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Settings</Text>
    </View>
  );
}
