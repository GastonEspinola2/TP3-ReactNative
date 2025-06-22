import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
      <Tabs.Screen name="settings" options={{ title: 'Ajustes' }} />
      <Tabs.Screen name="calculator" options={{ title: 'Calculadora' }} />
      <Tabs.Screen name="products" options={{ title: 'Productos' }} />
    </Tabs>
  );
}
