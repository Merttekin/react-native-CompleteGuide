import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <ScrollView>
      <View>
        <View style={styles.screen}>
          <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
          <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} />
          <View>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={courseGoals}
              renderItem={itemData => (
                <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />
              )}
            />
            {/* {courseGoals.map(goal => (
                <View key={goal} style={styles.listItem}>
                  <Text>{goal}</Text>
                </View>
              ))} */}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 30
  }
});