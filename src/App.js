import React, { Component } from 'react';
import SearchBox from './SearchBox';
import FeatureList from './FeatureList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {title:'Kakadu National Park', img:'https://placeimg.com/240/240/nature', location:'Jabiru NT'},
        {title:'Uluru-Kata Tjuta National Park', img:'https://placeimg.com/640/480/nature', location:'Uluru NT'},
        {title:'Royal National Park',  img:'https://placeimg.com/400/100/nature', location:'Royal National Park NSW'},
        {title:'Kosciuszko National Park',  img:'https://placeimg.com/240/600/nature', location:'NSW'},
      ],
      searchFeature: ''
    }
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({searchFeature: e.target.value});
  }

  render(){
    let filteredFeature = this.state.data.filter((data) => {
      return data.title.toLocaleLowerCase().includes(this.state.searchFeature.toLocaleLowerCase());
    });
    return (
      <div className="App">
        <h1>Feature List</h1>
        <SearchBox handleInput={this.handleInput} />
        <FeatureList filteredList ={filteredFeature} /> 
      </div>
    );    
  }
}

export default App;
