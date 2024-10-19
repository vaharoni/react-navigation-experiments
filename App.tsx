import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/home';
import { DetailsNavScreen } from './screens/details-nav';
import { CreatePostScreen } from './screens/create-post';
import { BasicScreen } from './screens/basic';
import { StoreScreen } from './screens/store';
import { DetailsPushScreen } from './screens/details-push';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home' 
        // Turn this line on / off
        screenOptions={{ freezeOnBlur: true }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview'}} />
        <Stack.Screen name="DetailsNav" component={DetailsNavScreen} />
        <Stack.Screen name="DetailsPush" component={DetailsPushScreen} />
        <Stack.Screen name="Basic" component={BasicScreen} />
        <Stack.Screen name="Store" component={StoreScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
