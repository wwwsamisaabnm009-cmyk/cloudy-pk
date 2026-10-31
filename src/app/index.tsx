import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to My Restaurant</Text>
      <Text style={styles.subtitle}>Delicious Food - Fresh & Tasty</Text>
      
      <View style={styles.card}>
        <Text style={styles.food}>🍔 Burger - Rs. 500</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.food}>🍕 Pizza - Rs. 1200</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.food}>🍝 Pasta - Rs. 800</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', marginTop: 40 },
  subtitle: { fontSize: 16, color: 'gray', marginBottom: 20 },
  card: { padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10, marginBottom: 10 },
  food: { fontSize: 18 }
});