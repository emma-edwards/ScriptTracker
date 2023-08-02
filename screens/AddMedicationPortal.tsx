/* import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button } from 'react-native-paper';

function AddMedication(props) {
  const [medication, setMedication] = React.useState({"name": "",
                                                "dose": "",
                                                "lastFilled": "",
                                                "repeats": ""});

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text variant="displayMedium">Add Medication</Text>
      <Button variant="contained" onPress={props.submitMedication()}>
        Add
      </Button>
    </View>
  );
}

export default AddMedication; */


import { MenuContext } from '../context/menu-provider';
import { useCallback, useContext, useState } from 'react';
import { View } from 'react-native';
import {
  Button,
  Dialog,
  Portal,
  Provider,
  TextInput,
} from 'react-native-paper';

export const AddMedicationPortal = () => {
  const { handleHide, addPortalDialogVisible } = useContext(MenuContext);

  const [input, setInput] = useState('');

  const onChangeText = useCallback((input) => {
    setInput(input);
  }, []);

  const inviteCodeTextInputChangeText = useCallback(
    (input) => onChangeText(input.toUpperCase()),
    [onChangeText]
  );

  const onDialogDismiss = useCallback(() => {
    handleHide({
      dialogType: 'addPortal',
    });
  }, [handleHide]);

  return (
    <Provider>
      <Portal>
        <Dialog
          visible={addPortalDialogVisible}
          onDismiss={onDialogDismiss}
          style={{
            position: 'absolute',
            top: '10%',
            left: 0,
            right: 0,
          }}>
          <Dialog.Title>Invite Code</Dialog.Title>
          <Dialog.Content>
            <TextInput
              maxLength={6}
              autoCapitalize="characters"
              placeholder="Enter Invite Code"
              onChangeText={inviteCodeTextInputChangeText}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <View style={{ flexDirection: 'row' }}>
              <Button mode="elevated" onPress={onDialogDismiss}>
                Join Team
              </Button>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Button mode="elevated" onPress={onDialogDismiss}>
                Cancel
              </Button>
            </View>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
};
