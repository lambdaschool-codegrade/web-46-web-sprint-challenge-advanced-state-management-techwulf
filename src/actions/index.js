import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_START = 'FETCH_START';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
export const fetchSmurfs = () => dispatch => {
  dispatch(fetchStart());
  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('axios req: ', res.data);
    })
    .catch(err => {
    });
};
export const fetchStart = () => ({type: FETCH_START});
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.