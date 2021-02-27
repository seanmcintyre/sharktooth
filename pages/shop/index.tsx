import { css } from '@emotion/css';

import { Page } from '../../layout/Page';

export default function Shop({}) {
  return (
    <Page>
      <h1 className="title">Shop</h1>

      <div
        className={css`
          display: flex;
          flex-wrap: wrap;
          padding: 2rem;
        `}
      >
        {items.map((props, key) => (
          <Item key={key} {...props} />
        ))}
      </div>
    </Page>
  );
}

const items = Array.from({ length: 40 }).map((_, i) => ({
  name: `item-${i}`,
  price: Math.random() * (Math.random() * 10) * (Math.random() * 5),
}));

function Item({ name, price }) {
  return (
    <a
      href={`/shop/${name}`}
      className={css`
        padding: 1rem;
        margin: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        width: calc(33.33% - 2rem);
      `}
    >
      <div>
        {name}
        <br />${Math.round(price * 100)}.00
      </div>
    </a>
  );
}
