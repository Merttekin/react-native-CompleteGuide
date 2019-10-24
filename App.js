import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.screen}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Course Goal"
              style={styles.input}
              value={enteredGoal}
              onChangeText={goalInputHandler}
            />
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
          <View>
          <ScrollView>
              {courseGoals.map(goal => (
                <View key={goal} style={styles.listItem}>
                  <Text>{goal}</Text>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    padding: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
});