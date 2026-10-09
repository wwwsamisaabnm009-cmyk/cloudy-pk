import { ThemedView } from '@/components/themed-view';
import { ThemedText } from '@/components/themed-text';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <Image source={require('@/assets/images/icon.png')} style={styles.logo} />
      <ThemedText type="title">My Restaurant 🍽️</ThemedText>
      <ThemedText type="subtitle" style={styles.sub}>Best Food in Lahore</ThemedText>
      
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">🍛 Chicken Biryani - Rs. 450</ThemedText>
      </ThemedView>
      <ThemedView style={styles.card}>
        <ThemedText type="defaultSemiBold">🍔 Zinger Burger - Rs. 350</ThemedText>
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
  container:{flex:1, alignItems:'center', justifyContent:'center', padding:20, gap:10},
  logo:{width:100, height:100, borderRadius:20},
  sub:{opacity:0.7},
  card:{width:'100%', padding:15, borderRadius:12, backgroundColor:'#eee'},
  btn:{backgroundColor:'#ff6347', paddingVertical:12, paddingHorizontal:30, borderRadius:10, marginTop:20},
  btnText:{color:'#fff', fontWeight:'bold'}
})