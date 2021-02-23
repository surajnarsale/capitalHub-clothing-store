import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --clr-primary:#22d1ee;
  --clr-secondary:#0e153a;
  --clr-tertiary:#f4f7f8;
  --clr-dark:#000000;
  --clr-light:#f5f5f5;

  --ff-primary: 'Calibri',monospace;
  --ff-secondary: 'Public Sans', sans-serif;
  --fs-h1: 3.125rem; //50px
  --fs-h2: 1.875rem; //30px
  --fs-h3: 1.25rem;  //20px
  --fs-h4: 0.875rem; //14px
  --fs-body: 1.25rem; //20px
  --spacing: 0.1rem;  //1.6px

  --fw-reg: 300;
  --fw--semibold: 600;
  --fw-bold: 900;

  --transition: all 0.3s linear;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);

  --mobile:576px;
  --tablet:768px;
  --laptop:992px;
  --desktop:1200px;
}
*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
  margin: 0;
  padding: 0;
  background: var(--clr-light);
  color: var(--clr-secondary);
  font-family:var(--ff-primary) ;
  }
  ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}

h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    line-height: 1.25;
}

h1 {
    font-size: var(--fs-h1);
}

h2 {
    font-size: var(--fs-h2);
}

h3 {
    font-size: var(--fs-h3);
}

h4 {
    font-size: var(--fs-h4);
}

img {
    display: block;
    max-width: 100%;
}

@media screen and (min-width: var(--tablet)) {
    :root {
        --fs-h1: 4.5rem;
        --fs-h2: 3.75rem;
        --fs-h3: 1.5rem;
        --fs-h4: 1rem;
        --fs-body: 1.125rem;
    }
    h1,
    h2,
    h3,
    h4 {
        line-height: 1;
    }
}

`;
