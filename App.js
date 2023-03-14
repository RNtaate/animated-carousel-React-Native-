import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

// import FirstCarousel from './src/containers/FirstCarousel';
import CarouselTabs from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <CarouselTabs />
    </NavigationContainer>
  )
}

