import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';

import star from '../../../assets/star';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const SecondImageCard = ({movie}) => {

  const stars = new Array(Math.ceil(Math.random() * 5)).fill('stars');
  const genres = ['Action', "Adventure", "Comedy", "Thriller", "Sci-fi", "Horror"]

  return (
    <View style={styles.cardContainer} >
      <View style={styles.cardImageHolder}>
        <Image source={movie.posterPath} resizeMode="cover" style={styles.cardImage} />
      </View>
      <View style={styles.cardDetails} >
        <Text style={styles.cardHeading} numberOfLines={1} >{movie.name}</Text>
        <Text style={styles.cardDesc} numberOfLines={1} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, minus!</Text>        
        <View style={styles.starsContainer} >
          {stars.map((_, index) => {
            return(
              <SvgXml key={index} xml={star} width={20} height={20} />
            )
          })}
          <Text style={styles.ratingText} > {stars.length} / 5 </Text>
        </View>
        <View style={styles.genreView} >
          {genres.map((genre, index) => {
            return (
              <Text key={index} style={styles.genreText} >{genre}</Text>
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: (screenWidth * 0.5),
    height: (screenHeight / 2),
    overflow: 'hidden',
    borderWidth: 10,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 30
  },
  cardImageHolder: {
    width: "100%",
    height: "75%",
    overflow: 'hidden',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  cardDetails: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  starsContainer: {
    flexDirection: "row",
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '100'
  },
  genreView: {
    width: "100%",
    paddingVertical: 5,
    flexDirection: "row",
    overflow: "hidden"
  },
  genreText: {
    backgroundColor: "#bbb",
    color: "white",
    fontSize: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginRight: 10,
    textAlign: "center"
  },
  cardDesc: {
    fontSize: 11,
    fontWeight: '100',
    letterSpacing: 0.4,
    lineHeight: 17,
  }
})

export default SecondImageCard;
