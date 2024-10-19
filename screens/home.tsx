import { useDebug } from '@/lib/use-debug';
import { Button, StyleSheet, Text, View } from 'react-native';

export function HomeScreen({ route, navigation }: any) {
  useDebug('HOME', route);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button
        title="Details: Nav"
        onPress={() => navigation.navigate('DetailsNav', { id: 1 })}
      />
      <Button
        title="Details: Push"
        onPress={() => navigation.navigate('DetailsPush', { id: 1 })}
      />
      <Button
        title="Basic"
        onPress={() => navigation.navigate('Basic')}
      />
      <Button
        title="Store"
        onPress={() => navigation.navigate('Store')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
