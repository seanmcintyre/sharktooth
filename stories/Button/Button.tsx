import { css, cx } from '@emotion/css';

export function Button({
  children = null,
  className = null,
  ...props
}) {
  return (
    <button className={cx(styles, className)} {...props}>
      {children}
    </button>
  );
}

const styles = css`
  background: var(--color-primary);
  color: white;
  padding: 0.75rem 1.5rem;
  display: inline-flex;
  font-weight: 300;
  letter-spacing: 0.05rem;
  border-radius: 0.25rem;
  outline: none;
  border: none;
  font-size: 1rem;
  transition: 90ms ease-in-out;
  cursor: pointer;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-primary-hover);
    transform: scale(1.01);
  }
`;
