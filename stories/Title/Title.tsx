import { css } from '@emotion/css';

export function Title({ children, ...props }) {
  return (
    <h2 className={styles} {...props}>
      {children}
    </h2>
  );
}

const styles = css`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
`;
