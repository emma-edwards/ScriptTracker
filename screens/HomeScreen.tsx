import * as React from 'react';
import { View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, Card } from 'react-native-paper';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Authenticator } from 'aws-amplify-react-native'

const userSelector = (context) => [context.user]

const SignOutButton = () => {
  const { user, signOut } = useAuthenticator(userSelector);
  return (
    <Pressable onPress={signOut} >
      <Text>Click here to sign out!</Text>
      <Authenticator usernameAttributes='email'/>
    </Pressable>
  )
};

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayMedium">Welcome, {userSelector.email}</Text>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
      </Card>
      <SignOutButton />
    </View>
  );
}

export default HomeScreen;