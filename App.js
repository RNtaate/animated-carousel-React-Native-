import React, { useRef } from 'react';
import { StyleSheet, View, FlatList, Dimensions, Image, Animated } from 'react-native';

import ImageCard from './src/components/ImageCard';
import images from './src/services/ImagesList'

const { width: screenWidth, height: screenHeight} = Dimensions.get('screen'); 

export default function App() {

  const scrollX = useRef(new Animated.Value(0)).current

  return (
    <View style={styles.container}>

      <View style={StyleSheet.absoluteFillObject} >

        {/* Add the background images on top of each other and set them postion absolute using the StyleSheet.absouteFillObject */}

        {images.map((image, index) => {
          
          const inputRange = [
            (index - 1) * screenWidth,
            index * screenWidth,
            (index + 1) * screenWidth
          ]

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0]
          })

          return (
            <Animated.Image source={image.posterPath} key={image.movie} resizeMode="cover" blurRadius={20} style={[StyleSheet.absoluteFillObject, { width: screenWidth, height: screenHeight, opacity }]} />
          )
        }) }
      </View>

      <Animated.FlatList 
        data={images}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          { useNativeDriver: true }
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.movie}
        renderItem={({item}) => {
          return (
            <View style={styles.imageWrapper} >
              <ImageCard path={item.posterPath} />
            </View>
          )
        }}
        pagingEnabled
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: screenWidth,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
