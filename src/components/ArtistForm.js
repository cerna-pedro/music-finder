import React from 'react';

const ArtistForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="artist-form">
      <input className="artist-form__input"
        type='text'
        name='artist'
        id='artist'
        placeholder='Artist Name...'
        onChange={props.handleChange}
        value={props.artist}
      />
      <button className="artist-form__button" type='submit'>Go</button>
    </form>
  );
};

export default ArtistForm;
