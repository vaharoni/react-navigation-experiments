import { useDebug } from "@/lib/use-debug";
import { useMemo, useState } from "react";
import { Button, View, Text } from "react-native";

export function DetailsNavScreen({route, navigation }: any) {
  const [random] = useState(() => Math.floor(Math.random() * 1000));
  useDebug('DETAILS', route);
  
  console.log('R'.repeat(50));
  console.log(`Rendered DETAILS: ${random}`);

  const id = route?.params?.id ?? 0;

  const same = useMemo(() => ({ id }), [id])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen paramId={id} random={random}</Text>
      <Button
        title="Details + 1"
        onPress={() => navigation.navigate('DetailsNav', { id: id + 1 })}
      />
      <Button
        title="Details - 1"
        onPress={() => navigation.navigate('DetailsNav', { id: id - 1 })}
      />
      <Button
        title="Details =="
        onPress={() => navigation.navigate('DetailsNav', same)}
      />
      <Button
        title="Details ø"
        onPress={() => navigation.navigate('DetailsNav')}
      />
      <Button title="BACK" onPress={() => navigation.goBack()}/>
      <Button
        title="Go home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}