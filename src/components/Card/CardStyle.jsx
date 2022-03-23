import styled, { css } from 'styled-components';


export const Container = styled.div`
  display: flex;
  gap: 2rem;
  background: var(--cll-background);
  box-shadow: 0px 12px 16px 8px rgba(0, 0, 0, 0.1);
  border-radius: var(--boxes-radius);
  overflow: hidden;
  > img {
    object-fit: cover;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      margin-top: 1.5rem;
      align-self: flex-start;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
      }
    }
  }
  ${(props) => {
    switch (props.$direction) {
      case "column":
        return css`
        flex: 1;
        max-width: 21.75rem;
        flex-direction: column;
        > img {
          height: 13.5rem;
        }
        > div {
          padding: 0 1.5rem 2rem;
        }
        > div > div> div {
          display: flex;
          align-items: center;
          >img{
            padding: .3rem;
          }
        }
        `;
      default:
        return css`
        align-items: center;
        > img {
          max-width: 14rem;
        }
        `;
    }
  }}
`;