import React, { useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
const getMovieRequest = async () => {
  const url = "http://www.omdbapi.com/?s=star wars&apikey=15c87b94" //api url si değişecek star wars silinip search value eklenecek.
  const response = await fetch(url);
  const responseJson = await response.json();

  console.log(responseJson);
  setMovies(responseJson.Search)
};

 
useEffect(() => {
  getMovieRequest();
}, []);

return (
  <div className='container-fluid movie-app'>
    <div className='row'>
      <MovieListHeading heading='Filmler'/> {/* Film listesinin heading buraya gelecek. */}
      <SearchBox/>
    </div> 
    <div className='row'>
      <MovieList movies={movies}/>
    </div>
  </div>
  ); 
};




export default App; 