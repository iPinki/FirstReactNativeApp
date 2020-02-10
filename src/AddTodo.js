import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export const AddTodo = ({ onSubmit }) => {
const [value, setValue] = useState('');

    const pressHandler = () => {
        if(value.trim()){
            onSubmit(value);
            setValue('');       
        }
        else{
           Alert.alert('Todo name cannot be empty!');
        }
    }

    return(
      <View style={styles.block}>
        <TextInput
         style={styles.input}
         onChangeText={setValue}
         value={value}
         placeholder='Enter todo name...'
         autoCorrect={false} //remove automatic word correction
        />
        <Button
         title='Add Todo'
         color='#f39c12'
         onPress={pressHandler}
        />
      </View>
    )
};

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
       width: '70%',
       padding: 10,
       borderStyle: 'solid',
       borderBottomWidth: 2,
       borderBottomColor: '#f39c12'
    },
})

