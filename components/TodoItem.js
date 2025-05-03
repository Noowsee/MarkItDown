import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

export default function TodoItem({ item, onToggleComplete, onDelete }) {
  const renderRightActions = () => (
    <TouchableOpacity
      onPress={() => onDelete(item.id)}
      style={styles.deleteButton}
    >
      <Text style={styles.deleteText}>Slett</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        onPress={() => onToggleComplete(item.id)}
        style={styles.item}
      >
        <View style={[styles.checkbox, item.completed && styles.checked]} />
        <Text style={[styles.text, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#888",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#4caf50",
  },
  text: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
