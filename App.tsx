import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Screens/chat";
import History from "./Screens/history";
import Settings from "./Screens/settings";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen
          name="History"
          component={History}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerShown: true, headerTitleAlign: "center" }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}
