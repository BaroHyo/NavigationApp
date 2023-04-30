import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import Settings from '../screens/Settings';
import { Colors } from '../constants/colors';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

function CustomHeader({ title }) {
  return (
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: Colors.secondary,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: Colors.ligth,
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const myConfig = {
  headerShown: false,
  headerTitleAlign: 'center',
  presentation: 'modal',
  gestureEnabled: true,
  keyboardHandlingEnabled: true,
  /*header: ({ navigation, route, options, back }) => (
    <CustomHeader title={route.name} />
  ),*/
};

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={myConfig}>
      <Stack.Screen name="Root" component={BottomTab} />
      <Stack.Group screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            headerBackTitle: 'Home',
            headerBackTitleVisible: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
