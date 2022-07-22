import React, { useState, useEffect } from 'react';
import contentLinks from './data/contentLinks';
import List from './List/List';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(contentLinks);
  }, [])

  return (
    <List list={list} />
  );
}

export default App;