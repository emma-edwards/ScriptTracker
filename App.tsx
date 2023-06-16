import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider, Button, Text as PaperText } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-ionicons'

import HomeScreen from "./screens/HomeScreen.tsx";
import Profile from "./screens/Profile.tsx";
import Settings from "./screens/Settings.tsx";
import Calendar from "./screens/Calendar.tsx";
import Medications from "./screens/Medications.tsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBar: {
    flex: 1,
    backgroundColor: '#222',
  }
})

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.TabBar}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}


function Root() {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />} >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Medications" component={Medications} />
      <Tab.Screen name="Calendar" component={Calendar} />
      <Tab.Screen name="Profile" component={Profile} options={{
                                                               headerTitle: () => <Text>Settings</Text>,
                                                               headerRight: () => (
                                                                 <Button>
                                                                   title="Settings"
                                                                   color="#fff"
                                                                 >
                                                                  Settings
                                                                 </Button>
                                                               ),
                                                             }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Root">
          <Stack.Screen name="Root" component={Root} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    );
}

export default App;