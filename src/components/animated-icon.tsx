import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

export default function AnimatedIcon() {
  return (
    <Image
      source={require("../../assets/images/expo-logo.png")}
      style={styles.image}
      contentFit="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});