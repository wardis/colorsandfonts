import React, { useState } from 'react';
import { css } from 'emotion';

const Card = () => {
  const [background, setBackground] = useState('#fdfdfd');
  const [font, setFont] = useState('#424242');

  const setStyle = (background = '#fdfdfd', font = '#424242') => {
    setBackground(background);
    setFont(font);
  };

  const card = css`
    max-width: 600px;
    padding: 40px;
    margin: 0 auto;
    background-color: ${background};
    transition: all 1s;
    h1 {
      font-weight: 400;
      font-size: 36px;
      margin-bottom: 10px;
      color: ${font};
    }
    p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 20px;
      color: ${font};
    }
  `;

  const cardButtons = css`
    button {
      font-weight: 500;
      font-size: 12px;
      padding: 10px 30px;
      margin-right: 20px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      outline: none;
    }
  `;
  const blackButton = css`
    color: #fdfdfd;
    background-color: #424242;
  `;
  const blueButton = css`
    color: #fdfdfd;
    background-color: #1d499b;
  `;
  const yellowButton = css`
    color: #424242;
    background-color: #f9d648;
  `;

  return (
    <div className={card}>
      <h1>This is a title</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, eligendi
        tenetur! Expedita quae at repudiandae fuga fugiat, nulla minima quia.
      </p>
      <div className={cardButtons}>
        <button
          onMouseEnter={() => setStyle('#424242', '#fdfdfd')}
          onMouseOut={() => setStyle()}
          className={blackButton}
        >
          Black
        </button>
        <button className={blueButton}>Blue</button>
        <button className={yellowButton}>Yellow</button>
      </div>
    </div>
  );
};

export default Card;
