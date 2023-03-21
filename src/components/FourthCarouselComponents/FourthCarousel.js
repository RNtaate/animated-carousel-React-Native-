import React from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

import movieList from '../../services/movielist.json'
import { POSTER_LINK } from '../../services/Helpers';

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const moviesData = movieList.results;

const FourthCarousel = () => {
  return (
    <View style={styles.wrappingContainer} >
      <FlatList 
        data={moviesData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={styles.imageContainer} >
              <Image source={{uri: `${POSTER_LINK}${item.poster_path}`}} resizeMode="cover" style={styles.upperImage} />
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
  },
  imageContainer: {
    width: screenWidth,
    height: screenHeight,
  },
  upperImage: {
    width: "100%",
    height: "100%"
  }
})

export default FourthCarousel;
