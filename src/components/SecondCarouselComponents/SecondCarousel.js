import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import SecondImageCard from './SecondImageCard';

const SecondCarousel = () => {
  return (
    <View style={styles.container} >
      <SecondImageCard />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ddd"
  }
})

export default SecondCarousel;
