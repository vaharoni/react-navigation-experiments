import { useDebug } from "@/lib/use-debug";
import { useState } from "react";
import { Button, View, Text } from "react-native";

export function BasicScreen({ navigation }: any) {
  const [random] = useState(() => Math.floor(Math.random() * 1000));
  useDebug('BASIC', { params: random });

  console.log('R'.repeat(50));
  console.log(`Rendered BASIC: ${random}`);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Basic Screen ${random}</Text>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Basic')}
      />
      <Button
        title="Push"
        onPress={() => navigation.push('Basic')}
      />
      <Button title="BACK" onPress={() => navigation.goBack()}/>
      <Button
        title="Go home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}