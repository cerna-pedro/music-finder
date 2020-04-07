import React from 'react';

class AlbumShowcase extends React.Component {
  goHome = () => {
    this.props.history.goBack();
  };
  render() {
    const updatedImg= decodeURIComponent(this.props.match.params.url).slice(0, decodeURIComponent(this.props.match.params.url).length - 13) + '1000x1000bb.jpg'
    return (
      <div onClick={this.goHome} className="album-showcase">
        <img className="album album-showcase__album" src={updatedImg} alt='' />
        <h1 className="title"><span>{this.props.match.params.album}</span></h1>
        <h2 className="subtitle"><span>By {this.props.match.params.artist}</span></h2>
        <h2 className="subtitle"><span>Released in {this.props.match.params.year}</span></h2>
        <a className="link"
          href={decodeURIComponent(this.props.match.params.link)}
          target='_blank'
          rel='noopener noreferrer'
        >
          Check out {this.props.match.params.album} on Apple Music
        </a>
        <p className="paragraph"><span>Click anywhere to go back to the main screen</span></p>
      </div>
    );
  }
}

export default AlbumShowcase;
