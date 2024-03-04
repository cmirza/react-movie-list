import React, { useEffect, useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { MovieForm } from "./components/MovieForm";
import { Container } from "semantic-ui-react";

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    console.log('Running useEffect');
    fetch('/movies').then((response) =>
      response.json().then((data) => {
        setMovies(data.movies);
      })
    );
  }, []);

  return <div>
    <Container style={{ marginTop: 40 }}>
      <MovieForm onNewMovie={movie => setMovies(currentMovies => [...currentMovies, movie])} />
      <Movies movies={movies} />
    </Container>
  </div>;
}

export default App;
