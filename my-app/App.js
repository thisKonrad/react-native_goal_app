import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable, TextInput, FlatList } from 'react-native';

export default function App() {

  const [input, setInput] = useState('');
  const [goal, setGoals] = useState([]);

  function handleInput(e) {
    setInput(e)
  }
  function handleGoals() {
    setGoals((currentGoals) => [...currentGoals,
    { text: input, id: Math.random().toString() }]);
  }


  return (<>
    <View style={styles.mainWrap}>
      <View style={styles.innerWrap}>
        <Text>Whats Next ?</Text>
        <StatusBar style="auto" />
        <TextInput
          onChangeText={handleInput}
          style={styles.textinput}
          placeholder='your input goal' />
        <Pressable
          onPress={handleGoals}
          style={styles.button}>
          <Text>GO!</Text>
        </Pressable>
      </View>
      <View style={styles.goalWrap}>
        {/*   <ScrollView alwaysBounceVertical={false}>
          {goal.map((text, index) => <View key={index} style={styles.goals}><Text>{text}</Text></View>)}
        </ScrollView> */}
        <FlatList
          data={goal}
          renderItem={(itemData) => {
            return <View
              style={styles.goals}>
              <Text>{itemData.item.text}</Text></View>
          }
          }
          keyExtractor={(item) => { return item.id }}
          alwaysBounceVertical={false} />
      </View>
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flex: 4,
  },
  goals: {
    margin: 10,
    padding: 5,
    backgroundColor: 'violet',
    fontColor: 'white',
    width: 332,
  },
  button: {
    margin: 10,
    padding: 10,
    width: 56,
    borderRadius: 50,
    backgroundColor: 'violet',
  },
  textinput: {
    backgroundColor: 'gainsboro',
    padding: 12,
    margin: 12,
  }
});
