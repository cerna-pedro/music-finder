import React from 'react';
import axios from 'axios';
import ArtistForm from './components/ArtistForm';
import Artist from './components/Artist';
import Album from './components/Album';
import Header from './components/Header';

class App extends React.Component {
  state = {
    artist: null,
    albums: [],
  };
  componentDidMount() {
    if (localStorage.getItem('artist') && localStorage.getItem('albums')) {
      // merge local storage data into an object
      // instead of multiple keys
      this.setState({
        artist: JSON.parse(localStorage.getItem('artist')),
        albums: JSON.parse(localStorage.getItem('albums')),
      });
    }
  }

  getAlbums = async (artist) => {
    try {
      const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album`;
      const response = await axios.get(url);
      const albumData = response.data.results;
      const realName = (albumData.length && albumData[0].artistName) || artist;
      this.setState({ artist: realName, albums: albumData });

      // these 2 items can be merged into an object so we're
      // only setting and getting one local storage item
      localStorage.setItem('artist', JSON.stringify(artist));
      localStorage.setItem('albums', JSON.stringify(albumData));
    } catch (error) {
      console.log(error);
      this.props.history.push('/OOPS');
    }
  };

  handleChange = e => {
    this.setState({
      artist: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const artist = this.state.artist;
    this.getAlbums(artist);
  };

  albumClick = (artistName, albumName, link, year, url) => {
    this.props.history.push(
      `/${artistName}/${albumName}/${link}/${year}/${url}`
    );
  };

  render() {
    return (
      <div className='music-collection-finder'>
        <Header />
        <ArtistForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        {this.state.artist && (
          <Artist artist={this.state.artist} albums={this.state.albums} />
        )}
        <ul className='album-list'>
          {this.state.albums.length
            ? this.state.albums.map((key, i) => (
                <Album
                  key={i}
                  albums={this.state.albums[i]}
                  albumClick={this.albumClick}
                />
              ))
            : ''}
        </ul>
      </div>
    );
  }
}

export default App;
