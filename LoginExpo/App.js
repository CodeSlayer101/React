import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
import Login from './src/components/Login/Login'
import Register from './src/components/Register/Register'
// type Props = {};
export default class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});