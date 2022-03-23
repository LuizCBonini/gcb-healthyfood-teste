import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 1.5rem var(--padding-lateral);
  z-index: 3;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logotype {
    color: var(--cll-primary);
  }

  >div {
    display: flex;
    align-items: center;
    gap: 2rem;
    }

  .nav-bar > ul.menu {
    display: flex;
    align-items: center;
  }

  .nav-bar > ul.menu > a > li > span {
    padding: 1rem;
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    font-family: var(--ff-texts);

    
  }

  .nav-bar > ul.menu > a > li > span:hover {
    border-bottom: 2px solid white;
    transition: border-color 0.2s;
  }

  .nav-bar > ul.menu > li > button {
    background-color: var(--cll-in-primary);
    color: var(--cll-primary);
    padding: .8rem 1.8rem;
    border-radius: var(--boxes-radius);
    border: 1px solid var(--cll-primary);
    font-weight: 600;
    font-size: 1.1rem;
    margin-left: 20px;
  }

  .nav-bar > ul.menu > li > button:hover {
    transition: 0.2s;
    background-color: #e8e8e8;
  }

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    .mobile {
      display: initial;
      color: var(--cll-in-primary);
      font-size: 3rem;
      margin-left: 1rem;
    }

    .nav-bar > ul.menu > a {
      display: none;
    }
  }

  @media (max-width: 350px) {
    .mobile {
      color: var(--cll-title)
    }

    .nav-bar > ul.menu > li > button {
      background-color: var(--cll-primary);
      color: var(--cll-in-primary);
      font-weight: 500;
    }
  }
`;