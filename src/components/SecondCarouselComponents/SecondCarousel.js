import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const SecondCarousel = () => {
  return (
    <View>
      <Text>This is the second carousel</Text>
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
