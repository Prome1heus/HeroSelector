import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      heros: [],
      searchfield: ''
    }
  }

  componentWillMount() {
    document.title = 'HeroSelector'
  }

  componentDidMount() {
    fetch('https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/all.json')
      .then(response=> response.json())
      .then(users => {this.setState({ heros: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { heros, searchfield } = this.state;
    var filteredHeros = heros.filter(hero =>{
      return hero.name.toLowerCase().startsWith(searchfield.toLowerCase());
    })
  
    filteredHeros = filteredHeros.concat(heros.filter(hero =>{
      return (!hero.name.toLowerCase().startsWith(searchfield.toLowerCase()) && hero.name.toLowerCase().includes(searchfield.toLowerCase()));
    }));
    return !heros.length ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f2'>HEROSELECTOR</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredHeros} />
          </Scroll>
        </div>
      );
  }
}

export default App;