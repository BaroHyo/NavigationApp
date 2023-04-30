import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import TopTab from '../navigation/TopTab';
import Profile from '../screens/Profile';

import { Colors } from '../constants/colors';
import { useNavigation } from '@react-navigation/native';

const MyTab = createBottomTabNavigator();

export default function BottomTab() {
  const navigation = useNavigation();

  return (
    <MyTab.Navigator
      initialRouteName="TopTab"
      screenOptions={{
        headerTitleAlign: 'center',
        tabBarActiveTintColor: Colors.secondary,
      }}
    >
      <MyTab.Screen
        name="TopTab"
        component={TopTab}
        options={{
          headerLeft: ({}) => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <FontAwesome
                name="align-left"
                style={{ marginLeft: 15 }}
                size={28}
                color={Colors.secondary}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={30} color={color} />
          ),
        }}
      />
      <MyTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: 'green', color: Colors.ligth },
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </MyTab.Navigator>
  );
}
