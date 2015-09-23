/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Login = require('./login');
var {
  Component,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

class GithubBrowser extends Component{
  constructor() {
    super();
    this.state = { isLoggedIn: false }
  }
  render() {
    if (this.state.isLoggedIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome!</Text>
        </View>
      );
    } else {
      return (
       <Login onLogin={this.onLogin.bind(this)} />
      );
    }
  }
  onLogin() {
    this.setState({isLoggedIn: true});
  }
};

var styles = StyleSheet.create({
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

AppRegistry.registerComponent('GithubBrowser', () => GithubBrowser);
