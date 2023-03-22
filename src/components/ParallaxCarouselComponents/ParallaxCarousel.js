import React, { useRef } from 'react';
import { View, Dimensions, StyleSheet, Animated } from 'react-native';
import unsplash from '../../services/unsplash_images.json';

const unsplashImages = unsplash.results;
const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

const ParallaxCarousel = () => {

  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.wrappingContainer} >
      <Animated.FlatList
        data={unsplashImages}
        keyExtractor={item => item.id.toString()}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          { useNativeDriver: true }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {

          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ]

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-screenWidth * 0.7, 0, screenWidth * 0.7]
          })

          return(
            <View style={styles.boundingView} >
              <View style={styles.imageFrame}>
                <Animated.Image source={{uri: item.image}} resizeMode="cover" style={[styles.carouselImage, {transform: [{translateX}]}]} />
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
  imageFrame: {
    width: screenWidth * 0.7,
    height: screenHeight * 0.4,
    borderWidth: 10,
    borderColor: "white",
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
    overflow: 'hidden'
  },
  carouselImage: {
    width: (screenWidth * 0.7) * 1.4,
    height: "100%"
  }
})

export default ParallaxCarousel;
