import React from 'react';
import { View, Text, Dimensions, Image, FlatList, StyleSheet } from 'react-native';
import unsplash from '../../services/unsplash_images.json';

const unsplashImages = unsplash.results;
const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const ParallaxCarousel = () => {
  return (
    <View style={styles.wrappingContainer} >
      <FlatList
        data={unsplashImages}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return(
            <View style={styles.boundingView} >
              <View style={styles.imageContainer}>
                <Image source={{uri: item.image}} resizeMode="cover" style={styles.carouselImage} />
              </View>
            </View>
          )
        }}
        pagingEnabled
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrappingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee"
  },
  boundingView: {
    width: screenWidth,
    height: screenHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.4,
    borderWidth: 10,
    borderColor: "white",
    elevation: 15
  },
  carouselImage: {
    width: "100%",
    height: "100%"
  }
})

export default ParallaxCarousel;
