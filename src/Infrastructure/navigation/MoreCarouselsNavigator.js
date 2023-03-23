import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const Home = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}} >
      <Text>Home Screen</Text>
    </View>
  )
}

const Notifications = () => {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}} >
      <Text>Notifications Screen</Text>
    </View>
  )
}

const MoreCarouselsNavigator = () => {
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  )
}

export default MoreCarouselsNavigator;
