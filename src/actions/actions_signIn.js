import axios from 'axios';

const ROOT_URL = 'http://localhost:3030';

export function signinUser({ email, password }) {
    return function(dispatch) {
    //submit email/pw to server
    axios.post(`${ROOT_URL}/signin`, { email, password });
    //update state to reflect authentication
    //save jwt token
    //redirect route


    //else show error to user
    }
}
