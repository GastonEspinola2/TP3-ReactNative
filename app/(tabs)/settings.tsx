import { useRouter } from 'expo-router';
import { Button, StyleSheet, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function SettingsScreen() {
  const router = useRouter();
  const { setUsername } = useAuth();

  const handleLogout = () => {
    setUsername('');
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Button title="Cerrar sesión" onPress={handleLogout} color="#d9534f" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});
