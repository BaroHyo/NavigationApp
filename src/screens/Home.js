import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function Home() {
  const navigation = useNavigation();
  const isDrawerOpen = useDrawerStatus();
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Home</Text>
      {isDrawerOpen === 'open' ? (
        <Text style={globalStyles.title}>Open</Text>
      ) : (
        <Text style={globalStyles.title}>Close</Text>
      )}

      <Button
        onPress={() => navigation.navigate('Settings')}
        title="go to settings"
      />
      <Button onPress={() => navigation.openDrawer()} title="open drawer" />
      <Button onPress={() => navigation.toggleDrawer()} title="open drawer" />
    </View>
  );
}
