import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now().toString(), text }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <AddTodo onAdd={addTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem item={item} onDelete={deleteTodo} />
        )}
      />
      <Text style={styles.totalTasks}>Antall oppgaver: {todos.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  totalTasks: {
    justifyContent: "center",
  },
});
