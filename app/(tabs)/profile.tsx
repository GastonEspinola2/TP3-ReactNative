import { StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function ProfileScreen() {
  const { username } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Nombre de usuario: {username || 'Invitado'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  name: {
    fontSize: 24,
  },
});
