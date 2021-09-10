import React, { Component } from "react";
import { connect } from 'react-redux';

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import { fetchSmurfs, fetchSuccess, fetchFail } from './actions';

import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
      console.log('axios: ',res.data);
      this.props.fetchSuccess(res.data);
    })
    .catch(err => {this.props.fetchFail(err);});
  }
    // useEffect(() => {
    //   props.fetchSmurfs();
    // },[]);

  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state => {
  return({
    smurfs: state.smurfs,
    appFetching: state.appFetching,
    appError: state.appError
  })
});

export default connect(
  mapStateToProps, {fetchSmurfs, fetchSuccess, fetchFail})(App
);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.