import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
      scroll-behavior: smooth;
      font-size: 62.5%;
    
      --ff-titles: 'Montserrat', sans-serif;
      --fw-titles: 800;
    
      --ff-texts: 'Mulish', sans-serif;
      --fw-texts: 400;
    
      --boxes-radius: 7px;
    
      --cll-primary: #BADC58;
    
      --cll-title: #2D3561;
      --cll-text: #BCBCBC;
    
      --cll-title-darker: #1D164D;
      --cll-text-darker: #9E9BAF;
    
      --cll-in-primary: #ffffff;
      --cll-background: #ffffff;
      --cll-background-darker: #FAFAFC;
      --cll-complements: #2D3561;
    
      --section-height: 54.8rem;
      --padding-lateral: 2.4rem;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

  body,
  main,
  section {
    background: var(--cll-background);
  }

  h1, h2, h3 {
    font-family: var(--ff-titles);
    font-weight: var(--fw-titles);
    color: var(--cll-title-darker);
  }

  h1 {
    font-size: 3rem;
    line-height: 4.375rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.6875rem;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 2.125rem;
  }

  a,
  p,
  span,
  button,
  input,
  input::placeholder {
    font-family: var(--ff-texts);
    font-weight: var(--fw-texts);
    color: inherit;
  }

  p,
  span,
  button,
  input::placeholder {
    color: var(--cll-text);
  }

  input {
    color: var(--cll-text-darker);
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  a,
  button {
    cursor: pointer;
  }

  @media (min-width: 480px) {
    :root {
      --padding-lateral: 4.8rem;
    }
  }

  @media (min-width: 768px) {
    :root {
      --padding-lateral: 8.25rem;
      --section-height: 48rem;

      font-size: 75%;
    }

    p,
    span,
    button,
    input,
    input::placeholder {
      font-size: 1rem;
    }
  }

  @media (min-width: 992px) {
    :root {
      font-size: 87.5%;
    }
  }

  @media (min-width: 1200px) {
    :root {
      /* --section-height: 64rem; */

      font-size: 100%;
    }
  }
`;