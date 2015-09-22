'use strict';

var React = require('react-native');

var {
  Text,
  StyleSheet,
  View
} = React;

class Login extends React.Component{
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1
  }
});

module.exports = Login;
