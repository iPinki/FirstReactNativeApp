import React, { useState }                              from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import { Navbar }    from './src/Navbar';
import { AddTodo }   from './src/AddTodo';
import { Todo }      from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo = {
    //   id: Date.now().toString(),
    //   titile: title,
    // };

    // setTodos(todos.concat([newTodo]));

    // setTodos((prevTodos) => {
    //   return[
    //     ...prevTodos,
    //     newTodo
    //   ]
    // });

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
       <Navbar title='iPinki Todo App '/>
       <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        {/* <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({item}) =>  <Todo item={todo} /> } 
        /> */}

        <ScrollView>
          {todos.map(todo => (
            <Todo todo={todo} key={todo.id} onRemove={removeTodo}/>
          ) )}
        </ScrollView>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
