import 'react-native-gesture-handler';
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SideMenu from './components/SideMenu';
import Leaderboard from './components/leaderboard';
import ReferralProgram from './components/Referral';
import WhitePaperPage from './components/WP';
import Notifications from './components/Notifications';
import RubyCoinView from './components/Info';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Drawer" component={SideMenu} />
          <Stack.Screen name="leaderboard" component={Leaderboard} />
          <Stack.Screen name="Refferal Program" component={ReferralProgram} />
          <Stack.Screen name="White Paper" component={WhitePaperPage} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="RubyInfo" component={RubyCoinView} />
          <Stack.Screen name="My Wallet" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
