import { ScrollView, StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import CounterLocker from '@/components/counter-locker';
import { Image } from 'expo-image';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Counter Locker Demo</ThemedText>
      </ThemedView>

      <ThemedView style={styles.description}>
        <ThemedText type="subtitle">State & Props Example</ThemedText>
        <ThemedText>
          This component demonstrates React state management with useState hook. The count state is
          managed internally and updated through button handlers.
        </ThemedText>
      </ThemedView>

      <CounterLocker />

      <ThemedView style={styles.explanation}>
        <ThemedText type="subtitle">How it works:</ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">useState</ThemedText> manages the count state
        </ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">Add Count</ThemedText> increments the counter
        </ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">Minus Count</ThemedText> decrements the counter
        </ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold">Reset Count</ThemedText> sets counter back to 0
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  description: {
    gap: 8,
    marginBottom: 24,
    padding: 12,
    borderRadius: 8,
  },
  explanation: {
    gap: 8,
    marginTop: 24,
    padding: 12,
    borderRadius: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
