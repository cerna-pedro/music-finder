import React from 'react';

class Album extends React.Component {
  albumClick = () => {
    const name = this.props.albums.artistName;
    const year = this.props.albums.releaseDate.slice(0, 4);
    const album = this.props.albums.collectionCensoredName;
    const url = encodeURIComponent(this.props.albums.artworkUrl100);
    const link = encodeURIComponent(this.props.albums.collectionViewUrl)
    this.props.albumClick(name, album, link, year, url);
  };

  render() {
    return (
      <img className="album"
        src={this.props.albums && this.props.albums.artworkUrl100}
        onClick={this.albumClick}
        alt={`Album Artwork by ${this.props.albums.artistName}`}
      />
    );
  }
}

export default Album;
