let current_token;


exports.setToken = (token) => {
  if(!token) throw new Error('Token Invalid: ' + token)
    current_token = token;
}


exports.getToken = () => {
 return current_token 
}