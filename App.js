import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator,} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      enteredText: 'Your text will appear here',
    }

  }

  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput underlineColorAndroid= {'transparent'} placeholder='Place text here' 
        onChangeText={(newText) => this.setState({enteredText: newText})}/>
        <Text>{this.state.enteredText}</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
