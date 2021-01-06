import React from 'react';
import axios from 'axios'; 
import SearchBar from './SearchBar';
require ('dotenv').config();

const API_KEY = process.env.REACT_APP_UNSPLASH;

class App extends React.Component {



  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: API_KEY
      }
    });
  }

  render () {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }

}


export default App;