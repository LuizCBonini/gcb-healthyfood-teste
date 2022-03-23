import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 1.2rem 0 2.3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--cll-background-darker);
  header {
    text-align: center;
    p {
      margin-top: 1rem;
      max-width: 36rem;
      color: var(--cll-text-darker);
    }
  }
`;

export const CardContainer = styled.div`

  
  padding: 2rem var(--padding-lateral);
  width: 100%;
  background-color: var(--cll-background-darker);
  justify-content: start;
  align-items: center;
  min-width: 82rem;
  
  }
  > div > div > h3 {
  width: 13.8rem;
  flex-direction: column;
  }
  > div > div > Button {
    color: black;
  }

  >div.card-list {
    display: grid;
    width: 80vw;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  >div.card-slider {
    display: none;
  }
  @media (max-width:900px) {

    >div.card-list{
      display: none;
    }

    >div.card-slider {
      display: flex;
    }

    > div > div {
      padding: 3.5rem 0;
      .swiper-container {
        overflow: visible;
        width: 200vw;
      }
  }

  
`;