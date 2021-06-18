import React from 'react';
import { Meta } from '@storybook/react';

import { App } from '../App';

import { ItemDetails } from './ItemDetails';

export default {
  title: 'ItemDetails',
} as Meta;

export function VariantA() {
  return (
    <App>
      <ItemDetails />
    </App>
  );
}

export function VariantB() {
  return <App>test</App>;
}
