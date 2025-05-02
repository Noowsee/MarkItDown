import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TodoItem({ item, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <Button title="Delete" onPress={() => onDelete(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  text: {
    fontSize: 16,
  },
});
