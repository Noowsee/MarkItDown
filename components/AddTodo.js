import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (text.trim()) {
      onAdd(text); // Send text to App
      setText(""); // Empty textInput
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Write your task..."
        value={text}
        onChangeText={setText}
        style={styles.inputField}
      />
      <Button onPress={handlePress} title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
  },
  inputField: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 10,
  },
});
