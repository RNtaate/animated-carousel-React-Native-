import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions, Animated, Image, Platform } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { Svg, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import SecondImageCard from '../SecondCarouselComponents/SecondImageCard';
import images from '../../services/ImagesList';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')
const ITEM_SIZE = screenWidth * 0.60
const SPACER_ITEM_SIZE = (screenWidth - ITEM_SIZE) / 2
const BACKDROP_HEIGHT = screenHeight * 0.6

const moviesData = [{movie: 'left_spacer'}, ...images, {movie: 'right_spacer'}]

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const ThirdCarousel = () => {

  const scrollX = useRef( new Animated.Value(0)).current
  return (
    <View style={styles.container} >
      <View style={styles.backdropContainer}>

        {
          moviesData.map((singleMovie, index) => {
            if(!singleMovie.posterPath) {
              return null
            }

            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE
            ]

            const translateX = scrollX.interpolate({
              inputRange,
              outputRange: [-screenWidth, 0, screenWidth]
            })

            if(singleMovie.posterPath) {
              return (
                <MaskedView
                  style={{position: 'absolute', width: "100%", height: "100%", top: 0, left: 0}}
                  key={singleMovie.movie}
                  androidRenderingMode={Platform.OS === 'android' ? 'software' : 'hardware'} //This is necessary to animate the "maskElement" on Android
                  maskElement={
                    <AnimatedSvg
                      width={screenWidth}
                      height={screenHeight}
                      viewBox={`0 0 ${screenWidth} ${screenHeight}`}
                      style={{transform: [{translateX}]}}
                    >
                      <Rect x="0" y="0" width={screenWidth} height={screenHeight} fill="red" />
                    </AnimatedSvg>
                  }
                >
                  <Image source={singleMovie.backdrop} resizeMode="cover" style={{width: "100%", height: "100%"}} />
                </MaskedView>
              )
            }
          })
        }

        <LinearGradient colors={["transparent", "white"]} style={{position: 'absolute', width: "100%", height: "100%", bottom: 0}} />
      </View>


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
  backdropContainer: {
    position: "absolute",
    width: screenWidth,
    top: 0,
    height: BACKDROP_HEIGHT,
  },
  backdropImage: {
    width: "100%",
    height: "100%"
  }
})

export default ThirdCarousel;
