import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, Card } from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayMedium">Welcome, user</Text>
      <Card>
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
            <Card.Content>
              <Text variant="titleLarge">Card title</Text>
              <Text variant="bodyMedium">Card content</Text>
            </Card.Content>
      </Card>
    </View>
  );
}

export default HomeScreen;