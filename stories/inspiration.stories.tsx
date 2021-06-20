import React from 'react';
import { Meta } from '@storybook/react';

export default {
  title: 'Inspiration',
} as Meta;

export function Inspiration() {
  return (
    <div>
      {[...new Array(29)].map((_, i) => (
        <img
          src={
            'https://raw.githubusercontent.com/seanmcintyre/sharktooth/master/stories/static/image-' +
            (i + 1) +
            '.png'
          }
        />
      ))}
    </div>
  );
}
