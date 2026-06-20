import React, { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export default function CounterLocker() {
  const [count, setCount] = useState(0);
  
  const timerRef = useRef(null);

  const handleAdd = () => setCount((prev) => prev + 1);
  const handleMinus = () => setCount((prev) => prev - 1);
  const handleReset = () => setCount(0);

  const startCounter = (action) => {
    action();

    timerRef.current = setTimeout(() => {
      timerRef.current = setInterval(() => {
        action();
      }, 100);
    }, 500);
  };

  const stopCounter = () => {
    clearTimeout(timerRef.current);
    clearInterval(timerRef.current);
  };

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
        <Pressable 
          style={[styles.button, styles.addButton]} 
          onPressIn={() => startCounter(handleAdd)}
          onPressOut={stopCounter}
        >
          <Text style={styles.buttonText}>Add Count</Text>
        </Pressable>

        <Pressable 
          style={[styles.button, styles.minusButton]} 
          onPressIn={() => startCounter(handleMinus)}
          onPressOut={stopCounter}
        >
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
    padding: 25,
    borderRadius: 18,
    gap: 20,
    alignItems: 'center',
  },
  title: {
    marginBottom: 10,
  },
  displayBox: {
    alignItems: 'center',
    gap: 8,
    paddingVertical: 30,
    paddingHorizontal: 70,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  countDisplay: {
    fontSize: 40,
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
    backgroundColor: '#6acdf7',
  },
  minusButton: {
    backgroundColor: '#FF3B30',
  },
  resetButton: {
    backgroundColor: '#251781',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
