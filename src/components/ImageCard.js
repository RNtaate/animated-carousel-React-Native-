import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const { width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const ImageCard = () => {
  return (
    <View style={styles.imageContainer} >
      <Text>Image Card</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: screenWidth * (2 / 3),
    height: screenHeight / 2,
    backgroundColor: "gray",
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20
  }
})


export default ImageCard;