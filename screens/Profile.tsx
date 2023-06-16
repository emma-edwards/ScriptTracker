import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native-paper'

function Profile({navigation}) {
  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("Settings")} title="Settings">
          Settings
        </Button>
      ),
    });
    }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayMedium">Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

export default Profile;