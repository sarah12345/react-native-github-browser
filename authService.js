var Buffer = require('buffer');

class AuthService {
  login(credentials, callback) {
    var buffer = new Buffer.Buffer(credentials.username + ':' + credentials.password);
    var encodedAuth = buffer.toString('base64');

    fetch('https://api.github.com/user', {
       headers: {'Authorization' : 'Basic ' + encodedAuth}
      })
      .then((response)=> {
        if (response.status >= 200 && response.status < 300) {
          return response;
        }
        throw {
          badCredentials: response.status == 401,
          unknownError: response.status != 401
        }
      })
      .then((response)=> {
        return response.json();
      })
      .then((results)=> {
        return callback({success: true});
      })
      .catch((error)=> {
        return callback(error);
      })
  }
}

module.exports = new AuthService()
