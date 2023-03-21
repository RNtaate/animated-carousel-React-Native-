import React from 'react';
import { View, Dimensions, StyleSheet, Image, Animated, Platform } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { Svg, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const ITEM_SIZE = screenWidth * 0.6
const BACKDROP_HEIGHT = screenHeight * 0.6

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const Backdrop = ({scrollX, data}) => {
  return (
    <View style={styles.backdropContainer} >
      {data.map((singleMovie, index) => {
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

        return (
          <MaskedView
            style={styles.maskedView}
            key={singleMovie.movie}
            androidRenderingMode={Platform.OS === 'android' ? "software" : "hardware"}
            maskElement={
              <AnimatedSvg
                width={screenWidth}
                height={BACKDROP_HEIGHT}
                viewBox={`0 0 ${screenWidth} ${BACKDROP_HEIGHT}`}
                style={{transform: [{translateX}]}}
              >
                <Rect x="0" y="0" width={screenWidth} height={BACKDROP_HEIGHT} fill="red" />
              </AnimatedSvg>
            }
          >
            <Image source={singleMovie.backdrop} resizeMode="cover" style={styles.backdropImage} />
          </MaskedView>
        )
      })}
      <LinearGradient colors={["transparent", "white"]} style={{position: 'absolute', width: "100%", height: "100%", bottom: 0}} />
    </View>
  )
}

const styles = StyleSheet.create({
  backdropContainer: {
    position: "absolute",
    width: screenWidth,
    top: 0,
    height: BACKDROP_HEIGHT,
  },
  maskedView: {
    position: "absolute",
    width:"100%",
    height: "100%",
    top: 0,
    left: 0,
  },  
  backdropImage: {
    width: "100%",
    height: "100%"
  }
})

export default Backdrop
