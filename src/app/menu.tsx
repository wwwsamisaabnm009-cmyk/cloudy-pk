import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { StyleSheet } from 'react-native';

export default function Menu() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Our Menu 🍽️</ThemedText>
      <ThemedView style={styles.card}>
        <ThemedText type="default">1. Chicken Biryani - Rs. 450</ThemedText>
      </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedText type="default">2. Zinger Burger - Rs. 350</ThemedText>
      </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedText type="default">3. Chicken Karahi - Rs. 1200</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', padding:20, gap:15},
  card:{width:'100%', padding:15, borderRadius:10, backgroundColor:'#eee'}
})