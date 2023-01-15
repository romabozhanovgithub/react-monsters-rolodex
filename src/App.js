import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'; // css applied to entire project


const App = () => {
  const [monsters, setMonsters] = useState([]); // [value, setValue] = useState(initialValue);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [search, setSearch] = useState(""); // checks if value is the same as previous value, if not, it re-renders
  // it checks if it the same pointer in memory

  useEffect(() => { // useEffect() is called after render(), when component is mounted, it is called only once
    // useEffect() can be executed twice, because of <React.StrictMode> in index.js
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonsters(users));
  }, []); // [] is the dependency array, if it is empty, it is called only once, if it is not empty,
  // it is called when component mounted and every time the value in the array changes

  useEffect(() => {
    setFilteredMonsters(
      monsters.filter(
        monster => monster.name.toLowerCase().includes(search)
      )
    );
  }, [search, monsters]);

  const handleSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();
    setSearch(searchField);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monsters=search-box"
        placeholder="Search monsters"
        onChangeHandler={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
