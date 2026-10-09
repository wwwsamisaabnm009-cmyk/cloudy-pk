
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      
      <ThemedText type="title">My Restaurant 🍽️</ThemedText>
      <ThemedText type="subtitle" style={styles.sub}>Best Food in Lahore</ThemedText>

      <ThemedView style={styles.card}>
        <ThemedText>🍛 Chicken Biryani - Rs. 450</ThemedText>
      </ThemedView>

      <ThemedView style={styles.card}>
        <ThemedText>🍔 Zinger Burger - Rs. 350</ThemedText>
      </ThemedView>

      <Link href="/menu" asChild>
        <TouchableOpacity style={styles.btn}>
          <ThemedText style={styles.btnText}>View Full Menu</ThemedText>
        </TouchableOpacity>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, gap: 12 },
  logo: { width: 100, height: 100, borderRadius: 20 },
  sub: { opacity: 0.7 },
  card: { padding: 16, borderRadius: 12, width: '100%', backgroundColor: '#f5f5f5', marginTop: 8 },
  btn: { backgroundColor: '#000', padding: 14, borderRadius: 10, marginTop: 20, width: '100%', alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold' },
});