import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from '@expo/vector-icons'

import FirstCarouselScreen from './FirstCarouselScreen';
import SecondCarouselScreen from './SecondCarouselScreen';
import ThirdCarouselScreen from './ThirdCarouselScreen';


const Tab = createBottomTabNavigator();

const CarouselTabs = () => {

  const createTabBarIcon = ( routeName, color ) => {
    if (routeName == "Carousel 1"){
      return (
        <Ionicons name="list" size={24} color={color} />
      )
    }else {
      return (
        <Entypo name='list' size={24} color={color} />
      )
    }
  }

  const createScreenOptions = ( {route} ) => {
    return (
      { 
        headerShown: false,
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "white",
        tabBarIcon: ({color}) => (createTabBarIcon(route.name, color)),
        tabBarStyle: {
          height: 60,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          paddingBottom: 5,
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0
        }
      }
    )
  }

  return (
    <Tab.Navigator screenOptions={ createScreenOptions }>
      <Tab.Screen name='Carousel 1' component={FirstCarouselScreen} />
      <Tab.Screen name="Carousel 2" component={SecondCarouselScreen} />
      <Tab.Screen name="Carousel 3" component={ThirdCarouselScreen} />
    </Tab.Navigator>
  )
}

export default CarouselTabs;