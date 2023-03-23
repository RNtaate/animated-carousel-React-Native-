import React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FourthCarouselScreen from '../../screens/FourthCarouselScreen';
import ParallaxCarouselScreen from '../../screens/ParallaxCarouselScreen';

const Drawer = createDrawerNavigator();

const drawerScreens = [
  {name: "Carousel 4", component: FourthCarouselScreen},
  {name: "Parallax", component: ParallaxCarouselScreen}
]

const MoreCarouselsNavigator = () => {
  return(
    <Drawer.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackground: () => {
          return (
            <View style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0.3)"}} ></View>
          )
        },
        headerTintColor: "white",
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "orange",
        drawerStyle: {
          backgroundColor: "rgba(0, 0, 0, 0.7)"
        },
      }}
    >

      {drawerScreens.map(screen => {
        return(
          <Drawer.Screen name={screen.name} component={screen.component}
            options={{
              drawerIcon: ({focused, size, color}) => {
                return (
                  <MaterialCommunityIcons name={focused? 'view-carousel' : 'view-carousel-outline'} size={size} color={color} />
                )
              }
            }}
          />          
        )
      })}
      
    </Drawer.Navigator>
  )
}

export default MoreCarouselsNavigator;
