import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { data } from './component/data';
import { MovieDetails } from './component/MovieDetails';
import MovieList from './component/MovieList' 

function App() {
  const [list, setList]=useState(data);
  return (
    <div>
    <Routes>
    <Route path="/" element={<MovieList list={list}/>} />
    <Route path="/details/:idmov" element={<MovieDetails list={list}/>} />
    </Routes>
    </div>
  );
}

export default App;
