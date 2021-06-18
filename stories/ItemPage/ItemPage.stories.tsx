import React, { useEffect, useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { css } from '@emotion/css';

import { App } from '../App';
import itemImage from '../static/item.png';
import { ItemDetails } from '../ItemDetails/ItemDetails';

export default {
  title: 'ItemPage',
} as Meta;

export function VariantA() {
  return (
    <App>
      <div
        className={css`
          display: flex;
        `}
      >
        <ItemDetails />
        <div
          className={css`
            min-width: 50%;
          `}
        >
          <ItemImage
            className={css`
              width: 100%;
            `}
            src={itemImage}
          />
        </div>
      </div>
    </App>
  );
}

export function VariantB() {
  return <div>test</div>;
}

export function VariantC() {
  return <div>test</div>;
}

function ItemImage({ src, ...props }) {
  const [active, activeSet] = useState(false);
  const [rect, rectSet] = useState<any>({});

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const rect = ref?.current?.getBoundingClientRect();
      rectSet(rect);
    }, 100);
  }, []);

  useEffect(() => {
    const rect = ref?.current?.getBoundingClientRect();
    rectSet(rect);
  }, [active]);

  function onClick() {
    activeSet((active) => !active);
  }

  const {
    top = null,
    left = null,
    height = null,
    width = null,
  } = active
    ? { top: 0, left: 0, height: '100vh', width: '100%' }
    : rect;

  return (
    <>
      <img
        ref={ref}
        className={css`
          width: 100%;
          cursor: pointer;
        `}
        src={(itemImage as unknown) as string}
        onClick={onClick}
        style={{
          opacity: active ? 0 : 1,
          transitionDelay: active ? '0ms' : '200ms',
        }}
      />
      <div
        className={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;

          transition: 250ms ease-in-out;
        `}
        onClick={onClick}
        style={{
          pointerEvents: active ? 'auto' : 'none',
          background: active
            ? 'rgba(255, 255, 255, 1)'
            : 'rgba(255, 255, 255, 0)',
          transitionDelay: active ? '200ms' : '0ms',
        }}
      >
        <img
          className={css`
            width: 100%;
            top: 50%;
            position: absolute;
            transition: 250ms ease-in-out;
            cursor: pointer;
          `}
          src={(itemImage as unknown) as string}
          style={{ top, left, width, opacity: active ? 1 : 0 }}
        />
      </div>
    </>
  );
}
