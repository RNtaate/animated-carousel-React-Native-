import React from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const { width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const ImageCard = () => {
  return (
    <View style={styles.imageContainer} >
      <ImageBackground source={require('../../assets/avengers_endgame.jpg')} resizeMode="cover" style={styles.imageCardImage} ></ImageBackground>
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
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 20,
  },
  imageCardImage: {
    width: '100%',
    height: '100%',
  }
})


export default ImageCard;