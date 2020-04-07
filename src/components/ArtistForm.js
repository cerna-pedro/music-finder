import React from 'react';

const ArtistForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className="artist-form">
      <input className="artist-form__input"
        type='text'
        name='artist'
        id='artist'
        placeholder='Artist Name...'
      />
      <button className="artist-form__button" type='submit'>Go</button>
    </form>
  );
};

export default ArtistForm;
