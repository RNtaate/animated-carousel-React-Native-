import React from 'react';
import {View, Text, StyleSheet, Dimensions, ImageBackground} from 'react-native';

const { width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const ImageCard = ({path}) => {
  return (
    <View style={styles.imageContainer} >
      <ImageBackground source={path} resizeMode="cover" style={styles.imageCardImage} ></ImageBackground>
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
    borderColor: 'white',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  imageCardImage: {
    width: '100%',
    height: '100%',
  }
})


export default ImageCard;