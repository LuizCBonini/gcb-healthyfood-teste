import styled from 'styled-components';
  
 export const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    background: var(--cll-primary);
    border: 1px solid var(--cll-primary);
    border-radius: var(--boxes-radius);
    
    padding: .8rem 1rem;
    white-space: nowrap;
    
    transition: filter 0.2s, background 0.2s, color 0.2s;
    &:hover {
    filter: brightness(0.92);
    cursor: pointer;
    }
    >p {
      color: var(--cll-in-primary);
      font-size: 1.2rem;
    }
    
 `;