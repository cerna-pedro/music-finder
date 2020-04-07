import React from 'react';

const Artist = (props) => {
  return (
    <div className='artist-div'>
      <h2 className='subtitle'>
        <span>{props.artist}</span>
      </h2>
      {props.albums.length ? (
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href={`${props.albums[0].artistViewUrl}`}
        >
          Checkout {props.artist} on Apple Music
        </a>
      ) : (
        <p className='paragraph'>
          <span>
            It doesn't seem like there's any music by {props.artist} 🤷🏽‍♂️ ...
          </span>
        </p>
      )}
    </div>
  );
};

export default Artist;
