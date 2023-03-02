import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Dimensions, Image } from 'react-native';
import ImageCard from './src/components/ImageCard';
import images from './src/services/ImagesList'

const { width: screenWidth, height: screenHeight} = Dimensions.get('screen'); 

export default function App() {
  return (
    <View style={styles.container}>

      <View style={StyleSheet.absoluteFillObject} >
        {images.map((image) => {
          return (
            <Image source={image.posterPath} resizeMode="cover" style={[StyleSheet.absoluteFillObject, styles.backdropImage]} />
          )
        }) }
      </View>

      <FlatList 
        data={images}
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
  backdropImage: {
    width: screenWidth,
    height: screenHeight
  }
});
