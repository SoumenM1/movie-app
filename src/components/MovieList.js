// src/components/MovieList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MovieList.css';  // Import the CSS file for styling

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    })
    .then(response => {
      setMovies(response.data.result);
    })
    .catch(error => {
      console.error('There was an error fetching the movie list!', error);
    });
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie._id} className="movie-card">
          <div className="movie-votes">
            <span>{movie.voting}</span>
            <p>Votes</p>
          </div>
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
            <p>Starring: {movie.stars}</p>
            <p>{movie.runTime} Mins | {movie.language} | {movie.releasedDate}</p>
            <p>{movie.pageViews} views | Voted by {movie.totalVoted} People</p>
            <button className="trailer-button">Watch Trailer</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
