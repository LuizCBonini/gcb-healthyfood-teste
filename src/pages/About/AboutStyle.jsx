import styled from 'styled-components'

export const Container = styled.section`
  width: 100vw;
  height: var(--section-height);
  > div {
    padding: 0 var(--padding-lateral) 0 0;
    height: 100%;
    display: flex;
    justify-content: center;
    div.content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.4rem;
      > h2 {
        color: var(--cll-title);
      }
      > p,
      > h2 {
        max-width: 26rem;
        min-width: 26rem;
      }
      button > p {
        box-shadow: 0px 14px 12px 6px rgba(186, 220, 88, 0.8);
      }
    }
    > img {
      height: 100%;
    }
  }
  @media (max-width: 559px) {
    > div > img {
      display: none;
    }
  }
  @media (min-width: 560px) {
    > div {
      justify-content: flex-end;
      div.content {
        flex: 1;
      }
    }
  }
  @media (min-width: 1440px) {
    > div {
      gap: 6vw;
    }
  }
`;