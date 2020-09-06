import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class Bpp extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
    
  }
  handlechange = e =>{
    this.setState({searchField: e.target.value})
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
    <div className="App_1">
      <h1> Monsters Rolodex </h1>
      <SearchBox
      placeholder='search monsters'
      handlechange={this.handlechange}
      />
    <CardList monsters={filteredMonsters}/>
    </div>
    );
  };
}

export default Bpp;
