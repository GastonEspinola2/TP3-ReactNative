import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function CalculatorScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Número 1" keyboardType="numeric" value={a} onChangeText={setA} style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />
      <TextInput placeholder="Número 2" keyboardType="numeric" value={b} onChangeText={setB} style={{ borderWidth: 1, marginBottom: 10, padding: 10 }} />
      <Button title="Sumar" onPress={() => setResultado(Number(a) + Number(b))} />
      {resultado !== null && <Text style={{ marginTop: 20 }}>Resultado: {resultado}</Text>}
    </View>
  );
}
