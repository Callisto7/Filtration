import React, { useState } from 'react';
import Videos from './data/Videos';
import VideoList from './components/VideoList';

function App() {
  const [list] = useState(Videos);

  return (
      <VideoList list={list} />
  );
}

export default App;