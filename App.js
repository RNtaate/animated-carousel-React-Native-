import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageCard from './src/components/ImageCard';

const imagePath = require('./assets/avengers_ultron.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <ImageCard path={imagePath} />
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
