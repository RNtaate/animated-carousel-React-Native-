import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FourthCarouselScreen from '../../screens/FourthCarouselScreen';
import ParallaxCarouselScreen from '../../screens/ParallaxCarouselScreen';

const Drawer = createDrawerNavigator();

const MoreCarouselsNavigator = () => {
  return(
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "orange",
        drawerStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        }
      }}
      defaultStatus="open"
    >
      <Drawer.Screen name="Carousel 4" component={FourthCarouselScreen} />
      <Drawer.Screen name="Parallax" component={ParallaxCarouselScreen} />
    </Drawer.Navigator>
  )
}

export default MoreCarouselsNavigator;
