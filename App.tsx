import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Auth } from 'aws-amplify';

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  return (
      {/* <Authenticator>
        <SignOutButton />
      </Authenticator> */}

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);