import { Image, StyleSheet, View } from 'react-native';

type AnimatedIconProps = {
  animate?: boolean;
};

export function AnimatedIcon({ animate = false }: AnimatedIconProps) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icon.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});