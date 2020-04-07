import React from 'react';

const Error = () => {
  return (
    <div className='error'>
      <h1 className='title'>
        <span>Something went wrong...</span>
      </h1>
      <p className='paragraph'>
        <span>So, one of two things happened here...</span>
      </p>
      <ul className='error__list'>
        <li className='error__item'>
          <span>
            The route you are looking for doesn't exist, which in that case,
            click the link below to get back to the home page.
          </span>
        </li>
        <li className='error__item'>
          <span>
            The Apple Music API has been overloaded, which, for all the
            non-nerds out there, just means that you gotta wait a dog gone
            minute...LITERALLY. Wait 1 minute.
          </span>
        </li>
      </ul>
      <a className='link' href='/'>
        Go Back To Home Page
      </a>
    </div>
  );
};

export default Error;
