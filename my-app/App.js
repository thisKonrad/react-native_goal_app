import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable, TextInput } from 'react-native';

export default function App() {
  return (<>
    <View style={styles.mainWrap}>
      <View style={styles.innerWrap}>
        <Text>Whats Next ?</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.textinput}
          placeholder='your input goal' />
        <Pressable style={styles.button}>
          <Text>GO!</Text>
        </Pressable>
      </View>
      <View style={styles.goalWrap}></View>
    </View>
  </>);
}

const styles = StyleSheet.create({
  mainWrap: {
    flex: 1,
    backgroundColor: 'lightblue',
    fontColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  innerWrap: {
    paddingTop: 25,
    borderBottom: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  goalWrap: {
    flex: 4,
  },
  button: {
    margin: 10,
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'violet',
  },
  textinput: {
    backgroundColor: 'gainsboro',
    padding: 12,
    margin: 12,
  }
});
