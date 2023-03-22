import React, {useRef, useState} from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image } from 'react-native';

import movieList from '../../services/movielist.json'
import { POSTER_LINK } from '../../services/Helpers';

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const moviesData = movieList.results;
const ITEM_WIDTH = 100
const ITEM_HEIGHT = 100

const FourthCarousel = () => {

  const upperRef = useRef();
  const lowerRef = useRef();

  const [ activeIndex, setActiveIndex ] = useState(0)

  return (
    <View style={styles.wrappingContainer} >
      <FlatList
        ref={upperRef}
        style={styles.upperList} 
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
        onMomentumScrollEnd={(ev) => {
          setActiveIndex(Math.round(ev.nativeEvent.contentOffset.x / screenWidth))
        }}
      />

      <View style={styles.viewCover} ></View>

      <FlatList style={styles.lowerList}
        ref={lowerRef}
        data={moviesData}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return(
          <View style={styles.lowerImageContainer} >
              <Image source={{uri: `${POSTER_LINK}${item.poster_path}`}} resizeMode="cover" style={[styles.lowerImage, {borderColor: index === activeIndex ? "white" : "#888"}]} />
          </View>
          )
        }}
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
  viewCover: {
    position: "absolute",
    width: screenWidth,
    height: screenHeight,
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    pointerEvents: "none"
  },
  lowerList: {
    position: 'absolute',
    bottom: ITEM_HEIGHT * 0.7,
  },
  lowerImageContainer: {
    width: ITEM_WIDTH * 1.2,
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: "center",
    elevation: 20
  },
  upperImage: {
    width: "100%",
    height: "100%",
  },
  lowerImage: {
    width: ITEM_WIDTH,
    height: "100%",
    borderRadius: 20,
    borderWidth: 2,
  }
})

export default FourthCarousel;
