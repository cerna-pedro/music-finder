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
      this.setState({
        artist: JSON.parse(localStorage.getItem('artist')),
        albums: JSON.parse(localStorage.getItem('albums')),
      });
    }
  }

  getAlbums = async (artist) => {
    try {
      const url = `https://itunes.apple.com/search?term=${artist}&media=music&entity=album`;
      const albums = await axios.get(url).then((res) => res.data.results);
      const realName = (albums.length && albums[0].artistName) || artist;
      this.setState({ artist: realName, albums });
      localStorage.setItem('artist', JSON.stringify(artist));
      localStorage.setItem('albums', JSON.stringify(albums));
    } catch (error) {
      console.log(error);
      this.props.history.push('/OOPS');
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const regex1 = /\s\s+/g;
    const regex2 = /(\b[a-z](?!\s))/g;
    const artistName = e.currentTarget.firstChild.value
      .trim()
      .replace(regex1, ' ')
      .replace(regex2, (letter) => {
        return letter.toUpperCase();
      });
    this.getAlbums(artistName);
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
        <ArtistForm handleSubmit={this.handleSubmit} />
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
