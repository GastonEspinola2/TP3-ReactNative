import { Image, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';

export default function HomeScreen() {
  const { username } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>

      <Image
        source={{ uri: 'https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif' }}
        style={styles.image}
      />

      <Text style={styles.message}>
        Estamos felices de tenerte de vuelta. Navegá por las pestañas para explorar tu aplicación.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Consejo del día 💡</Text>
        <Text style={styles.cardText}>Recordá tomar pausas mientras trabajás, ¡mejorará tu concentración!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    color: '#333',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
  },
});
