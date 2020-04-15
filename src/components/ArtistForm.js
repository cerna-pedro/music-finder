import React from 'react';

const ArtistForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className='artist-form'>
      <input
        className='artist-form__input'
        type='text'
        name='artist'
        id='artist'
        placeholder='Artist Name...'
        value={props.input}
        onChange={props.handleInput}
      />
      <button
        className='artist-form__button'
        type='submit'
        disabled={props.input === ''}
      >
        Go
      </button>
      {props.albums.length ? (
        <button
          type='reset'
          className='artist-form__button'
          onClick={props.reset}
        >
          Reset
        </button>
      ) : null}
    </form>
  );
};

export default ArtistForm;
