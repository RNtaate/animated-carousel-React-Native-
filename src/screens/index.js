import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FirstCarouselScreen from './FirstCarouselScreen';
import SecondCarouselScreen from './SecondCarouselScreen';

const Tab = createBottomTabNavigator();

const CarouselTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={
        { 
          headerShown: false,
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "white",
          tabBarStyle: {
            height: 60,
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            paddingBottom: 5,
            position: 'absolute',
            borderTopWidth: 0,
            elevation: 0
          }
        }
      }
    >
      <Tab.Screen name='Carousel 1' component={FirstCarouselScreen} />
      <Tab.Screen name="Carousel 2" component={SecondCarouselScreen} />
    </Tab.Navigator>
  )
}

export default CarouselTabs;