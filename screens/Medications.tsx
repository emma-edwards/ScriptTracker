import * as React from 'react';
import { useContext, useCallback } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, Button, Card, PaperProvider, Modal, Portal } from 'react-native-paper';
import { AddMedicationPortal } from './AddMedicationPortal';
import { MenuContext } from '../context/menu-provider';

import AddMedication from "./AddMedication.tsx";

const mockMedications = [
  {
    "id": 1,
    "name": "Inderal",
    "dose": "40mg",
    "lastFilled": "2-5-23",
    "repeats": "4"
  },
  {
    "id": 2,
    "name": "Inderal",
    "dose": "40mg",
    "lastFilled": "2-5-23",
    "repeats": "4"
  },
  {
    "id": 3,
    "name": "Inderal",
    "dose": "40mg",
    "lastFilled": "2-5-23",
    "repeats": "4"
  }
]

const Medications = ({navigation}) => {
  const { addPortalDialogVisible, handleShow, handleHideAll } = useContext(MenuContext);
  const [medications, setMedications] = React.useState(mockMedications);

  useFocusEffect(
    useCallback(() => {
      return () => {
        if (addPortalDialogVisible) {
          handleHideAll();
        }
      };
    }, [handleHideAll, addPortalDialogVisible])
  );

  const onButtonPress = useCallback(() => {
    handleShow(
      {dialogType: "addPortal"}
    )
  }, {handleShow});

  return (
    <>
      {addPortalDialogVisible && (
        <Portal.Host>
          <JoinTeamPortal />
        </Portal.Host>
      )}
      {addPortalDialogVisible ? undefined : (
        <>
          {medications.map((medication) => (
            <Card>
              <Card.Title title={medication.name} subtitle={medication.dose} />
                <Card.Content>
                  <Text variant="bodyMedium">{medication.lastFilled}</Text>
                  <Text variant="bodyMedium">{medication.repeats}</Text>
                </Card.Content>
            </Card>
          ))}
          <Button mode="contained" onPress={onButtonPress}>
            Join Team
          </Button>
        </>
      )}
    </>
    /* <PaperProvider>
         *//* <Portal>
          <Modal visible={addVisible} onDismiss={hideAddMedications} contentContainerStyle={containerStyle} >
            <AddMedication submitMedication={addMedication} />
          </Modal>
        </Portal> *//*
        <Text variant="displayMedium">Current Medications</Text>
        <Button mode="contained" onPress={onButtonPress}>
          Add
        </Button>
        {medications.map((medication) => (
          <Card>
            <Card.Title title={medication.name} subtitle={medication.dose} />
              <Card.Content>
                <Text variant="bodyMedium">{medication.lastFilled}</Text>
                <Text variant="bodyMedium">{medication.repeats}</Text>
              </Card.Content>
          </Card>
        ))}
    </PaperProvider> */
  );
}

export default Medications;