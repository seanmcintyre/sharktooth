import React from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/css';

import itemImage from './static/item.png';

export default {
  title: 'OverlayNav',
} as Meta;

export function VariantA() {
  return (
    <>
      <div
        className={css`
          width: 120%;
          height: 120vh;
          top: -10%;
          left: -10%;
          position: fixed;
          background: url(${(itemImage as unknown) as string})
            no-repeat center center;
          background-size: cover;
          filter: blur(20px) brightness(0.7) contrast(150%);
        `}
      />
      <div
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          padding: 4rem;
          color: white;

          h1 {
            font-size: calc(6vw + 4rem);
            margin: 0;
          }

          h2 {
            font-size: calc(2vw + 2rem);
            margin: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.25);
          }
        `}
      >
        <h1>Sharktooth</h1>
        <h2>Shop</h2>
        <h2>Services</h2>
        <h2>About</h2>
      </div>
    </>
  );
}

export function VariantB() {
  return <div>test</div>;
}

export function VariantC() {
  return <div>test</div>;
}
