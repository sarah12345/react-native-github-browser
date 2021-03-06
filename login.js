'use strict';

var React = require('react-native');

var {
  ActivityIndicatorIOS,
  Component,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  View
} = React;

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = { showProgress: false, };
  }
  onLoginPressed() {
    this.setState({showProgress: true});
    var authService = require('./authService');
    authService.login({
      username: this.state.username,
      password: this.state.password
    }, (results)=> {
      this.setState(Object.assign({showProgress: false}, results));
      if (results.success && this.props.onLogin) {
        this.props.onLogin();
      }
    });
  }
  render() {
    var errorMessage = <View />;
    if (!this.state.success && this.state.badCredentials) {
       errorMessage = <Text style={styles.error}>
        Username or password was incorrect.
      </Text>;
    }
    if (!this.state.success && this.state.unknownError) {
      errorMessage = <Text style={styles.error}>
        An error occurred.
      </Text>;
    }
    return (
      <View style={styles.container}>
        <Image style={styles.logo}
          source={require('image!Octocat')} />
        <Text style={styles.heading}>
          Github Browser
        </Text>
        <TextInput
          onChangeText={(text)=> this.setState({username: text})}
          style={styles.input}
          placeholder="Github username" />
        <TextInput style={styles.input}
          onChangeText={(text)=> this.setState({password: text})}
          placeholder="Github password"
          secureTextEntry={true} />
        <TouchableHighlight
          onPress={this.onLoginPressed.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>
            Log In
          </Text>
        </TouchableHighlight>
        {errorMessage}
        <ActivityIndicatorIOS
          style={styles.spinner}
          animating={this.state.showProgress}
          size="large" />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 66,
    height: 55
  },
  heading: {
    fontSize: 30,
    marginTop: 10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48bbec'
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
  },
  spinner: {
    marginTop: 20
  },
  error: {
    color: 'red',
    paddingTop: 20
  }
});

module.exports = Login;
