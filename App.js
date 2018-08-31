import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator,} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <LoginScreen />
  }
}

class LoginScreen extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 30, flex: 3, textAlignVertical: "center"}}>Sign Up</Text>
        <View style={styles.textfieldStackview}>
          <TextInput placeholder='clientID' style={styles.textfields}/>
          <TextInput placeholder='username' style={styles.textfields}/>
          <TextInput placeholder='password' style={styles.textfields}/>
        </View>
        <Text style={{flex: 1}}>Don't have an account? Sign up here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-around",
  },
  textfieldStackview: {
    justifyContent: "flex-start",
    flex:4,
  },
  textfields: {
    width: 120, 
    textAlign: "center",
  },
});
