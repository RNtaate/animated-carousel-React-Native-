import React, {useRef, useState} from 'react'
import { View, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

import movieList from '../../services/movielist.json'
import { POSTER_LINK } from '../../services/Helpers';

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const moviesData = movieList.results;
const ITEM_WIDTH = 100
const ITEM_HEIGHT = 100
const ITEM_WIDTH_MULTIPLIER = 1.2
const LOWER_IMAGE_CONTAINER_WIDTH = ITEM_WIDTH * ITEM_WIDTH_MULTIPLIER;

const FourthCarousel = () => {

  const upperRef = useRef();
  const lowerRef = useRef();

  const [ activeIndex, setActiveIndex ] = useState(0)

  const scrollFlatlists = (index) => {
    setActiveIndex(index);
    upperRef?.current?.scrollToOffset({
      offset: (index * screenWidth)
    })

    if( ((index * LOWER_IMAGE_CONTAINER_WIDTH) + (LOWER_IMAGE_CONTAINER_WIDTH / 2)) > (screenWidth / 2) ) {
      lowerRef?.current?.scrollToOffset({
        offset: (index * LOWER_IMAGE_CONTAINER_WIDTH + (LOWER_IMAGE_CONTAINER_WIDTH / 2)) - (screenWidth / 2),
        animated: true
      })
    } else {
      lowerRef?.current?.scrollToOffset({
        offset: 0
      })
    }
  }

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
          scrollFlatlists(Math.round(ev.nativeEvent.contentOffset.x / screenWidth))
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
          <TouchableOpacity
            onPress={() => {
              scrollFlatlists(index);
            }}
          >
            <View style={styles.lowerImageContainer} >
                <Image source={{uri: `${POSTER_LINK}${item.poster_path}`}} resizeMode="cover" style={[styles.lowerImage, {borderColor: index === activeIndex ? "white" : "#888"}]} />
            </View>
          </TouchableOpacity>
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
    width: LOWER_IMAGE_CONTAINER_WIDTH,
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
