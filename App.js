import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CarouselTabs from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <CarouselTabs />
    </NavigationContainer>
  )
}

