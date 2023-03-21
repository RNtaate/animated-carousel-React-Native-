import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Animated} from 'react-native';

import SecondImageCard from '../SecondCarouselComponents/SecondImageCard';
import images from '../../services/ImagesList';
import Backdrop from './Backdrop';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')
const ITEM_SIZE = screenWidth * 0.60
const SPACER_ITEM_SIZE = (screenWidth - ITEM_SIZE) / 2

const moviesData = [{movie: 'left_spacer'}, ...images, {movie: 'right_spacer'}]

const ThirdCarousel = () => {

  const scrollX = useRef( new Animated.Value(0)).current
  return (
    <View style={styles.container} >
      <Backdrop scrollX={scrollX} data={moviesData} />

      <Animated.FlatList
        data={moviesData}
        keyExtractor={(item) => item.movie}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ]
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0]
          })

          if (!(item.posterPath)) {
            return(
              <View style={{width: SPACER_ITEM_SIZE}} />
            )
          }
          return (
            <Animated.View style={[styles.listItemHolder, {transform: [{translateY}]}]} >
              <SecondImageCard movie={item} />
            </Animated.View>
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
        style={styles.flatlist}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  flatlist: {
    paddingBottom: 20
  },
  listItemHolder: {
    width: ITEM_SIZE,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
})

export default ThirdCarousel;
