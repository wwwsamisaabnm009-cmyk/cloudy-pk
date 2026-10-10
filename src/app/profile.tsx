import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">My Profile 👤</ThemedText>

      <ThemedText type="subtitle" style={styles.subtitle}>
        Welcome to Our Restaurant
      </ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText type="default">Customer Information</ThemedText>
        <ThemedText>Name: Restaurant Customer</ThemedText>
        <ThemedText>Location: Lahore, Pakistan</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText type="default">My Preferences</ThemedText>
        <ThemedText>Favorite Food: Chicken Biryani</ThemedText>
        <ThemedText>Favorite Category: Fast Food</ThemedText>
      </ThemedView>

      <ThemedText style={styles.footer}>
        Thank you for visiting our restaurant!
      </ThemedText>
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
  footer: {
    textAlign: 'center',
    marginTop: 8,
  },
});