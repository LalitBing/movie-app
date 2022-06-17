import React from 'react';

import { data } from '../data';
import { addMovies, setShowFavourites } from '../actions';
import Navbar from './Navbar';
import MovieCard from './MovieCard';

class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log('componentDidMount : UPDATED!');
      this.forceUpdate();
    });
    // make api call in an actual project
    // dispatch action
    store.dispatch(addMovies(data));
    console.log('STATE:', store.getState());
  }

  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    const { favourites } = movies;
    //will return -1 if the movie not found or 1 if it is there:
    const index = favourites.indexOf(movie);
    //checking whether the movie is there:
    if (index !== -1) {
      // found the movie
      return true;
    } else return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies } = this.props.store.getState(); //{movies{}, search{}}
    const { list, favourites, showFavourites } = movies; //{list:[], favourites:[], showFavourites: false}

    const displayMovies = showFavourites ? favourites : list;
    console.log('RENDER:', this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? '' : 'active-tabs'}`}
              onClick={() => this.onChangeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? 'active-tabs' : ''}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>

          <div className="list">
            {displayMovies.length == 0 ? (
              <div className="no-movies">No movies to display</div>
            ) : (
              displayMovies.map((movie, index) => (
                <MovieCard
                  movie={movie}
                  key={`movies-${index}`}
                  dispatch={this.props.store.dispatch}
                  store={this.props.store}
                  isFavourite={this.isFavourite(movie)}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
