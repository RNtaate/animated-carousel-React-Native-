import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native';

import SecondImageCard from './SecondImageCard';
import images from '../../services/ImagesList';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')
const ITEM_SIZE = screenWidth * 0.72

const SecondCarousel = () => {
  return (
    <View style={styles.container} >
      <FlatList
        data={images}
        keyExtractor={(item) => item.movie}
        renderItem={({item}) => {
          return (
            <View style={styles.listItemHolder} >
              <SecondImageCard movie={item} />
            </View>
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_SIZE}
        decelerationRate={0}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#ddd"
  },
  listItemHolder: {
    width: ITEM_SIZE,
    padding: 20,
    justifyContent: 'flex-end',
  }
})

export default SecondCarousel;
