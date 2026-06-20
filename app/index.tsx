import CounterLocker from '@/components/counter-locker';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

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
      <ThemedText type="subtitle">Margarette Perez BSIT BA - 3303</ThemedText>
      <CounterLocker />
      <ThemedView style={styles.description}>
        <ThemedText type="subtitle">Components, State and Props</ThemedText>
        <ThemedText>
          This is a simple example of a React Native app that uses components, state, and props.
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
    borderColor: '#337AB7',
    borderWidth: 2,
    gap: 8,
    marginBottom: 24,
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