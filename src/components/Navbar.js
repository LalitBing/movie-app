import { render } from '@testing-library/react';
import React from 'react';

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showShowResults: true,
  //     searchText: '',
  //   };
  // }

  // handletAddToMovies = (movie) => {
  //   this.props.dispatch(addMovieToList(movie));
  //   this.setState({
  //     showShowResults: false,
  //   });
  // };

  // handleSearch = () => {};
  // handleChange = (e) => {
  //   this.setState({
  //     searchText: e.target.value,
  //   });
  // };

  render() {
    // const { showSearchResults } = this.state;
    return (
      <div className="nav">
        <div className="search-container">
          <input />
          <button id="search-btn">Search</button>
        </div>
      </div>
    );
  }
}

export default Navbar;
