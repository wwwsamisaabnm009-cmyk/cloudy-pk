import { ThemedView } from '@/components/themed-view'
import { ThemedText } from '@/components/themed-text'

export default function ProfileScreen() {
  return (
    <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <ThemedText type="title">My Profile</ThemedText>
      <ThemedText style={{ marginTop: 10 }}>Name: Malika</ThemedText>
      <ThemedText>Assignment 2 - MAD</ThemedText>
    </ThemedView>
  );
}