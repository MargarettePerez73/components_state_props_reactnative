import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { ThemedView } from './themed-view';
import { ThemedText } from './themed-text';

export default function CounterLocker() {
  const [count, setCount] = useState(0);

  const handleAdd = () => setCount(count + 1);
  const handleMinus = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Counter Locker
      </ThemedText>

      <View style={styles.displayBox}>
        <ThemedText type="subtitle">Count:</ThemedText>
        <ThemedText type="title" style={styles.countDisplay}>
          {count}
        </ThemedText>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.addButton]} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add Count</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.minusButton]} onPress={handleMinus}>
          <Text style={styles.buttonText}>Minus Count</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.resetButton]} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset Count</Text>
        </Pressable>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 12,
    gap: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  displayBox: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  countDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  buttonContainer: {
    gap: 12,
    width: '100%',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: '#34C759',
  },
  minusButton: {
    backgroundColor: '#FF3B30',
  },
  resetButton: {
    backgroundColor: '#5856D6',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
