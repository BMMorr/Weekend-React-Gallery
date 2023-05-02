import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  useEffect(() => {
    fetchGallery();
  }, [])

  const [gallery, setGallery] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGallery(response.data);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Gallery of My Favorite Albums</h1>
      </header>
      <GalleryList gallery={gallery} />
    </div>
  );
}

export default App;