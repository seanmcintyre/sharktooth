import { injectGlobal } from '@emotion/css';

export function App({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

injectGlobal`
  @import url('https://fonts.googleapis.com/css2?family=Catamaran:wght@100;200;300;400;500;600&display=swap');

  :root {
  --color-primary: #033828;
  --color-primary-hover: #26613f;
}

  * {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }

  html, body {
    background: #FCF9F3;
    font-family: 'Catamaran', sans-serif;
  }
`;
