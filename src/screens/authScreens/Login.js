import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import { globalStyles } from '../../styles/global';
import MyInput from '../../components/MyInput';
import MyButton from '../../components/MyButton';
import { signIn } from '../../features/auth/auth';

export default function Login({ navigation }) {
  const [token, setToken] = React.useState('');

  const dispatch = useDispatch();

  async function save(value) {
    try {
      await AsyncStorage.setItem('@token', value);
      dispatch(signIn(value));
      console.log('data save');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>Login</Text>
      <MyInput label={'Email'} value={token} onChangeText={setToken} />
      <MyInput label={'Password'} secureTextEntry />
      <MyButton title={'Sign In'} onPress={() => save(token)} />
      <MyButton
        title={'Sign Up'}
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
}
