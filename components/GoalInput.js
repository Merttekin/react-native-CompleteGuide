import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.input}
                    value={enteredGoal}
                    onChangeText={goalInputHandler}
                />
                <Button title="ADD" onPress={addGoalHandler} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 40
    },
    input: {
        width: '80%',
        padding: 10
    }
})

export default GoalInput;