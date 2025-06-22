import { FlatList, Text, View } from 'react-native';

const productos = [
  { id: '1', nombre: 'Carne' },
  { id: '2', nombre: 'Cebolla' },
  { id: '3', nombre: 'Volkswagen' },
];

export default function ProductsScreen() {
  return (
    <FlatList
      data={productos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item.nombre}</Text>
        </View>
      )}
    />
  );
}
