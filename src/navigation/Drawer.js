import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Notifications from '../screens/Notifications';
import HomeStack from './HomeStack';
import { Colors } from '../constants/colors';

const RootDrawer = createDrawerNavigator();

export default function Drawer() {
  const { width } = useWindowDimensions();
  return (
    <RootDrawer.Navigator
      screenOptions={{
        drawerActiveTintColor: Colors.secondary,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}
    >
      <RootDrawer.Screen
        name="Stack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <RootDrawer.Screen name="Notifications" component={Notifications} />
    </RootDrawer.Navigator>
  );
}
