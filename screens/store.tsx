import { useCounter } from "@/lib/use-counter";
import { useDebug } from "@/lib/use-debug";
import { useReducer, useState } from "react";
import { Button, View, Text } from "react-native";

export function StoreScreen({ navigation }: any) {
  const counter = useCounter(selector => selector.counter);
  const { incr } = useCounter(selector => selector.actions);

  const [random] = useState(() => Math.floor(Math.random() * 1000));
  const [internal, incrInternal] = useReducer((state: number) => state + 1, 0);

  useDebug('STORE', { params: random });

  console.log('R'.repeat(50));
  console.log(`Rendered STORE: ${random}`);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Store Screen id={random} external={counter} internal={internal}</Text>
      <Button
        title="EXTERNAL"
        onPress={() => incr()}
      />
      <Button
        title="INTERNAL"
        onPress={() => incrInternal()}
      />
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Store')}
      />
      <Button
        title="Push"
        onPress={() => navigation.push('Store')}
      />
      <Button title="BACK" onPress={() => navigation.goBack()}/>
      <Button
        title="Go home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}