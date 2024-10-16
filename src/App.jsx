import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Display from './components/Display/Display';
import Header from './components/Header/Header';

function App() {
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  return (
    <div className="App">
      {/* Navbar */}
      {/* main section */}
      {/* <Card/> */}
      <Header groupBy={groupBy} setGroupBy={setGroupBy} sortBy={sortBy} setSortBy={setSortBy}/>
      <Display groupBy={groupBy} sortBy={sortBy} />
      
    </div>
  );
}

export default App;
