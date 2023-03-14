import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen')

const SecondImageCard = () => {
  return (
    <View style={styles.cardContainer} >
      <View style={styles.cardImageHolder}>
        <Image source={require("../../../assets/avengers_original.jpg")} resizeMode="cover" style={styles.cardImage} />
      </View>
      <View style={styles.cardDetails} >
        <Text style={styles.cardHeading} numberOfLines={1} >Marvel's The Avengers</Text>
        <Text style={styles.cardDesc} numberOfLines={2} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, ipsa?</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    width: (screenWidth * 0.5),
    height: (screenHeight / 2),
    overflow: 'hidden',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20
  },
  cardImageHolder: {
    width: "100%",
    height: "75%",
    overflow: 'hidden',
    borderRadius: 20
  },
  cardImage: {
    width: "100%",
    height: "100%"
  },
  cardDetails: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center'
  },
  cardHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  cardDesc: {
    fontSize: 11,
    fontWeight: '100',
    letterSpacing: 0.4,
    lineHeight: 17,
  }
})

export default SecondImageCard;
