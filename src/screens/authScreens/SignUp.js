import React from 'react';
import { View, Text } from 'react-native';

import { globalStyles } from '../../styles/global';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';

export default function SignUp({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={'Email'} />
      <MyInput label={'Password'} secureTextEntry />
      <MyButton title={'Sign Up'} />
      <MyButton title={'Login'} onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
