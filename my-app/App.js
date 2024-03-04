import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>Get Ready</Text>
      <StatusBar style="auto" />
      <Image
        style={{ width: 184, height: 184 }}
        source={require('./assets/space_squirrel_fotographer.png')} />
      <Button title='go' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    fontColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
