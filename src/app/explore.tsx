import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore 🍽️</ThemedText>

      <ThemedText type="subtitle" style={styles.subtitle}>
        Discover Our Restaurant
      </ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="default">
          Fresh Food
        </ThemedText>
        <ThemedText>
          Enjoy freshly prepared meals every day.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="default">
          Popular Dishes
        </ThemedText>
        <ThemedText>
          Try our Chicken Biryani and Zinger Burger.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="default">
          Visit Us
        </ThemedText>
        <ThemedText>
          Discover delicious food in Lahore.
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  subtitle: {
    fontSize: 20,
    lineHeight: 28,
    textAlign: 'center',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    gap: 8,
    backgroundColor: '#f5f5f5',
  },
});