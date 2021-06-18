import { css, cx } from '@emotion/css';

import { Button } from '../Button/Button';
import { Title } from '../Title/Title';

export function ItemDetails({
  // children,
  className = null,
  title = 'Early American Rag Rug',
  subtitle = 'Lorem Ipsum Dolor',
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totamfugiat asperiores nulla magnam voluptates iste delenitinecessitatibus, porro iusto accusantium pariatur? Alias sequi a voluptatum eveniet corporis. Officia odio inventore adipisciquod aliquam itaque incidunt voluptatibus similique voluptatum, eligendi aperiam?',
  notes = [
    'Lorem, ipsum.',
    'Lorem ipsum dolor sit.',
    'Lorem ipsum dolor sit amet consectetur adipisicing.',
    'Lorem, ipsum dolor.',
  ],
  price = 1200,
  ...props
}) {
  return (
    <div className={cx(styles, className)} {...props}>
      <Overline>{subtitle}</Overline>
      <Title>{title}</Title>
      <Description>
        {description}
        <br />
        <ul>
          {notes.map((note) => (
            <li>{note}</li>
          ))}
        </ul>
      </Description>
      <Button>Add To Basket — ${price} USD</Button>
      <Details>
        <span>01 — Fabric Info</span>
        <span>02 — Care Instructions</span>
        <span>03 — Lorem Ipsum</span>
      </Details>
    </div>
  );
}

const styles = css`
  min-width: 15rem;
  max-width: 35rem;
`;

function Overline({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

function Description({ children, ...props }) {
  return (
    <div
      className={css`
        ul {
          margin: 1rem 0;
          padding: 0 1.75rem;
          list-style: circle;
        }

        li {
          margin: 0;
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
}

function Details({ children, ...props }) {
  return (
    <div
      className={css`
        display: flex;
        flex-direction: column;
        margin-top: 2rem;

        > span {
          border-top: 1px solid var(--color-primary);
          display: block;
          padding: 0.5rem 0;
          font-size: 1.25rem;
          position: relative;

          &:after {
            content: '+';
            position: absolute;
            right: 0;
            top: 0.45rem;
          }
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
}
