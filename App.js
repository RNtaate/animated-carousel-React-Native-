import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import ImageCard from './src/components/ImageCard';

const images = [
  {
    movie: "avengers",
    posterPath: require("./assets/avengers_original.jpg")
  },
  {
    movie: "ultron",
    posterPath: require("./assets/avengers_ultron.jpg")
  },
  {
    movie: "infinity",
    posterPath: require("./assets/avengers_infinity.jpg")
  },
  {
    movie: "endgame",
    posterPath: require("./assets/avengers_endgame.jpg")
  },
]

export default function App() {
  return (
    <View style={styles.container}>
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
});
