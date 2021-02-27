import { useRouter } from 'next/router';
import { css } from '@emotion/css';

import { Page } from '../../layout/Page';

export default function Shop(props) {
  const router = useRouter();
  const { item } = router.query;

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
        <Item name={item} price={'$$$'} />
      </div>
    </Page>
  );
}

function Item({ name, price }) {
  return (
    <div
      className={css`
        padding: 5rem;
        margin: 1rem;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.25rem;
        width: calc(33.33% - 2rem);
      `}
    >
      {name}
      <br />
      {price}
    </div>
  );
}
